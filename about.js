/**
 * Controller Script for about.html
 *
 * SECTIONS:
 * 1. Projects Showcase — dataset + render/select logic
 * 2. Work Experience   — dataset + render/select logic
 * 3. Scroll-Reveal     — one-time IntersectionObserver animation
 */

// ============================================================
// 1. PROJECTS SHOWCASE
// ============================================================

/** Project cards dataset */
const PROJECTS_DATA = [
  {
    id: 'nexmedis',
    title: 'Nexmedis',
    description: 'A Health Information System that simplifies and streamlines healthcare administration processes. Nexmedis offers numerous modules includes Generale Care, Intensive Care, Diagnostic, Financial, and many more that can be customized.',
    imageSrc: './assets/Nex-Preview.png', // Place screenshot image path/URL here
    logoSrc: './assets/nex-logo.png',     // Place project logo image path/URL here
    iconSrc: './assets/nex-logo.png',     // Place sidebar icon image path/URL here
    detailUrl: './projects.html#nexmedis'
  },
  {
    id: 'nearon',
    title: 'Nearon IoT Mobile App',
    description: "Nearon is an IoT application system that allows every device to be connected and controlled by a central system via the internet. Nearon's mobile application is designed to monitor the activity and condition of each connected sensor and node.",
    imageSrc: './assets/near-preview.png',
    logoSrc: './assets/near-logo.png',
    iconSrc: './assets/near-logo.png',
    detailUrl: './projects.html#nearon'
  },
  {
    id: 'fms',
    title: 'Fleet Management System (FMS)',
    description: 'An integrated fleet operations and dispatch platform designed to monitor vehicle activity, driver performance, and real-time transit logistics.',
    imageSrc: './assets/fms-preview.png',
    logoSrc: './assets/fms-logo.png',
    iconSrc: './assets/fms-logo.png',
    detailUrl: './projects.html#fms'
  },
  {
    id: 'madhani',
    title: 'Madhani Plant System',
    description: 'The Plant Application System can simplify Plant Department responsibility for maintaining and repairing mining equipment to ensure optimal operation, prevent damage, and extend its service life.',
    imageSrc: './assets/plant-preview.png',
    logoSrc: './assets/plant-logo.png',
    iconSrc: './assets/plant-logo.png',
    detailUrl: './projects.html#madhani'
  },
  {
    id: 'tos',
    title: 'Tyre Operation System (TOS)',
    description: "Tires are the second largest expense after fuel, so TOS was developed to manage all tires and provide comprehensive reports to help the company's expense efficiency.",
    imageSrc: './assets/tos-preview.png',
    logoSrc: './assets/tos-logo.png',
    iconSrc: './assets/tos-logo.png',
    detailUrl: './projects.html#tos'
  },
  {
    id: 'other',
    title: 'Other Projects',
    description: 'A collection of various UI/UX design experiments, mobile app concepts, and design system components crafted across various domains.',
    imageSrc: './assets/other-preview.png',
    logoSrc: './assets/other-logo-d.png',
    iconSrc: './assets/other-logo-d.png',
    detailUrl: './projects.html#other'
  }
];

let currentProjectIndex = 0;

/**
 * Render the active project details in the showcase column
 * @param {number} index
 */
