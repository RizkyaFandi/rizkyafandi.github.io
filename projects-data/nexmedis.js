/**
 * Project Data: Nexmedis
 * Edit this file to update the Nexmedis case study details, media, and HTML content.
 */

window.PROJECTS_DATABASE = window.PROJECTS_DATABASE || {};

window.PROJECTS_DATABASE['nexmedis'] = {
  id: 'nexmedis',
  name: 'Nexmedis',
  logoSrc: './assets/nex-logo.png',
  htmlContent: `
    <!-- Project Header -->
    <header class="space-y-4 pb-6 border-b border-slate-200">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-xl bg-slate-100 flex-shrink-0">
          <img src="./assets/nex-logo.png" alt="Nexmedis Logo" class="w-full h-full object-cover" />
        </div>
        <div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nexmedis
          </h1>
          <h3 class="text-xs sm:text-sm lg:text-md font-medium uppercase text-slate-500 tracking-widest">Health Information System</h3>
        </div>
      </div>
      <ul class="space-y-2 text-base sm:text-md text-slate-600 max-w-3xl leading-relaxed">
        <li>Nexmedis is a Health Information System designed to manage all activities within healthcare-based companies such as hospitals, community health centers, and clinics. Nexmedis is modular, allowing all modules and features to be customized to meet client and user needs.</li>
        <li>I am responsible for conducting user experience research and development to help Nexmedis compete with other existing systems.</li>
        <li>Furthermore, I am also the pioneer and primary developer of the Neuron Design System, which replaced the old, immature design system. Neuron has much more detailed rules, patterns, and a design language, facilitating cross-divisional collaboration.</li>
      </ul>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
        <div>
          <span class="block text-slate-400 font-medium">Role</span>
          <span class="font-semibold text-slate-800">Sr. UI/UX Designer</span>
        </div>
        <div>
          <span class="block text-slate-400 font-medium">First Release</span>
          <span class="font-semibold text-slate-800">2025</span>
        </div>
        <div>
          <span class="block text-slate-400 font-medium">Platform</span>
          <span class="font-semibold text-slate-800">Web</span>
        </div>
        <div>
          <span class="block text-slate-400 font-medium">Design System</span>
          <span class="font-semibold text-slate-800">Neuron DS Reborn</span>
        </div>
      </div>
    </header>
    <!-- Project Overview -->
    <section class="space-y-4 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Project Overview</h2>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">How We Work</h3>
      <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>Most of the research was conducted directly in hospital and clinic environments with the assistance of the Product Owner and System Implementer. We employed various methods, including application demos, user interviews, and intensive observation.</li>
        <li>The results of the field research were used by the System Analyst, Business Analyst, and UI/UX Designer teams to analyze the requirements for development and possible best practices for development.</li>
        <li>The UI/UX Designer and Product Owner teams then translated the analysis results into a system design that could be handed off to the engineering team.</li>
        <li>As a Senior UI/UX Designer, I also had the added responsibility of continuing to independently research and develop the Neuron Design System.</li>
      </ul>
      </div>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Most Common Obstacles</h3>
      <ul class="list-disc list-outside pl-4 space-y-1 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>Users generally always prioritize data charging speed, so even the slightest friction will affect the overall experience.</li>
        <li>Every hospital and clinic has unique workflows and preferences, so the system must be adaptive to varying conditions in the field.</li>
        <li>Users or Clients will be upset when their request takes a long time to develop but once it is finished they will be upset about the UX.</li>
        <li>There is no UX standard that serves as the main reference for HIS development, so we cannot rely solely on user feedback.</li>
        <li>Sometimes we are in a super fast development phase so improvements will always be in the next stage.</li>
        
      </ul>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl border border-rose-100 bg-rose-50/40">
          <h3 class="text-sm font-bold text-rose-900 flex items-center gap-1.5 mb-1.5">
            Pain Points
          </h3>
          <p class="text-sm text-emerald-800 space-y-1 list-disc">
            Most similar systems have system reliability but are weak in user experience so that users ask and confirm too often with the company's IT team or the service provider's Customer Support.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40">
          <h3 class="text-sm font-bold text-emerald-900 flex items-center gap-1.5 mb-1.5">
            Project Goals
          </h3>
          <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-4">
            <li>Simplifying hospital service administration and preventing input errors</li>
            <li>Integrating all service units into a single system and processing them into high-quality reports</li>
            <li>Developing a system that meets the strict standards of the Ministry of Health and the WHO</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Nexmedis Modules -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Nexmedis Modules</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div class="p-4 rounded-xl border border-slate-200 bg-white">
          <div class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <span class="material-symbols-outlined text-lg">local_hospital</span>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Base Modules</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">
            Dashboard, Registration Cashier, Inpatient, Outpatient, Medical Records, Dispensary, and Settings.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-slate-200 bg-white">
          <div class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <span class="material-symbols-outlined text-lg">siren</span>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Emergency</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">
            24-hour service in the Emergency Room (ER) to treat patients with critical conditions or serious, life-threatening injuries.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-slate-200 bg-white">
          <div class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <span class="material-symbols-outlined text-lg">health_metrics</span>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Intensive Care</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">
            ICU (Intensive Care Unit), NICU (Neonatal Intensive Care Unit), and PICU (Pediatric Intensive Care Unit).
          </p>
        </div>
        <div class="p-4 rounded-xl border border-slate-200 bg-white">
          <div class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <span class="material-symbols-outlined text-lg">ecg_heart</span>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Diagnostic</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">
            Laboratory and Radiology.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-slate-200 bg-white">
          <div class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <span class="material-symbols-outlined text-lg">accessible_forward</span>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Therapeutic</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">
            Medical Rehabilitation (Physiotherapy), Pharmacy, and Medication
          </p>
        </div>
        <div class="p-4 rounded-xl border border-slate-200 bg-white">
          <div class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <span class="material-symbols-outlined text-lg">surgical</span>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Specialized Unit</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">
            Delivery Room (VK), Surgery Room (OK), Recovery Room (RR), and Mortem Room.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-slate-200 bg-white">
          <div class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
            <span class="material-symbols-outlined text-lg">Inventory</span>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Asset Management</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">
            Inventory, Stock Management, and Facilities Maintenance.
          </p>
        </div>
      </div>
    </section>

    <!-- Neuron -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Neuron Design System</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        Neuron is a design system specifically designed for Health Information Systems with dense and complex display structures. Nexmedis prioritizes clean, professional, and fluid design for efficient patient care. Neuron has very strict rules for design language and patterns. For work efficiency, Neuron has hundreds of components, libraries, and templates that are easy to install and modify quickly.
      </p>
      <img src="./assets/neuron_ds-1.png" alt="Neuron DS" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>

    <!-- Base Administration Modules -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Base Administration Modules</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        Base Modules are the most fundamental and lowest-level components of a healthcare system. This package only provide administration, configuration, and general care functions.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Dashboard</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Displays a summary of ongoing activities and general company performance. Users can view hospital occupancy levels, service availability, financial condition, and general diagnosis results.
          </p>
          <img src="./assets/nex-dashboard.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Registration</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          It consists of two main functions: new patient registration and service booking. New patients who do not yet have a patient ID number will be registered first by staff before being processed for available services. However, in emergency situations, new patients can be registered later, during the billing process.
          </p>
          <img src="./assets/nex-regist.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Cashier</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Processes patient bills for all services and creates billing details per transaction. This module can process various payment types, including BPJS and bill reductions with deposits and guarantors. Bills can also be paid in part or in full, depending on the circumstances.
          </p>
          <img src="./assets/nex-cash.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
      </div>
    </section>

    <!-- Base Configuration Modules -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Base Configuration Modules</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        Base Modules are the most fundamental and lowest-level components of a healthcare system. This package only provide administration, configuration, and general care functions.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Corporation</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Control user access and manage all company employees. Create, separate, and combine one or more company-owned healthcare facilities for ease of administration.
          </p>
          <img src="./assets/nex-corp.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Settings</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          A global configuration system that manages the processing flow preferences of all available modules. Master data that stores static data used for data exchange between modules.
          </p>
          <img src="./assets/nex-set.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
      </div>
    </section>

    <!-- Base General Care Modules -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Base General Care Modules</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        Base Modules are the most fundamental and lowest-level components of a healthcare system. This package only provide administration, configuration, and general care functions.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Outpatient</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Processing patient queues registered for outpatient services Recording patient consultations and examinations using various forms available in accordance with Ministry of Health and WHO standards. MaleoScribe AI summarizes doctor-patient conversations Clinical Decision Support System (CDSS) suggestions allow doctors to add a diagnosis with a single click without having to search repeatedly if the suggestions are appropriate. Doctors can prescribe medication and/or further procedures for processing in the relevant module.
          </p>
          <img src="./assets/nex-outp.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover mb-2" onerror="this.parentElement.classList.add('hidden')" />
          <img src="./assets/nex-outp-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Inpatient</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          It has almost the same features as outpatient care, but is more focused on collaborative care and recording over the long term.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Medical Records</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Displays the patient's medical history including previous illnesses, hereditary diseases, lifestyle, examination history, and potential health concerns.
          </p>
          <img src="./assets/nex-medic.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover mb-2" onerror="this.parentElement.classList.add('hidden')" />
        </div>
      </div>
    </section>

    <!-- Emergency Unit -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Emergency Unit</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      24-hour service in the Emergency Room (ER) to treat patients with critical conditions or serious, life-threatening injuries.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Triage</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Every new patient arriving will be triaged to determine their level of urgency. The goal is to ensure critical patients can be quickly transferred to the appropriate services.
          </p>
          <img src="./assets/nex-triage.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover mb-2" onerror="this.parentElement.classList.add('hidden')" />
          <img src="./assets/nex-triage-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Falling Risk</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          With Triage, the patient will be examined and determined how high and how quickly the patient can become critical.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Patient Transfer</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Patients will be transferred to the appropriate service once their condition has been confirmed. If transfer is not necessary, the patient will receive immediate care and be prescribed medication by a doctor.
          </p>
        </div>
      </div>
    </section>

    <!-- Diagnostic Service -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Diagnostic Service</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      A service for obtaining supporting data using specialized medical equipment. Patients are typically enrolled in this service if they have specific indications that cannot be diagnosed with a standard examination.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Laboratory</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Focuses on the chemical, cellular, and microbiological analysis of samples taken from patients, such as blood, urine, cerebrospinal fluid, saliva, and tissue (biopsies). This module has two data input channels: integration with laboratory systems or manual input.
          </p>
          <img src="./assets/nex-lab.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover mb-2" onerror="this.parentElement.classList.add('hidden')" />
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Radiology</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Imaging to see the condition of the inside of the body without having to perform surgery, such as bones, internal organs (heart, lungs, liver), brain, and blood vessels.
          </p>
          <img src="./assets/nex-rad.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover mb-2" onerror="this.parentElement.classList.add('hidden')" />
        </div>
      </div>
    </section>

    <!-- Asset Management -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Asset Management</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      Monitor and manage all assets owned by medical companies including medicines, medical equipment, and other items used for company operations.
      </p>
      <div class="grid grid-cols-1 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Inventory</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Adding or removing types of medical supplies and their derivatives
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Stock Management</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Monitoring and managing the use of medical supplies
          </p>
          <img src="./assets/nex-stock.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover mb-2" onerror="this.parentElement.classList.add('hidden')" />
          <img src="./assets/nex-stock-1.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover mb-2" onerror="this.parentElement.classList.add('hidden')" />
          </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-md font-semibold text-slate-700">Facilities Maintenance</h3>
          <p class="text-sm text-slate-500 mt-1 mb-2 leading-relaxed">
          Scheduling and recording maintenance of medical supplies
          </p>
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
            <span class="block text-2xl sm:text-3xl font-black text-slate-800">0.64%</span>
            <span class="text-xs text-slate-500">User Error Rate (Outpatient)</span>
          </div>
          <div class="p-4 bg-slate-100 rounded-xl">
            <span class="block text-2xl sm:text-3xl font-black text-slate-800">8.05/10</span>
            <span class="text-xs text-slate-500">Perceived Ease of Use</span>
          </div>
          <div class="p-4 bg-slate-100 rounded-xl">
            <span class="block text-2xl sm:text-3xl font-black text-slate-800">13 min</span>
            <span class="text-xs text-slate-500">Average New User Time to Value</span>
          </div>
        </div>
        <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
        Our quality testing focuses heavily on the efficiency and speed of user input. Furthermore, we ensure that new users can learn and utilize existing modules optimally with minimal assistance from IT or customer service teams. Recent testing results have shown that Nexmedis has been well-received by users, and clients eagerly await the release of new modules.
        </p>
        <h3 class="text-lg font-semibold text-slate-600 tracking-tight mb-2">What I Learn</h3>
        <p class="text-sm md:text-base text-slate-600 leading-relaxed">
        Health Information Systems face very different challenges and solutions than most other systems. Commonly understood UX rules for everyday applications often don't apply because the target users differ greatly with their preferences (e.g., a wizard-like form with multiple steps is ineffective, but a super-long form with a navigable table of contents is far more optimal). In the medical world, accuracy and speed are paramount; even the slightest friction can cost lives.
        </p>
      </div>
    </section>
  `
};
