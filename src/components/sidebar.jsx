import React, { useRef } from 'react';

const SidebarComponent = () => {
  // Create a ref to the element
  const elementRef = useRef(null);

  // Directly toggle the className on click
//   const handleToggle = () => {
//     const element = elementRef.current;
//     if (element) {
//       // Toggle between two classNamees
//       if (element.classNameList.contains('className-1')) {
//         element.classNameList.replace('className-1', 'className-2');
//       } else {
//         element.classNameList.replace('className-2', 'className-1');
//       }
//     }
//   };

  return (
    <div>
      
      <nav className="bg-white shadow-sm px-4 py-3 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation" aria-controls="drawer-navigation" className="p-2 mr-2 text-acent1 rounded-lg cursor-pointer lg:hidden hover:bg-bgLight focus:bg-bgLight focus:ring-2 focus:ring-acent1" >
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>

            {/* <!-- Logo --> */}
            <a href="/" className="flex items-center justify-between mr-4">
              <img src="../assets/images/logo.png" className="mr-3 h-8 hidden md:inline" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Final Quadrant</span>
            </a>

            {/* <!-- Tab Name --> */}
            <h4 className="hidden lg:block text-base lg:text-2xl font-medium text-primary ml-5">Dashboard</h4>
          </div>

          {/* <!-- Institute Name --> */}
          <div className="hidden lg:inline">
            <h1 className="text-xl md:text-2xl lg:text-2xl font-medium text-primary">Data for Dashboard Development</h1>
          </div>

          
        </div>
      </nav>
      {/* <!-- End of the Navbar --> */}

      {/* <!-- Sidebar --> */}
      <aside className="scrollbar fixed top-0 left-0 z-40 w-72 lg:w-56 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0" aria-label="Sidenav" id="drawer-navigation" ref={elementRef}>
        <div className="overflow-y-auto py-5 px-3 h-full bg-white">
          {/* <!-- Menu (It's for mobile) --> */}
          <ul className="space-y-0.5 inline lg:hidden">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
                <i className="fa-solid fa-house text-lg text-acent1 group-hover:text-white transition duration-75"></i>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
                <i className="fa-solid fa-gear text-lg text-acent1 transition duration-75 group-hover:text-white"></i>
                <span className="ml-3">Setting</span>
              </a>
            </li>
          </ul>

          {/* <!-- Menu (It's for Lablet and Desktop) --> */}
          <ul className="hidden lg:inline space-y-0.5">
            <li>
              <a href="index.html" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
                <i className="fa-solid fa-house text-lg text-acent1 group-hover:text-white transition duration-75"></i>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>

          </ul>
        </div>
        <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white z-20">
          <a href="setting.html" data-tooltip-target="tooltip-settings" className="inline-flex w-9 h-9 justify-center items-center bg-bgLight text-acent1 rounded-xl cursor-pointer hover:text-white hover:bg-acent1">
            <i className="fa-solid fa-gear text-md"></i>
          </a>
          <div id="tooltip-settings" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-acent1 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
            Settings page
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a href="#" data-tooltip-target="tooltip-tutorial" className="inline-flex w-9 h-9 justify-center items-center bg-bgLight text-acent1 rounded-xl cursor-pointer hover:text-white hover:bg-acent1">
            <i className="fa-solid fa-video text-md"></i>
          </a>
          <div id="tooltip-tutorial" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-acent1 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
            Tutorials
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a href="#" data-tooltip-target="tooltip-support" className="inline-flex w-9 h-9 justify-center items-center bg-bgLight text-acent1 rounded-xl cursor-pointer hover:text-white hover:bg-acent1">
            <i className="fa-solid fa-headset text-md"></i>
          </a>
          <div id="tooltip-support" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-acent1 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
            Support
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </aside>
      {/* <!-- End of the Sidebar --> */}
    </div>
  );
};

export default SidebarComponent;
  
    
    