function renderProjectShowcase(index) {
  const showcase = document.getElementById('project-showcase');
  if (!showcase) return;

  const project = PROJECTS_DATA[index];
  if (!project) return;

  // Fluid Transition: Start fade-out and slide right
  showcase.classList.remove('opacity-100', 'translate-x-0');
  showcase.classList.add('opacity-0', 'translate-x-6');

  setTimeout(() => {
    showcase.innerHTML = `
      <!-- 1. Main Project Image Slot: Tall portrait image container -->
      <div class="w-full lg:w-2/5 overflow-hidden object-cover relative flex items-center justify-center">
        <img 
          src="${project.imageSrc}" 
          alt="${project.title} Screenshot" 
          class="w-full h-full object-cover ${project.imageSrc ? '' : 'hidden'}"
          onerror="this.classList.add('hidden')"
        />
      </div>

      <!-- 2. Project Detail Content -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center">
        <!-- Project Logo Slot: Small square image placeholder -->
        <div class="w-16 h-16 rounded-lg mb-4 overflow-hidden flex items-center justify-center shrink-0">
          <img 
            src="${project.logoSrc}" 
            alt="${project.title} Logo" 
            class="w-full h-full object-cover ${project.logoSrc ? '' : 'hidden'}"
            onerror="this.classList.add('hidden')"
          />
          ${!project.logoSrc ? `<span class="material-symbols-outlined text-white/70 text-2xl select-none">token</span>` : ''}
        </div>

        <!-- Project Title -->
        <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
          ${project.title}
        </h3>

        <!-- Description -->
        <p class="text-slate-300 text-sm leading-relaxed mb-6">
          ${project.description}
        </p>

        <!-- CTA Button -->
        <div>
          <a 
            href="${project.detailUrl}" 
            class="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full inline-flex items-center space-x-2 transition-colors shadow-lg shadow-indigo-950/40"
          >
            <span>See Detail</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    `;

    // Trigger fluid leftward slide & fade-in animation
    requestAnimationFrame(() => {
      showcase.classList.remove('opacity-0', 'translate-x-6');
      showcase.classList.add('opacity-100', 'translate-x-0');
    });
  }, 150);
}

/**
 * Render sidebar project selection buttons
 */
function renderProjectNavButtons() {
  const navContainer = document.getElementById('project-nav-list');
  if (!navContainer) return;

  navContainer.innerHTML = PROJECTS_DATA.map((item, index) => {
    const isActive = index === currentProjectIndex;
    const activeStyles = isActive
      ? 'bg-slate-800 border-indigo-500 text-white ring-1 ring-indigo-500/40'
      : 'bg-slate-800/60 border-slate-700/50 hover:bg-slate-800 text-slate-200';

    return `
      <button 
        type="button" 
        onclick="selectProject(${index})"
        class="project-nav-item w-full text-left border ${activeStyles} px-5 py-4 rounded-xl flex items-center space-x-3 cursor-pointer transition-all focus:outline-none"
        aria-selected="${isActive ? 'true' : 'false'}"
      >
        <!-- Square placeholder container for item icon -->
        <div class="w-8 h-8 rounded flex-shrink-0 overflow-hidden flex items-center justify-center">
          <img 
            src="${item.iconSrc}" 
            alt="" 
            class="w-full h-full object-cover ${item.iconSrc ? '' : 'hidden'}" 
            onerror="this.classList.add('hidden')"
          />
        </div>
        <span class="text-sm font-medium tracking-tight truncate">${item.title}</span>
      </button>
    `;
  }).join('');
}

/**
 * Handle project selection
 * @param {number} index
 */
function selectProject(index) {
  if (currentProjectIndex === index) return;
  currentProjectIndex = index;
  renderProjectNavButtons();
  renderProjectShowcase(index);
}


// ============================================================
// 2. WORK EXPERIENCE
// ============================================================

