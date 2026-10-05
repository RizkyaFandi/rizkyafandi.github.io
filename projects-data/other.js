/**
 * Project Data: Other Projects & Explorations
 * Edit this file to update the Other Projects details, media, and HTML content.
 */

window.PROJECTS_DATABASE = window.PROJECTS_DATABASE || {};

window.PROJECTS_DATABASE['other'] = {
  id: 'other',
  name: 'Other Projects',
  logoSrc: './assets/other-logo-l.png',
  htmlContent: `
    <!-- Project Header -->
    <header class="space-y-4 pb-6 border-b border-slate-200">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 flex-shrink-0 border border-slate-300 rounded-xl p-1">
          <img src="./assets/other-logo-l.png" alt="Nexmedis Logo" class="w-full h-full object-cover" />
        </div>
        <div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Other Projects
          </h1>
          <h3 class="text-xs sm:text-sm lg:text-md font-medium uppercase text-slate-500 tracking-widest">Past Projects</h3>
        </div>
      </div>
      </div>
    </header>

    <!-- Javan -->
    <section class="space-y-3 pt-2">
      <div class="space-y-1">
        <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Javan Website Redesign</h2>
        <h3 class="text-sm text-indigo-400 text-medium mb-4">Redesign and Fixing the issue</h3>
      </div>
      <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>The existing landing page has lot of problem that should be solved. It’s doesn’t give enough information for potential partner to consider us for their optimization partner. The visual design also looks bad and inconsistent. Javan landing page really needs to reborn with our new design system with more informative content.</li>
        <li>We also believed the reason is Javan web is still far from being professional. Especially the Career page which we feel is still lacking to attract good talent. The job list are only perfunctory, and the Job Tracking system that displays unnecessary information. Thus, we decided to redesign and improve this page to attract more good talent and make them more comfortable with this feature.</li>
      </ul>
      <img src="./assets/javan-other.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>

    <!-- BukaLowongan.id -->
    <section class="space-y-3 pt-2">
      <div class="space-y-1">
        <h2 class="text-2xl font-bold text-slate-900 tracking-tight">BukaLowongan.id</h2>
        <h3 class="text-sm text-indigo-400 text-medium mb-4">Redesign of Bukalowongan.id</h3>
      </div>
      <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>Bukalowongan.id is Kodigi (Javan subsidiary) product for recruitment and job seeking with target market of company that doesn’t had their own recruitment web. Bukalowongan.id is released in 2021 and already have more than 20 partner. This is a revamp project to improve the web quality since the old one has very bad design.</li>
        <li>I work as UI/UX Designer in this project to design Hi-Fi Protoype and make sure the design is follow the UX pronciples. We successfully increase the average SUS score from 61,23 to 80.04, increase the visual attractiveness, and successfully apply the Jakob’s Law, Law of proximity, and some another UX Law. This project also supervised by the CEO of Kodigi.</li>
      </ul>
      <img src="./assets/buka-other.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>

    <!-- Diploy -->
    <section class="space-y-3 pt-2">
      <div class="space-y-1">
        <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Diploy</h2>
        <h3 class="text-sm text-indigo-400 text-medium mb-4">Job Finder App by Kominfo</h3>
      </div>
      <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>Diploy is a job search application belonging to the Indonesian “Kementrian Komunikasi dan Informatika” (Kominfo) for Alumni of the Digital Talent Scholarship (DTS) training program. This application aims to help DTS alumni so that they can immediately get jobs, both internships and full time after completing training.</li>
        <li>Web version of Diploy already exist and can run properly even though it's not perfect. Kominfo wants Diploy  also have a mobile version. The mobile version will make it easier for job seekers to find job vacancies while doing other activities. The mobile application is also considered to make it easier to monitor the job application process.</li>
      </ul>
      <img src="./assets/diploy-other.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>
  `
};
