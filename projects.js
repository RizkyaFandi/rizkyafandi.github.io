/**
 * Controller Script for projects.html
 * 
 * ARCHITECTURE:
 * - This file contains ONLY controller, navigation, DOM handling, and TOC logic.
 * - Database records are managed in separate files under /projects-data/
 *   (e.g., nexmedis.js, nearon.js, fms.js, madhani.js, tos.js, other.js)
 *   and registered to window.PROJECTS_DATABASE.
 */

// Shared database registry (populated by individual files in /projects-data/)
window.PROJECTS_DATABASE = window.PROJECTS_DATABASE || {};

// Global controller state
let currentSelectedProjectId = 'nexmedis';
let headingObserver = null;
let isInternalRendering = false;

/**
 * Triggers a simple, smooth moving up animation on the target element
 * @param {HTMLElement} element 
 */
function triggerMoveUpAnimation(element) {
  if (!element) return;
  element.classList.remove('animate-move-up');
  void element.offsetWidth; // Force synchronous reflow to restart CSS animation
  element.classList.add('animate-move-up');
}

/**
 * Register a project dynamically (optional helper for external scripts)
 * @param {Object} projectData 
 */
function registerProject(projectData) {
  if (projectData && projectData.id) {
    window.PROJECTS_DATABASE[projectData.id] = projectData;
    // Re-populate mobile drawer if DOM is ready
    refreshMobileProjectList();
  }
}

/**
 * Switch active project, update button states, render content, and trigger TOC update
 * @param {string} projectId 
 * @param {boolean} smoothScrollToTop 
 */
function selectProject(projectId, smoothScrollToTop = false) {
  const db = window.PROJECTS_DATABASE;

  // Fallback to first available project if specified one doesn't exist
  if (!db[projectId]) {
    const availableKeys = Object.keys(db);
    projectId = availableKeys.includes(projectId) ? projectId : (availableKeys[0] || 'nexmedis');
  }

  currentSelectedProjectId = projectId;
  const project = db[projectId];

  // 1. Update Desktop Sidebar Buttons
  const desktopButtons = document.querySelectorAll('.project-btn');
  desktopButtons.forEach((btn) => {
    const btnProjectId = btn.getAttribute('data-project');
    const isSelected = btnProjectId === projectId;

    btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    if (isSelected) {
      btn.className = 'project-btn w-full flex items-center text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all group bg-slate-200 text-slate-900 shadow-sm';
    } else {
      btn.className = 'project-btn w-full flex items-center text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all group text-slate-600 hover:text-slate-900 hover:bg-slate-100';
    }
  });

  // 2. Update Mobile Toolbar Header Indicator
  const mobileName = document.getElementById('mobile-selected-name');
  const mobileIcon = document.getElementById('mobile-selected-icon');
  if (project) {
    if (mobileName) mobileName.textContent = project.name;
    if (mobileIcon) {
      if (project.logoSrc) {
        mobileIcon.innerHTML = `<img src="${project.logoSrc}" alt="${project.name}" class="w-4 h-4 object-contain" onerror="this.parentElement.innerHTML='<span class=\\'material-symbols-outlined text-[16px]\\'>token</span>'" />`;
      } else {
        mobileIcon.innerHTML = `<span class="material-symbols-outlined text-[16px] leading-none select-none">widgets</span>`;
      }
    }
  }

  // 3. Update Mobile Drawer Buttons active styling
  const mobileButtons = document.querySelectorAll('.mobile-project-item');
  mobileButtons.forEach((item) => {
    const itemProjectId = item.getAttribute('data-project');
    const isSelected = itemProjectId === projectId;
    if (isSelected) {
      item.className = 'mobile-project-item w-full flex items-center justify-between text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 text-slate-900';
    } else {
      item.className = 'mobile-project-item w-full flex items-center justify-between text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100';
    }
  });

  // 4. Inject Content into #project-content with smooth moving up animation
  const projectContent = document.getElementById('project-content');
  if (projectContent && project) {
    isInternalRendering = true;
    projectContent.innerHTML = project.htmlContent;
    triggerMoveUpAnimation(projectContent);
    setTimeout(() => { isInternalRendering = false; }, 50);
  }

  // 5. Populate and refresh Table of Contents
  updateTableOfContents();

  // 6. Optional scroll to absolute top of the page (like first opening the page)
  if (smoothScrollToTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Automatically scans all <h2> headings inside #project-content
 * Populates desktop and mobile Table of Contents with smooth scrolling jump links
 */
function updateTableOfContents() {
  const tocDesktopContainer = document.getElementById('table-of-contents');
  const tocMobileContainer = document.getElementById('mobile-toc-list');
  const mobileTocCount = document.getElementById('mobile-toc-count');

  const headings = Array.from(document.querySelectorAll('#project-content h2'));

  if (mobileTocCount) {
    mobileTocCount.textContent = String(headings.length);
  }

  if (headings.length === 0) {
    const emptyMsg = `<p class="text-xs text-slate-400 italic py-1">No section headings found.</p>`;
    if (tocDesktopContainer) tocDesktopContainer.innerHTML = emptyMsg;
    if (tocMobileContainer) tocMobileContainer.innerHTML = emptyMsg;
    return;
  }

  // Ensure every heading has a unique id and proper scroll offset class
  headings.forEach((heading, idx) => {
    if (!heading.id) {
      const slug = heading.textContent
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || `section-${idx + 1}`;
      heading.id = slug;
    }
    // Add scroll margin to ensure clean clearance below fixed top header
    heading.classList.add('scroll-mt-24');
  });

  // Build Desktop TOC links
  if (tocDesktopContainer) {
    tocDesktopContainer.innerHTML = '';
    headings.forEach((heading, index) => {
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent.trim();
      link.className = `toc-link block py-1 text-xs text-slate-500 hover:text-slate-900 transition-colors leading-relaxed truncate ${index === 0 ? 'text-slate-900 font-semibold' : ''}`;
      link.setAttribute('data-target-id', heading.id);

      link.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToHeading(heading.id);
      });

      tocDesktopContainer.appendChild(link);
    });
  }

  // Build Mobile TOC links
  if (tocMobileContainer) {
    tocMobileContainer.innerHTML = '';
    headings.forEach((heading) => {
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.className = 'block py-2 px-3 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors';
      link.textContent = heading.textContent.trim();

      link.addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileDrawers();
        scrollToHeading(heading.id);
      });

      tocMobileContainer.appendChild(link);
    });
  }

  // Re-initialize ScrollSpy for intersection tracking
  initScrollSpy(headings);
}

