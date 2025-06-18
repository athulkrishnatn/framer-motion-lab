"use client";

import { useState } from "react";
import { IconX, IconMenu2 } from "@tabler/icons-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } h-screen bg-gray-800 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          {isOpen && <h1 className="text-lg font-semibold">Dashboard</h1>}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-4 space-y-2 px-4">
          {["Home", "Profile", "Settings", "Messages", "Logout"].map((item, index) => (
            <li
              key={index}
              className="text-sm hover:bg-gray-700 px-2 py-2 rounded cursor-pointer"
            >
              {isOpen ? item : item[0]}
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default Sidebar;