/** Work experience dataset */
const EXPERIENCES_DATA = [
  {
    role: 'Sr. UI/UX Designer',
    company: 'PT. Ekosistem Kesehatan Indonesia',
    period: 'November 2025 - Current',
    logoSrc: './assets/nex-logo.png', // Place company logo image path/URL here
    responsibilities: [
      "Do research and improve existing user interface designs especially in <strong class='text-slate-800 font-semibold'>health-tech solution</strong>",
      'Craft high-fidelity UI Design in collaboration with Product Owners and Developers to ensure best user experience',
      'Analyze user behavioral data and feedback to iterate on designs and solve complex pain points',
      "Maintain and improve <strong class='text-slate-800 font-semibold'>Neuron Design System</strong> to accelerate product development",
      "Successfully <strong class='text-slate-800 font-semibold'>decrease average design working time by 30%</strong> using <strong class='text-slate-800 font-semibold'>Neuron Design System Reborn</strong>",
      "<strong class='text-slate-800 font-semibold'>Leading design teams</strong> to produce high-quality digital products",
      "<strong class='text-slate-800 font-semibold'>Mentor junior designers</strong> to help them improve their technical skills and career growth"
    ]
  },
  {
    role: 'UI/UX Designer',
    company: 'PT. Synapsis Sinergi Digital',
    period: 'September 2023 - August 2025',
    logoSrc: './assets/syn.png',
    responsibilities: [
      'Optimize existing user interface designs',
      "Planning, conducting user research, create surveys and conducting usability testing using <strong class='text-slate-800 font-semibold'>User-Centered Design approach</strong>",
      "Working in team using <strong class='text-slate-800 font-semibold'>agile/scrum method</strong> and <strong class='text-slate-800 font-semibold'>design thinking</strong> during design stage",
      'Develop technical business requirements and always strive to provide intuitive and user-centric solutions',
      "Working on <strong class='text-slate-800 font-semibold'>Mining Super App Project</strong> of PT. Madhani Talatah Nusantara, especially in Heavy Equipment-related App",
      "Create <strong class='text-slate-800 font-semibold'>Madhani Super App Design System</strong> using <strong class='text-slate-800 font-semibold'>Atomic Design approach</strong>",
      "Successfully released <strong class='text-slate-800 font-semibold'>Tyre Operation System</strong> to client with <strong class='text-slate-800 font-semibold'>92% User Satisfaction</strong> and only <strong class='text-slate-800 font-semibold'>4% experience issue</strong>",
      "Successfully designed <strong class='text-slate-800 font-semibold'>4 major projects</strong> with <strong class='text-slate-800 font-semibold'>200+ features delivered</strong>",
      "Received the award for <strong class='text-slate-800 font-semibold'>Best Junior Hard Skills in Quarter 3 2024</strong> with a score of <strong class='text-slate-800 font-semibold'>3.63/4.00</strong>"
    ]
  },
  {
    role: 'UI/UX Designer',
    company: 'PT. Javan Cipta Solusi',
    period: 'February 2022 - September 2023',
    logoSrc: './assets/javan.png',
    responsibilities: [
      'Do qualitative research and define user requirement in collaboration with system analyst and business team',
      'Creates user persona, storyboards, user flow diagram and information architecture',
      'Creates wireframes and high-fidelity prototype',
      'Engage in other job function such as graphic design and product owner',
      "Receive award as <strong class='text-slate-800 font-semibold'>Best UI/UX Intern</strong> and getting <strong class='text-slate-800 font-semibold'>promoted from intern into full-time employee</strong>",
      "Accomplishment: Successfully redesign Javan Website with <strong class='text-slate-800 font-semibold'>100% finished task</strong> in design testing"
    ]
  }
];

let currentExperienceIndex = 0;

/**
 * Render the active experience details in the right display panel
 * @param {number} index
 */