/**
 * Smoothly scrolls to heading accounting for fixed top header offset
 * @param {string} headingId 
 */
function scrollToHeading(headingId) {
  const target = document.getElementById(headingId);
  if (!target) return;

  const headerOffset = 90;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  history.pushState(null, '', `#${headingId}`);
  highlightActiveTocLink(headingId);
}

/**
 * Highlights active link in the desktop TOC
 * @param {string} activeId 
 */
function highlightActiveTocLink(activeId) {
  const tocLinks = document.querySelectorAll('#table-of-contents .toc-link');
  tocLinks.forEach((link) => {
    const targetId = link.getAttribute('data-target-id');
    if (targetId === activeId) {
      link.className = 'toc-link block py-1 text-xs text-slate-900 font-semibold transition-colors leading-relaxed truncate border-l-2 border-slate-900 -ml-[14px] pl-3';
    } else {
      link.className = 'toc-link block py-1 text-xs text-slate-500 hover:text-slate-900 transition-colors leading-relaxed truncate';
    }
  });
}

/**
 * Observe <h2> headings and highlight active TOC entry on scroll
 * @param {HTMLElement[]} headings 
 */
function initScrollSpy(headings) {
  if (headingObserver) {
    headingObserver.disconnect();
  }

  if (!('IntersectionObserver' in window) || headings.length === 0) return;

  headingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        highlightActiveTocLink(entry.target.id);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -75% 0px',
    threshold: 0.1
  });

  headings.forEach((heading) => headingObserver.observe(heading));
}

/**
 * Initialize Desktop Sidebar button click listeners
 */
function initDesktopSidebar() {
  const buttons = document.querySelectorAll('.project-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      selectProject(projectId, true);
    });
  });
}

/**
 * Refresh and populate the Mobile Project Drawer from window.PROJECTS_DATABASE
 */
function refreshMobileProjectList() {
  const projectDrawer = document.getElementById('mobile-project-drawer');
  if (!projectDrawer) return;

  const db = window.PROJECTS_DATABASE;
  const projectsList = Object.values(db);

  if (projectsList.length === 0) return;

  projectDrawer.innerHTML = projectsList.map((p) => {
    const isSelected = p.id === currentSelectedProjectId;
    const iconHtml = p.logoSrc
      ? `<img src="${p.logoSrc}" alt="${p.name}" class="w-4 h-4 object-contain" onerror="this.parentElement.innerHTML='<span class=\\'material-symbols-outlined text-[16px]\\'>token</span>'" />`
      : `<span class="material-symbols-outlined text-[16px] leading-none select-none">widgets</span>`;

    return `
      <button
        type="button"
        data-project="${p.id}"
        class="mobile-project-item w-full flex items-center justify-between text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm ${isSelected
        ? 'font-semibold bg-slate-900 text-white'
        : 'font-medium text-slate-700 hover:bg-slate-100'
      } transition-colors"
      >
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 bg-slate-100 text-slate-500">
            ${iconHtml}
          </div>
          <span class="truncate">${p.name}</span>
        </div>
        ${isSelected ? `<span class="material-symbols-outlined text-sm">check</span>` : ''}
      </button>
    `;
  }).join('');

  // Re-attach click events to mobile items
  const mobileItems = projectDrawer.querySelectorAll('.mobile-project-item');
  mobileItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      selectProject(projectId, true);
      closeMobileDrawers();
    });
  });
}

