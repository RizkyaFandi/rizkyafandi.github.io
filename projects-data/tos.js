/**
 * Project Data: Tyre Operation System (TOS)
 * Edit this file to update the TOS case study details, media, and HTML content.
 */

window.PROJECTS_DATABASE = window.PROJECTS_DATABASE || {};

window.PROJECTS_DATABASE['tos'] = {
  id: 'tos',
  name: 'Tyre Operation System',
  logoSrc: './assets/tos-logo.png',
  htmlContent: `
    <!-- Project Header -->
    <header class="space-y-4 pb-6 border-b border-slate-200">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 flex-shrink-0 border border-slate-300 rounded-xl p-1">
          <img src="./assets/tos-logo.png" alt="Nexmedis Logo" class="w-full h-full object-cover" />
        </div>
        <div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tyre Operation System (TOS)
          </h1>
          <h3 class="text-xs sm:text-sm lg:text-md font-medium uppercase text-slate-500 tracking-widest">All-in-One Tyre Management and Reporting System</h3>
        </div>
      </div>
      <ul class="space-y-2 text-base sm:text-md text-slate-600 max-w-3xl leading-relaxed">
        <li>The Tyre Operation System (TOS) was developed to assist the tire division in managing all tires at Madhani. Tires are the second-largest mining expense after fuel. Tire management requires a dedicated system that can monitor tires from receipt to disposal. Stakeholders also need comprehensive reports and a budget forecasting system to ensure tire stock is always adequate, neither too much nor too little.</li>
        <li>TOS consists of web, tablet, and smartphone applications. The web application has almost all the features, while the tablet applications only have function for data input and monitoring. There are also smartphone applications that only function for reporting.</li>
      </ul>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
        <div>
          <span class="block text-slate-400 font-medium">Role</span>
          <span class="font-semibold text-slate-800">UI/UX Designer</span>
        </div>
        <div>
          <span class="block text-slate-400 font-medium">Released</span>
          <span class="font-semibold text-slate-800">2025</span>
        </div>
        <div>
          <span class="block text-slate-400 font-medium">Platform</span>
          <span class="font-semibold text-slate-800">Web, Tablet, Mobile</span>
        </div>
        <div>
          <span class="block text-slate-400 font-medium">Design System</span>
          <span class="font-semibold text-slate-800">Madhani One 2.0</span>
        </div>
      </div>
    </header>

    <!-- Requirement Gathering -->
    <section class="space-y-4 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Requirement Gathering</h2>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Finding The Problem</h3>
      <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>The Tyre Operation System (TOS) is an integrated tire management application designed specifically for mining. Similar to the FMS, we used focus group discussions with stakeholders to determine required features, the application's user flow, and expectations. The FGD results were used for in-depth desk research on each required feature.</li>
        <li>We also conducted on-site research in the mining area to gather more detailed information. We observed and interviewed supervisors, foremen, operators, and tyres to understand their current work methods and any pain points they experienced from their experience with these methods.</li>
      </ul>
      </div>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Research Analysis</h3>
      <ul class="list-disc list-outside pl-4 space-y-1 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>Master Data will control static data that are necessary.</li>
        <li>Role Permission must have very complete and detailed settings to prevent data leaks and falsification.</li>
        <li>Tablet and smartphone applications are needed since users often move around</li>
        <li>Pressure Check, Tread Depth Check and Visual Check can be done in one submission.</li>
        <li>The tire change feature only accepts tire replacements that match vehicle specifications and can move tires from one vehicle to another vehicle</li>
        <li>Budget Forecasting should be made as simple as possible with minimal manual input.</li>
        <li>Reports can only be created automatically by the system and could be viewed directly in PDF preview format to match the original format on paper.</li>
      </ul>
      </div>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Berau Coal Site Visit Research</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <img src="./assets/tos-site.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <div class="space-y-1">
      <h3 class="text-md font-semibold text-slate-500 tracking-tight">Refuelling Post</h3>
      <ul class="list-disc list-outside pl-5 text-slate-600 text-sm leading-relaxed">
        <li>Refuelling diesel fuel for rigid trucks</li>
        <li>Conducting daily inspections (pressure checks, tread depth checks, and visual checks)</li>
        <li>Recording HM</li>
        <li>Refuelling the post-refilling tank from the Truck Fuel unit</li>
      </ul>
      <h3 class="text-md font-semibold text-slate-500 tracking-tight">Tyreman Post</h3>
      <ul class="list-disc list-outside pl-5 text-slate-600 text-sm leading-relaxed">
        <li>Adjusting tire pressure</li>
        <li>Buffing</li>
        <li>Minor Tyre Repair</li>
      </ul>
      </div>
      </div>
      <img src="./assets/tos-site-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Information Architecture</h3>
      <img src="./assets/tos-info-web.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl border border-rose-100 bg-rose-50/40">
          <h3 class="text-sm font-bold text-rose-900 flex items-center gap-1.5 mb-1.5">
            Pain Points
          </h3>
          <p class="text-sm text-emerald-800 space-y-1 list-disc">
            Many tires in mining areas have unsynchronized data, and tire replacement history is still recorded manually. Furthermore, some reports are falsified and tires could disappear without a trace.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40">
          <h3 class="text-sm font-bold text-emerald-900 flex items-center gap-1.5 mb-1.5">
            Project Goals
          </h3>
          <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-4">
            <li>TOS should be integrated tire management center.</li>
            <li>All tires in the company must have a complete history from receipt to disposal.</li>
            <li>Daily tire inspections can be conducted more quickly, and data can be sent directly to the head office.</li>
            <li>The tire replacement process can no longer be haphazard; tires must be used according to the vehicle type.</li>
            <li>There will be no more falsification of reports if the TOS system is under full supervision by the Superintendent.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Master Data -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Master Data</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      As with any corporate application, we will certainly provide a menu that will manage all static data stored in the database. This feature is the foundation of all activities in the TOS application.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Equipment Master</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages mining vehicle data such as manufacture, model, type, category, and project area. The stored data is synchronized with the FMS to ensure accuracy and support long-term integration improvements.
          </p>
          <img src="./assets/tos-equip.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Tire Master</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages various general information that will support all tire inventory turnover activities, including specifications, axle type, size, tire status and position, tire pressure, storage location, supplier, and tire disposal reason.
          </p>
          <img src="./assets/tos-tire.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
      </div>
    </section>

    <!-- Data Entry -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Data Entry</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      As the name suggests, this menu is used for tire movement data transactions. The entire tire lifecycle is recorded here, from the time it is received from the factory until it is finally disposed of.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Tyre Receive</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Adds new tires and defines their specifications.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Tyre Change</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Removes or installs tires on vehicles.
          </p>
          <img src="./assets/tos-tchange.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Tread Depth Check & Pressure Check</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Features to support tire health checks, particularly tread thickness and tire pressure.
          </p>
          <img src="./assets/tos-tcheck.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Tyre Transfer Stock</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Transfers tires from one project to another.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Visual Check</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Reports suspected tire damage visually for further analysis.
          </p>
        </div>
      </div>
    </section>

    <!-- Report -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Report</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      Similar to FMS, Report is a feature that automatically generates reports based on the movement history of all tires in the mining area. This feature offers a wide variety of report types. However, due to company confidentiality, I cannot reveal the detailed report formats available.
      </p>
      <img src="./assets/tos-rep.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
    </section>

    <!-- Dashboard -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      The dashboard is a summary of all tire movement data transactions and general tire performance reports across the company. This page displays graphs that are automatically updated based on real-time conditions.
      </p>
      <img src="./assets/tos-dash.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <img src="./assets/tos-dash-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
    </section>

    <!-- Budget Forecasting -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Budget Forecasting</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      Budget Forecasting can generate predictions of tire usage for the coming year based on current tire usage and tire life. This feature provides information on how many tires are needed, how much they will cost, and when they will need to be replaced.
      </p>
      <img src="./assets/tos-budget.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <img src="./assets/tos-budget-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
    </section>

    <!-- Tablet App -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Tablet App</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      Not all tiresmans and supervisors work in the tire shop; many inspect and replace tires directly on site. Therefore, the tablet application is designed to accommodate basic transactions such as tyre changes, tyre running inspections, and visual monitoring. However, the tablet application can also display dashboards, daily activities, and reports, just like the web application.
      </p>
      <img src="./assets/tos-tablet.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Information Architecture</h3>
      <img src="./assets/tos-info-tab.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
      </div>
    </section>

    <!-- Mobile App -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Mobile App</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      Stakeholders aren't always in front of a computer; they often move around. This application is specifically designed to provide concise information through a comprehensive Dashboard, Daily Activity, and Report. The goal is to improve monitoring of the Tire division's performance.
      </p>
      <img src="./assets/tos-mobile.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Information Architecture</h3>
      <img src="./assets/tos-info-phone.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
      </div>
    </section>

    <!-- Result -->
    <section class="pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Results & Operational Impact</h2>
        <h3 class="text-lg font-semibold text-slate-600 tracking-tight mb-2">Design Validation</h3>
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-4">
          <div class="p-4 bg-slate-100 rounded-xl">
            <span class="block text-2xl sm:text-3xl font-black text-slate-800">92%</span>
            <span class="text-xs text-slate-500">User Satisfaction</span>
          </div>
          <div class="p-4 bg-slate-100 rounded-xl">
            <span class="block text-2xl sm:text-3xl font-black text-slate-800">4%</span>
            <span class="text-xs text-slate-500">Experience Issue</span>
          </div>
          <div class="p-4 bg-slate-100 rounded-xl">
            <span class="block text-2xl sm:text-3xl font-black text-slate-800">5.7/7</span>
            <span class="text-xs text-slate-500">SEQ Score</span>
          </div>
        </div>
        <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
        The Tyre Operation System (TOS) has been released in beta. Numerous improvements have been made through a series of A/B testing, UAT, and on-site testing. So far, user feedback has been quite positive, with 92% user satisfaction and only 4% experience issues. However, TOS is currently operational in one mining area in Berau. Once operational in other areas, there is still room for improvement, as each area presents different challenges.
        </p>
        <h3 class="text-lg font-semibold text-slate-600 tracking-tight mb-2">What I Learn</h3>
        <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
          <li>TOS was the first application system I worked on at Synapsis. It was through this application that I learned about the coal mining process and why tire management is so important. The knowledge gained in this project laid the foundation for me to work on FMS and Plant System, as both are related to heavy vehicles.</li>
          <li>The results of my work can be said to be very satisfying, as this project earned me the Best Junior Hard Skill award for Third Quarter of 2024. However, I believe TOS still needs many improvements to become a perfect application, and this current result is not the end of TOS development.</li>
        </ul>
      </div>
    </section>  `
};
