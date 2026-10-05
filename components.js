/**
 * Centralized Shared Components & Navigation Logic
 * Header (Navbar) and Footer components for multi-page website
 */

// Navigation items definition
const NAV_ITEMS = [
  { label: 'About Me', href: 'about.html' },
  { label: 'Projects', href: 'projects.html' },
];

/**
 * Determine if a target link corresponds to the current page
 * Based on window.location.pathname
 */
function isCurrentPage(href) {
  const currentPath = window.location.pathname.toLowerCase();
  const currentFile = currentPath.split('/').pop().split('?')[0].split('#')[0];
  const targetFile = href.toLowerCase().split('?')[0].split('#')[0];

  return currentFile === targetFile;
}

/**
 * Render Header / Navbar component
 * Matches all height, spacing, hover/active animation, and responsive specs
 */
function renderNavbar() {
  const navbarContainer = document.getElementById('navbar');
  if (!navbarContainer) return;

  // Desktop Navigation links with hover & active underline animation
  const navLinksHtml = NAV_ITEMS.map((item) => {
    const isActive = isCurrentPage(item.href);

    if (isActive) {
      return `
        <a href="${item.href}" class="relative py-1 text-sm font-bold text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-slate-900" aria-current="page">
          ${item.label}
        </a>
      `;
    }

    return `
      <a href="${item.href}" class="relative py-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-slate-900 after:transition-all after:duration-300">
        ${item.label}
      </a>
    `;
  }).join('');

  // Mobile Navigation links
  const mobileNavLinksHtml = NAV_ITEMS.map((item) => {
    const isActive = isCurrentPage(item.href);
    const textStyle = isActive
      ? 'font-bold text-slate-900 bg-slate-100/80 border-l-2 border-slate-900 pl-3'
      : 'font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 pl-3';

    return `
      <a href="${item.href}" class="block py-2.5 text-base rounded-md transition-all ${textStyle}" ${isActive ? 'aria-current="page"' : ''}>
        ${item.label}
      </a>
    `;
  }).join('');

  navbarContainer.innerHTML = `
    <!-- Top-level Navbar Container with full-width subtle gray bottom line -->
    <header class="w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm isolate fixed top-0 left-0 right-0 z-50">
      <!-- Fixed height 64px (h-16) on desktop/tablet with responsive horizontal padding -->
      <div class="h-16 px-6 md:px-8 lg:px-12">
        <div class="w-full max-w-8xl mx-auto flex items-center justify-between h-full">
          
          <!-- Left Side (Brand / Logo) -->
          <a href="index.html" class="flex items-center group">
            <!-- Square logo badge (blank container ready for image asset) -->
            <img src="./assets/logo.png" alt="logo"
              class="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0 group-hover:border-slate-400 transition-colors" />
            <!-- Brand Text Label -->
            <span class="text-base sm:text-lg font-medium text-slate-900 tracking-tight">Fandi Portfolio</span>
          </a>

          <!-- Right Side: Desktop Navigation Links & Action Items -->
          <div class="hidden md:flex items-center gap-7 lg:gap-8">
            <!-- Nav Items -->
            <nav class="flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
              ${navLinksHtml}

              <!-- External link: Dribble -->
              <a href="https://dribbble.com/FRFandi" target="_blank" rel="noopener noreferrer" class="relative py-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 inline-flex items-center gap-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-slate-900 after:transition-all after:duration-300">
                <span>Dribble</span>
                <span class="material-symbols-outlined text-[15px] leading-none select-none">arrow_outward</span>
              </a>
            </nav>

            <!-- Primary CTA Button -->
            <a href="https://tinyurl.com/FRFandi-portfolio" target="_blank" class="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-full px-5 py-2.5 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 whitespace-nowrap">
              Download PDF Version
            </a>
          </div>

          <!-- Mobile Hamburger Menu Button (md:hidden) -->
          <button id="mobile-menu-btn" type="button" class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900" aria-label="Toggle mobile menu" aria-expanded="false">
            <span id="menu-icon" class="material-symbols-outlined text-2xl select-none">menu</span>
          </button>

        </div>
      </div>

      <!-- Mobile Dropdown / Drawer Menu -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-gray-200 bg-white px-6 pt-4 pb-6 space-y-3 shadow-lg">
        <nav class="space-y-1" aria-label="Mobile Navigation">
          ${mobileNavLinksHtml}
          <a href="https://dribbble.com/FRFandi" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between py-2.5 pl-3 pr-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all">
            <span>Dribble</span>
            <span class="material-symbols-outlined text-base">arrow_outward</span>
          </a>
        </nav>

        <div class="pt-3 border-t border-gray-100">
          <a href="#download-pdf" class="flex items-center justify-center w-full bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-full px-5 py-2.5 transition-colors shadow-sm">
            Download PDF Version
          </a>
        </div>
      </div>
    </header>
  `;

  initMobileMenu();
}

/**
 * Mobile Hamburger Menu Toggle handler
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!isExpanded));
    mobileMenu.classList.toggle('hidden');

    if (menuIcon) {
      menuIcon.textContent = isExpanded ? 'menu' : 'close';
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (menuIcon) menuIcon.textContent = 'menu';
    }
  });
}

/**
 * Render Footer component
 */
function renderFooter() {
  const footerContainer = document.getElementById('footer');
  if (!footerContainer) return;

  const currentYear = new Date().getFullYear();

  footerContainer.innerHTML = `
    <footer class="border-t border-gray-200 bg-slate-50 transition-colors duration-200">
      <div class="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div class="md:col-span-2 space-y-3">
            <div class="flex items-center">
              <img src="./assets/logo.png" alt="logo"
              class="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0 group-hover:border-slate-400 transition-colors" />
              <span class="text-base font-semibold text-slate-900">Fandi Portfolio</span>
            </div>
            <p class="text-sm text-slate-500 max-w-sm leading-relaxed">
              4+ Years Experience Product Designer | B2B Enterprise System Specialist
            </p>
          </div>

          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Pages</h3>
            <ul class="space-y-2.5 text-sm">
              <li><a href="about.html" class="text-slate-600 hover:text-slate-900 transition-colors">About Me</a></li>
              <li><a href="projects.html" class="text-slate-600 hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">External</h3>
            <ul class="space-y-2.5 text-sm">
              <li>
                <a href="https://dribbble.com/FRFandi" target="_blank" rel="noopener noreferrer" class="text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 transition-colors">
                  <span>Dribble</span>
                  <span class="material-symbols-outlined text-xs">arrow_outward</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© ${currentYear} Fandi. All rights reserved.</p>
          <p>Built with HTML5, Tailwind CSS, & Vanilla JS</p>
        </div>
      </div>
    </footer>
  `;
}

// Auto-initialize components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
});