/**
 * Initialize Mobile Drawer & Dropdown functionality (< lg)
 */
function initMobileControls() {
  const projectDrawerBtn = document.getElementById('mobile-project-drawer-btn');
  const projectDrawer = document.getElementById('mobile-project-drawer');
  const projectChevron = document.getElementById('mobile-project-chevron');

  const tocDrawerBtn = document.getElementById('mobile-toc-drawer-btn');
  const tocDrawer = document.getElementById('mobile-toc-drawer');

  // Toggle Project Selector Drawer
  if (projectDrawerBtn && projectDrawer) {
    projectDrawerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = projectDrawer.classList.contains('hidden');
      if (isHidden) {
        projectDrawer.classList.remove('hidden');
        if (tocDrawer) tocDrawer.classList.add('hidden');
        if (projectChevron) projectChevron.textContent = 'expand_less';
        projectDrawerBtn.setAttribute('aria-expanded', 'true');
      } else {
        projectDrawer.classList.add('hidden');
        if (projectChevron) projectChevron.textContent = 'expand_more';
        projectDrawerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Toggle Table of Contents Drawer
  if (tocDrawerBtn && tocDrawer) {
    tocDrawerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = tocDrawer.classList.contains('hidden');
      if (isHidden) {
        tocDrawer.classList.remove('hidden');
        if (projectDrawer) {
          projectDrawer.classList.add('hidden');
          if (projectChevron) projectChevron.textContent = 'expand_more';
        }
        tocDrawerBtn.setAttribute('aria-expanded', 'true');
      } else {
        tocDrawer.classList.add('hidden');
        tocDrawerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Initial population of mobile drawer
  refreshMobileProjectList();

  // Close drawers when clicking outside
  document.addEventListener('click', (e) => {
    if (projectDrawer && !projectDrawer.contains(e.target) && projectDrawerBtn && !projectDrawerBtn.contains(e.target)) {
      projectDrawer.classList.add('hidden');
      if (projectChevron) projectChevron.textContent = 'expand_more';
      if (projectDrawerBtn) projectDrawerBtn.setAttribute('aria-expanded', 'false');
    }
    if (tocDrawer && !tocDrawer.contains(e.target) && tocDrawerBtn && !tocDrawerBtn.contains(e.target)) {
      tocDrawer.classList.add('hidden');
      if (tocDrawerBtn) tocDrawerBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Close any open mobile drawers
 */
function closeMobileDrawers() {
  const projectDrawer = document.getElementById('mobile-project-drawer');
  const projectChevron = document.getElementById('mobile-project-chevron');
  const projectDrawerBtn = document.getElementById('mobile-project-drawer-btn');
  const tocDrawer = document.getElementById('mobile-toc-drawer');
  const tocDrawerBtn = document.getElementById('mobile-toc-drawer-btn');

  if (projectDrawer) projectDrawer.classList.add('hidden');
  if (projectChevron) projectChevron.textContent = 'expand_more';
  if (projectDrawerBtn) projectDrawerBtn.setAttribute('aria-expanded', 'false');
  if (tocDrawer) tocDrawer.classList.add('hidden');
  if (tocDrawerBtn) tocDrawerBtn.setAttribute('aria-expanded', 'false');
}

/**
 * MutationObserver to automatically update Table of Contents
 * if external JS scripts inject content directly into #project-content
 */
function initMutationObserver() {
  const target = document.getElementById('project-content');
  if (!target) return;

  const observer = new MutationObserver((mutations) => {
    const hasChildChanges = mutations.some(m => m.type === 'childList');
    if (hasChildChanges) {
      updateTableOfContents();
      if (!isInternalRendering) {
        triggerMoveUpAnimation(target);
      }
    }
  });

  observer.observe(target, { childList: true, subtree: false });
}

// Global API exposed for external scripts
window.loadProject = selectProject;
window.registerProject = registerProject;
window.updateTableOfContents = updateTableOfContents;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initDesktopSidebar();
  initMobileControls();
  initMutationObserver();

  // Check URL Hash or Query Param for pre-selection (e.g. projects.html#nearon)
  const hashId = window.location.hash.replace('#', '').toLowerCase();
  const urlParams = new URLSearchParams(window.location.search);
  const paramId = urlParams.get('project')?.toLowerCase();

  const initialProject = paramId || hashId || 'nexmedis';
  selectProject(initialProject, false);
});
