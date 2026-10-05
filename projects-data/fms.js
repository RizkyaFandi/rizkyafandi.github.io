/**
 * Project Data: Fleet Management System (FMS)
 * Edit this file to update the FMS case study details, media, and HTML content.
 */

window.PROJECTS_DATABASE = window.PROJECTS_DATABASE || {};

window.PROJECTS_DATABASE['fms'] = {
  id: 'fms',
  name: 'Fleet Management System',
  logoSrc: './assets/fms-logo.png',
  htmlContent: `
    <!-- Project Header -->
    <header class="space-y-4 pb-6 border-b border-slate-200">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 flex-shrink-0 border border-slate-300 rounded-xl p-1">
          <img src="./assets/fms-logo.png" alt="Nexmedis Logo" class="w-full h-full object-cover" />
        </div>
        <div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fleet Management System (FMS)
          </h1>
          <h3 class="text-xs sm:text-sm lg:text-md font-medium uppercase text-slate-500 tracking-widest">Mining Activity Management</h3>
        </div>
      </div>
      <ul class="space-y-2 text-base sm:text-md text-slate-600 max-w-3xl leading-relaxed">
        <li>A fleet is a group engaged in the same activity at a mining site. Fleet Management System manages, controls, and maintains every fleet activity. User can plan, monitor fleet activity, and detect hazards early.</li>
        <li>The FMS consists of a web application that serves as the central control system for the FMS and a head unit installed on each heavy equipment. The head unit allows heavy equipment operators to communicate with dispatchers and guides them in their activities.</li>
        <li>Mining requires meticulous and detailed planning. Therefore, FMS can also generate complex reports that aid decision-making to increase production.</li>
      </ul>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
        <div>
          <span class="block text-slate-400 font-medium">Role</span>
          <span class="font-semibold text-slate-800">UI/UX Designer</span>
        </div>
        <div>
          <span class="block text-slate-400 font-medium">First Release</span>
          <span class="font-semibold text-slate-800">2025</span>
        </div>
        <div>
          <span class="block text-slate-400 font-medium">Platform</span>
          <span class="font-semibold text-slate-800">Web & Head Unit</span>
        </div>
        <div>
          <span class="block text-slate-400 font-medium">Design System</span>
          <span class="font-semibold text-slate-800">Madhani One 1.0</span>
        </div>
      </div>
    </header>
    <!-- Requirement Gathering -->
    <section class="space-y-4 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Requirement Gathering</h2>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Finding The Problem</h3>
      <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>The Fleet Management System (FMS) is specifically designed for mining operations. We used focus group discussions (FGD) with stakeholders to determine required features, the application's user flow, and expectations. The FGD results were used for in-depth desk research on each required feature.</li>
        <li>We also conducted on-site research at the mine site to gather more detailed information. We observed and interviewed supervisors, foremen, operators, and dispatchers to understand their current work methods and any pain points they experienced from their experience using these methods.</li>
      </ul>
      </div>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Research Analysis</h3>
      <ul class="list-disc list-outside pl-4 space-y-1 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>FMS should provide clear and detailed information on vehicle movement.</li>
        <li>Master Data will control static data that are necessary.</li>
        <li>Users can see the condition of each vehicle and its operator.</li>
        <li>Planners can make mining work plans along with resource allocation.</li>
        <li>Dispatchers can monitor each fleet's mining cycle and change plans if necessary.</li>
        <li>If an emergency occurs, the system can immediately display information about the affected vehicles and operators.</li>
        <li>If a violation occurs, the supervisor can immediately find out and give a penalty.</li>
        <li>FMS should generate informative reports for production improvement</li>
      </ul>
      </div>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Information Architecture</h3>
      <img src="./assets/fms-info-web.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl border border-rose-100 bg-rose-50/40">
          <h3 class="text-sm font-bold text-rose-900 flex items-center gap-1.5 mb-1.5">
            Pain Points
          </h3>
          <p class="text-sm text-emerald-800 space-y-1 list-disc">
            Planning, monitoring, and reporting at Madhani uses different applications since Madhani was founded. As a result, the time required to complete each process is inefficient. Also some emergency cases are followed up late if the operator is in a remote area.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40">
          <h3 class="text-sm font-bold text-emerald-900 flex items-center gap-1.5 mb-1.5">
            Project Goals
          </h3>
          <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-4">
            <li>The application can be used for resource allocation planning.</li>
            <li>Displays mining vehicle movements in real time and detects anomalies.</li>
            <li>Facilitates communication between dispatchers and operators.</li>
            <li>Guides operators to ensure they perform their tasks correctly.</li>
            <li>Generates reports based on all stored activity history.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Master Data -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Master Data</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      As with any corporate application, of course we provide a menu that manages all static data stored in the database. This feature is the foundation of all activities in the FMS application.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Master Equipment</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages mining vehicle data such as manufacture, model, type, and category. This menu also manages the Nearon Devices installed on each vehicle.
          </p>
          <img src="./assets/fms-equip.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Site Management</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages data on Pits, Work Areas, buildings, and drill & blasting activities.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">User Management</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages user data from various positions and manages roster scheduling.
          </p>
          <img src="./assets/fms-user.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Information Management</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages several important information related to broadcasting.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Settings</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Technically, this is also a data management feature, but the managed data is less frequently updated and more focused on macro data.
          </p>
        </div>
      </div>
    </section>

    <!-- Realtime -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Realtime</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      A comprehensive feature that monitors and manages all coal mining activities. Users can view the condition and movement of each vehicle in real time. Furthermore, users can quickly change resource allocation and optimize refueling schedules.
      </p>
      <img src="./assets/fms-real.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <img src="./assets/fms-real-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <img src="./assets/fms-real-2.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <img src="./assets/fms-real-3.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
    </section>

    <!-- Report -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Report</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      Reports is a feature that automatically generates reports based on mining activity over a specified time period. This feature offers many report types. However, due to company confidentiality, I can only show one type of report,  Truck Shift.
      </p>
      <img src="./assets/fms-rep.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
    </section>

    <!-- Head Unit -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Head Unit</h2>
      <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>The FMS Head Unit facilitates communication between operators and dispatchers. It is installed in each mining vehicle and operated via a touchscreen. This device uses a Nearon platform to communicate with the central system. The head unit's features are kept to a minimum to minimize distractions while working.</li>
        <li>The head unit assists operators in navigating the route, providing progress information on specific activities, distributing announcements, sending messages, and reporting disruptions or emergencies.</li>
      </ul>
      <img src="./assets/fms-hu.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Information Architecture</h3>
      <img src="./assets/fms-info-hu.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
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
            <span class="block text-2xl sm:text-3xl font-black text-slate-800">93.47%</span>
            <span class="text-xs text-slate-500">Task Success Rate</span>
          </div>
          <div class="p-4 bg-slate-100 rounded-xl">
            <span class="block text-2xl sm:text-3xl font-black text-slate-800">3.83%</span>
            <span class="text-xs text-slate-500">Missclick Rate</span>
          </div>
          <div class="p-4 bg-slate-100 rounded-xl">
            <span class="block text-2xl sm:text-3xl font-black text-slate-800">5.8/7</span>
            <span class="text-xs text-slate-500">SEQ Score</span>
          </div>
        </div>
        <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
        The Fleet Management System (FMS) was released in alpha version in August 2025. The web application has been well-received by PT. Madhani Talatah Nusantara. Meanwhile, the Head Unit is currently undergoing testing at the mining site. The User Interface Design has been completed and received a score of 93.47% in the User Acceptance Test (UAT).
        </p>
        <h3 class="text-lg font-semibold text-slate-600 tracking-tight mb-2">What I Learn</h3>
        <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
          <li>Based on discussions with Madhani's CEO, the FMS will continue to evolve and enhance its capabilities to become a powerful system. While the FMS currently has the basic features defined at the beginning of the project, it shouldn't stop there.</li>
          <li>During this project, I successfully designed an integrated system that connects every operator with the dispatcher. Furthermore, the FMS has transformed Madhani's mining system, from requiring manual synchronization to being integrated into a single application system.</li>
        </ul>
      </div>
    </section>
  `
};