function renderExperienceDetail(index) {
  const panel = document.getElementById('experience-detail-panel');
  if (!panel) return;

  const exp = EXPERIENCES_DATA[index];
  if (!exp) return;

  // Fluid Transition: smooth fade-out and subtle right offset
  panel.classList.remove('opacity-100', 'translate-x-0');
  panel.classList.add('opacity-0', 'translate-x-4');

  setTimeout(() => {
    const bulletListHtml = exp.responsibilities.map(r => `<li>${r}</li>`).join('');

    panel.innerHTML = `
      <!-- 1. Dedicated Company Logo Slot -->
      <div class="w-14 h-14 rounded-xl mb-4 overflow-hidden flex items-center justify-center shrink-0">
        <img 
          src="${exp.logoSrc}" 
          alt="${exp.company} Logo" 
          class="w-full h-full object-cover ${exp.logoSrc ? '' : 'hidden'}" 
          onerror="this.classList.add('hidden')"
        />
        ${!exp.logoSrc ? `<span class="material-symbols-outlined text-white/80 text-2xl select-none">business</span>` : ''}
      </div>

      <!-- 2. Header Info -->
      <h3 class="text-lg md:text-xl font-bold text-slate-900">
        ${exp.role} <span class="text-slate-500 font-normal italic text-sm md:text-base">(${exp.period})</span>
      </h3>
      <p class="text-indigo-900 font-bold text-sm md:text-base mb-6">
        ${exp.company}
      </p>

      <!-- 3. Bullet Points List -->
      <ul class="list-disc list-outside pl-6 space-y-1 text-slate-600 text-sm md:text-base leading-relaxed">
        ${bulletListHtml}
      </ul>
    `;

    // Smooth leftward movement & fade-in animation
    requestAnimationFrame(() => {
      panel.classList.remove('opacity-0', 'translate-x-4');
      panel.classList.add('opacity-100', 'translate-x-0');
    });
  }, 150);
}

/**
 * Render experience sidebar buttons
 */
function renderExperienceNavList() {
  const navContainer = document.getElementById('experience-nav-list');
  if (!navContainer) return;

  navContainer.innerHTML = EXPERIENCES_DATA.map((item, index) => {
    const isActive = index === currentExperienceIndex;
    const containerClasses = isActive
      ? 'bg-[#F1F2F7] rounded-2xl p-4'
      : 'hover:bg-[#F1F2F7] rounded-2xl p-4 transition-all cursor-pointer border border-transparent';

    return `
      <button 
        type="button" 
        onclick="selectExperience(${index})"
        class="w-full text-left flex items-start space-x-3.5 transition-all focus:outline-none ${containerClasses}"
        aria-selected="${isActive ? 'true' : 'false'}"
      >
        <!-- Square company logo container -->
        <div class="w-12 h-12 flex-shrink-0 overflow-hidden flex items-center justify-center">
          <img 
            src="${item.logoSrc}" 
            alt="${item.company}" 
            class="w-full h-full object-cover ${item.logoSrc ? '' : 'hidden'}" 
            onerror="this.classList.add('hidden')"
          />
          ${!item.logoSrc ? `<span class="material-symbols-outlined text-white/70 text-xl select-none">apartment</span>` : ''}
        </div>

        <!-- Role, Company & Date Range Info -->
        <div class="flex flex-col min-w-0 flex-1">
          <span class="text-slate-900 font-bold text-sm md:text-base leading-snug truncate">
            ${item.role}
          </span>
          <span class="text-indigo-900 font-semibold text-xs md:text-sm mt-0.5 truncate">
            ${item.company}
          </span>
          <span class="text-slate-500 italic text-xs mt-1">
            ${item.period}
          </span>
        </div>
      </button>
    `;
  }).join('');
}

/**
 * Handle experience selection
 * @param {number} index
 */
function selectExperience(index) {
  if (currentExperienceIndex === index) return;
  currentExperienceIndex = index;
  renderExperienceNavList();
  renderExperienceDetail(index);
}


// ============================================================
// 3. SCROLL-REVEAL
// ============================================================

/**
 * Triggers .revealed on every .scroll-reveal element once when it
 * enters the viewport. Uses IntersectionObserver — never repeats.
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.scroll-reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // fire once, never again
        }
      });
    },
    {
      threshold: 0.12, // trigger when 12% of element is visible
    }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
}


// ============================================================
// INIT — wait for DOM to be ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Projects Showcase
  renderProjectNavButtons();
  renderProjectShowcase(0);

  // Work Experience
  renderExperienceNavList();
  renderExperienceDetail(0);

  // Scroll-reveal animations
  initScrollReveal();
});
