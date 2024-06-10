import React from "react";

function Navbar({count}) {
  
  return (
    <>
      <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-md fixed w-full top-0 z-50">
        <div className="text-white text-2xl font-bold">&lt;AbhishekJ24/&gt;</div>
        <div className="text-white">
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white bg-green-500 p-2 rounded-lg">
          Counter: {count}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
