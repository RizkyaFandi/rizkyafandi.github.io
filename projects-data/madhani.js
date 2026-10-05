/**
 * Project Data: Madhani Plant System
 * Edit this file to update the Madhani Plant System details, media, and HTML content.
 */

window.PROJECTS_DATABASE = window.PROJECTS_DATABASE || {};

window.PROJECTS_DATABASE['madhani'] = {
  id: 'madhani',
  name: 'Madhani Plant System',
  logoSrc: './assets/plant-logo.png',
  htmlContent: `
    <!-- Project Header -->
    <header class="space-y-4 pb-6 border-b border-slate-200">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 flex-shrink-0 border border-slate-300 rounded-xl p-1">
          <img src="./assets/plant-logo.png" alt="Nexmedis Logo" class="w-full h-full object-cover" />
        </div>
        <div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Madhani Plant System
          </h1>
          <h3 class="text-xs sm:text-sm lg:text-md font-medium uppercase text-slate-500 tracking-widest">Tools and Heavy Vehicle Maintenance</h3>
        </div>
      </div>
      <ul class="space-y-2 text-base sm:text-md text-slate-600 max-w-3xl leading-relaxed">
        <li>The Plant Department is responsible for maintaining and repairing mining equipment to ensure optimal operation, prevent damage, and extend its service life. The Plant Application System can simplify the Plant Department's work in organizing, recording, monitoring, and reporting every detail of Plant activity for future improvement.</li>
        <li>The Madhani Plant System consists of web, tablet, and mobile applications. The web application has almost all the features, while the tablet and mobile applications only have function for data input and monitoring.</li>
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
        <li>The Madhani Plant System was developed to manage the maintenance of equipment used in mining. The equipment maintained includes heavy vehicles, light vehicles, and various small equipment. Similar to the FMS, we used focus group discussions (FGD) with stakeholders to determine required features, the application's user flow, and expectations. The FGD results will be used for in-depth desk research on each required feature.</li>
        <li>We also conducted on-site research in the mining area to gather more detailed information. We observed and interviewed supervisors, foremen, operators, and tool keepers to understand their current work methods and any pain points they experienced from their experience using these methods.</li>
      </ul>
      </div>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Research Analysis</h3>
      <ul class="list-disc list-outside pl-4 space-y-1 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>Master Data will control static data that are necessary.</li>
        <li>Mechanics/Supervisors can request some parts if there is damage to the vehicle that requires part replacement.</li>
        <li>Mechanics/Supervisors can fill out inspection forms via tablet and the reports can be sent directly to the head office.</li>
        <li>Tool Keeper can grant permission to borrow tools, transfer tools and manage tool database.</li>
        <li>Tool Keeper can fill out small tool inspection forms.</li>
        <li>Web application provides summary reports in the form of real-time dashboards.</li>
        <li>Every report that needs digital approval should be easier than manual approval.</li>
      </ul>
      </div>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Our Research Board</h3>
      <img src="./assets/plant-research.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <img src="./assets/plant-research-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Information Architecture</h3>
      <img src="./assets/plant-info-web.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl border border-rose-100 bg-rose-50/40">
          <h3 class="text-sm font-bold text-rose-900 flex items-center gap-1.5 mb-1.5">
            Pain Points
          </h3>
          <p class="text-sm text-emerald-800 space-y-1 list-disc">
            Inspection and maintenance processes are still paper-based and manually written. Reporting is still not real-time and takes a long time to reach management.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40">
          <h3 class="text-sm font-bold text-emerald-900 flex items-center gap-1.5 mb-1.5">
            Project Goals
          </h3>
          <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-4">
            <li>Inspection forms can be filled out using a network-connected device.</li>
            <li>Reporting and detecting damage/loss can be done more quickly.</li>
            <li>Response orders for replacement items can be responded to more quickly.</li>
            <li>The potential for damage/loss can be minimized because all activities are properly recorded.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Plant Master -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Plant Master</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      As with any corporate application, we will certainly provide a menu that manages all static data stored in the database. This feature is the foundation of all activities in the Madhani Plant System application.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Equipment</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages mining vehicle data such as unit, type, category, and so on. Stored data is synchronized with the FMS to ensure accuracy and support long-term integration improvements.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Project Area</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages project area data worked on by Madhani.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Workshop</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages heavy vehicle maintenance locations.
          </p>
          <img src="./assets/plant-work.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Tool Room</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages storage for small tools available for borrowing by mine workers.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Attachment & Accessories</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages data on attachments and accessories installed on heavy vehicles.
          </p>
          <img src="./assets/plant-aa.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Master Inspection</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages a list of questions and instructions for completing inspections for vehicle engines, attachments and accessories, and Pre-Start/Weekly Inspections for light tools.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Master Asset</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages information related to small tool grouping, such as type and category.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Asset Register</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Used to register small tools and toolboxes used for mining work. User can also determine which types of tools require certification/calibration.
          </p>
          <img src="./assets/plant-ar.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover mb-2" onerror="this.parentElement.classList.add('hidden')" />
          <img src="./assets/plant-ar-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
          </div>
      </div>
    </section>

    <!-- Administration & Operational -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Administration & Operational</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      This menu records inspection data for all equipment managed by the plant division. User can perform various inspections, except for Machine Inspection, as machine inspections are performed on tablets and smartphones. This menu also allows user to report damage/loss and request items.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Machine Inspection Report</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages inspection data input for heavy vehicles, including engine, electrical, and attachment/accessories inspections. This inspection can only be completed via tablet and smartphone.
          </p>
          <img src="./assets/plant-mir.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Tools Inspection</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          This menu specifically handles light tool and toolbox inspections.
          </p>
          <img src="./assets/plant-tins.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Project Area</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages project area data worked on by Madhani.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Tools Management</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Creates and updates several documents such as Damage Reports (BAK), Handover Reports (BAST), Tool Inspections, and Asset Transfers.
          </p>
          <img src="./assets/plant-tima.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover mb-2" onerror="this.parentElement.classList.add('hidden')" />
          <img src="./assets/plant-tima-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
          </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Certification/Calibration</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Manages several types of tools that require periodic certification/calibration.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Request Formm</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          If damage/loss is detected during an inspection, all item requests will be displayed in this menu.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Part Monitoring</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          After the Request Form has been processed by the Supply Chain division, user can view the progress of the item delivery in this menu.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Logbook</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Records all small tool borrowing activities in the Tool Room so that their movements can be tracked and prevented from damage/loss.
          </p>
        </div>
      </div>
    </section>

    <!-- Dashboard -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      The dashboard consists of three sections: Machine Inspection Report, Tools, and Part Monitoring. The Machine Inspection Report displays a brief report in the form of a chart based on the results of heavy vehicle inspections over a specific time period.
      </p>
      <img src="./assets/plant-dash.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <img src="./assets/plant-dash-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
    </section>

    <!-- Daily Activity -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Daily Activity</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      A list of planned activities required by the Mechanics team in the Workshop. This list provides information on the activities to be performed, the vehicle, the work location, the Work Order, the estimated completion time, and any important remarks. This page is full-screen because it is used for a 60-inch TV installed in the Workshop.
      </p>
      <img src="./assets/plant-da.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <img src="./assets/plant-da-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
    </section>

    <!-- Tablet App -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Tablet App</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      The tablet app's primary function is to complete vehicle inspection forms and small tooling. Mechanic use specially designed tablets to simplify the filling process without having to carry them manually. However, the tablet app also offers several other features, such as Part Monitoring and a Logbook.
      </p>
      <img src="./assets/plant-tablet.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Information Architecture</h3>
      <img src="./assets/plant-info-tab.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
      </div>
    </section>

    <!-- Mobile App -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Mobile App</h2>
      <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>The smartphone app has the same features as the tablet app, but includes Activity and Approval features. Activity displays a list of activities performed on the smartphone, while Approval displays all documents requiring user approval.</li>
        <li>The primary purpose of this app is to streamline the approval process for various features in the Madhani Plant System and serve as a backup device in case the Mechanic Tablet is unavailable.</li>
      </ul>
      <img src="./assets/plant-mobile.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Information Architecture</h3>
      <img src="./assets/plant-info-phone.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
      </div>
    </section>

    <!-- Result -->
    <section class="pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Results & Operational Impact</h2>
        <h3 class="text-lg font-semibold text-slate-600 tracking-tight mb-2">Design Validation</h3>
      <div>
        <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="p-4 bg-slate-100 rounded-xl">
            <span class="text-sm italic text-slate-500">“Kita akan integrasikan semua pekerjaan di departemen Plant dari semua site. Desain yang sekarang sudah bagus, tinggal kita lihat nanti gimana di lapangan”</span>
            <span class="text-sm font-semibold text-slate-700"><br><br>Pak Adi (Plant Superintendent)</span>
        </div>
        <div class="p-4 bg-slate-100 rounded-xl">
            <span class="text-sm italic text-slate-500">“Buat MIP itu kalo menurut saya sudah oke desainnya karena ngisinya lewat tablet yang dipasang dudukan beroda, tinggal pencet-pencet aja.”</span>
            <span class="text-sm font-semibold text-slate-700"><br><br>Mas Hafidz (Plant Supervisor)</span>
        </div>
        </div>
        <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
        The Madhani Plant System is still in the design phase and will be developed in the fourth quarter of 2025. During the design process, we conducted extensive A/B testing to determine the best fit for our users. So far, the design we've created meets Madhani's business needs. However, the real results will only be seen when the alpha version of the system is released in the future.
        </p>
        <h3 class="text-lg font-semibold text-slate-600 tracking-tight mb-2">What I Learn</h3>
        <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
          <li>The Madhani Plant System has gone through numerous design iterations to achieve its current excellence. While the results in the field are yet to be evaluated, I am confident that the design at least aligns with the business goals.</li>
          <li>Through this project, I learned how to maintain highly complex mining equipment with great care, as it impacts the safety of its users. Inspections and repairs to heavy equipment parts must be reported as soon as possible to prevent workplace accidents. Real-time reporting through this system will also reduce downtime on vehicle due to breakdowns.</li>
        </ul>
      </div>
    </section>
  `
};
