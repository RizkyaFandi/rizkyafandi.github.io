/**
 * Project Data: Nearon IoT Mobile App
 * Edit this file to update the Nearon project details, media, and HTML content.
 */

window.PROJECTS_DATABASE = window.PROJECTS_DATABASE || {};

window.PROJECTS_DATABASE['nearon'] = {
  id: 'nearon',
  name: 'Nearon IoT Mobile App',
  logoSrc: './assets/near-logo.png',
  htmlContent: `
    <!-- Project Header -->
    <header class="space-y-4 pb-6 border-b border-slate-200">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 flex-shrink-0 border border-slate-300 rounded-xl p-1">
          <img src="./assets/near-logo.png" alt="Nexmedis Logo" class="w-full h-full object-cover" />
        </div>
        <div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nearon IoT Mobile App
          </h1>
          <h3 class="text-xs sm:text-sm lg:text-md font-medium uppercase text-slate-500 tracking-widest">IoT System Monitoring</h3>
        </div>
      </div>
      <ul class="space-y-2 text-base sm:text-md text-slate-600 max-w-3xl leading-relaxed">
        <li>Nearon is an Internet of Things system that connects hardware devices in various locations to a central system via the internet. Nearon uses Node devices that send and receive data attached to the hardware. As a result, users can view statistical data and control devices remotely with minimal direct supervision.</li>
        <li>In this project, I was responsible for designing a Nearon mobile application that can monitor and control each connected device in personal smartphone.</li>
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
          <span class="font-semibold text-slate-800">Mobile</span>
        </div>
        <div>
          <span class="block text-slate-400 font-medium">Design System</span>
          <span class="font-semibold text-slate-800">Syn Design</span>
        </div>
      </div>
    </header>

    <!-- Project Overview -->
    <section class="space-y-4 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Create The Requirement</h2>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Desk Research</h3>
      <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>Desk research was the right research method for this project because the overall concept of the application was already clearly defined, and we needed to work quickly.</li>
        <li>I conducted desk research and brainstorming with a Business Analyst to determine how each piece of data would be displayed across all features.</li>
        <li>During the design process, I also analyzed other commonly used IoT-based applications such as Apple Home, Google Home, and IKEA Home. However, because applications like Nearon are rare, I also used Dribbble to find design inspiration that fit the application's data and functionality.</li>
      </ul>
      </div>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Research Analysis</h3>
      <ul class="list-disc list-outside pl-4 space-y-1 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>Almost all IoT app provide on/off feature for connected devices.</li>
        <li>Our app may be new to some user, we need tell the user what is Nearon.</li>
        <li>Nearon is designed for business, so it cannot completely follow the design pattern of a typical IoT application.</li>
        <li>Some CCTV have different control panels and have different types of technology.</li>
        <li>Monitoring of sensors on connected devices should prioritize good/bad condition readability.</li>
      </ul>
      </div>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Similar App Analysis</h3>
      <p class="space-y-1 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      We did Desk Research to several IoT application, such as Google Home, Apple Home, and Samsung Things. We also find any design inspiration from Dribbble.  
      </p>
      <img src="./assets/near-sim.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
      <div class="space-y-1">
      <h3 class="text-lg font-semibold text-slate-600 tracking-tight">Information Architecture</h3>
      <img src="./assets/near-info.png" alt="Nexmedis Dashboard" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl border border-rose-100 bg-rose-50/40">
          <h3 class="text-sm font-bold text-rose-900 flex items-center gap-1.5 mb-1.5">
            Pain Points
          </h3>
          <p class="text-sm text-emerald-800 space-y-1 list-disc">
            Users cannot access statistical data of all connected devices quickly and concisely because they need a desktop computer or laptop to open the Nearon Dashboard.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40">
          <h3 class="text-sm font-bold text-emerald-900 flex items-center gap-1.5 mb-1.5">
            Project Goals
          </h3>
          <ul class="text-sm text-emerald-800 space-y-1 list-disc pl-4">
            <li>Display realtime statistical data for all connected devices and generate useful reports.</li>
            <li>Control and prevent potential hazards early.</li>
            <li>Easily monitor every work activity in the work area via smartphone</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Onboarding -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Onboarding</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      Some new user need to know what they can do in this application. That’s why a quick Onboarding Screen could show the main feature of Nearon Mobile App.
      </p>
      <img src="./assets/near-onboard.png" alt="Neuron DS" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>

    <!-- Login Page -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Login Page</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      Standard features used to log into the application through an authentication process to ensure the security of user and company data. We provide face recognition method for easier login process.
      </p>
      <img src="./assets/near-login.png" alt="Neuron DS" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>

    <!-- Home -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Home</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      This is the first page after the user completes the login/registration process. Some information is displayed here.
      </p>
      <ul class="list-disc list-outside pl-4 space-y-1 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>Overview shows the number of projects, nodes, sensors, actuators, and CCTV cameras connected to the company's central system.</li>
        <li>Performance Overview shows the active (Uptime) or downtime status of devices, as well as the condition of the sensors.</li>
        <li>Node Summary displays several important sensors pinned via the website, along with a shortcut to a detailed list of all sensors within that node.</li>
        </ul>
      <img src="./assets/near-home.png" alt="Neuron DS" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>

    <!-- Monitoring -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Monitoring</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      A feature for monitoring the condition of sensors and actuators within a single company. This feature is divided into two sections: Sensor and Actuator.
      </p>
      <ul class="list-disc list-outside pl-4 space-y-1 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>In the Sensor section, user can view the condition of existing sensors and display the data collected by them. Clicking on a card displays sensor details based on data type (String, Integer).</li>
        <li>In the Actuator section, user can view existing actuators and control devices connected to them. Some actuator that operate automatically only display the number of active devices.</li>
        </ul>
      <img src="./assets/near-monitor.png" alt="Neuron DS" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>

    <!-- CCTV -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">CCTV</h2>
      <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        <li>This feature allows all CCTV cameras within a company to be easily accessed via smartphone. This feature also stores data captured by CCTV cameras based on functions such as Face Recognition, Personal Protective Equipment, and People Counting.</li>
        <li>Furthermore, users can control CCTV cameras through various available menus. The PTZ menu allows user to rotate the CCTV cameras in the desired direction. The Voice menu allows user to communicate with the CCTV cameras via voice communication. The Capture and Recording menus allow user to capture images and videos from the CCTV cameras.</li>
        </ul>
      <img src="./assets/near-cctv.png" alt="Neuron DS" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>

    <!-- Profile -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Profile</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      Users can manage their profile and application preferences through this menu. Profiles consist of: Account Information to manage user profile and account data, Theme to change the theme to light or dark, Change Password to change the user's password, Face Recognition to activate and record the user's facial data for login.
      </p>
      <img src="./assets/near-pro.png" alt="Neuron DS" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>

    <!-- Report -->
    <section class="space-y-3 pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Report</h2>
      <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
      A simple feature to quickly generate reports that can be customized for a specific date range.
      </p>
      <img src="./assets/near-rep.png" alt="Neuron DS" class="w-full h-auto object-cover" onerror="this.parentElement.classList.add('hidden')" />
    </section>

    <!-- Result -->
    <section class="pt-2">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Results & Operational Impact</h2>
        <h3 class="text-lg font-semibold text-slate-600 tracking-tight mb-2">Design Validation</h3>
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-4">
          <div class="p-4 bg-slate-100 rounded-xl">
            <span class="block text-2xl sm:text-3xl font-black text-slate-800">6.1/7</span>
            <span class="text-xs text-slate-500">SEQ Score</span>
          </div>
        </div>
        <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
        Nearon Mobile is currently in development and has not yet been released. However, we have conducted Single Ease Question (SEQ) and A/B testing on our client, Madhani Talatah Nusantara. The results showed an average SEQ score of 6.1 out of 7.
        </p>
        <h3 class="text-lg font-semibold text-slate-600 tracking-tight mb-2">What I Learn</h3>
        <ul class="space-y-2 text-slate-600 text-sm md:text-base leading-relaxed mb-4">
          <li>Nearon still in early stage of development. Some feature may not be good enough for other client and needs more deep research to improve it’s usability. But, at least we already got a good start.</li>
          <li>This is the first time i designed real IoT mobile app that will be released in the future. From this project, i got deep knowledge about how sensor and actuator really works through the internet. I also learned about how IoT implementation can increase the business value of big companies.</li>
      </ul>
      </div>
    </section>
  `
};
