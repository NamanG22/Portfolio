"use client"; // Add this line at the top

import React, { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars } from 'react-icons/fa';
import { IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { DiDatabase } from "react-icons/di";
import { GiAchievement } from "react-icons/gi";
import { FaJava } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex w-fit">
      <div className={`fixed left-0 top-0 h-full bg-theme1 text-theme3 transition-all duration-300 ease-in-out ${isOpen ? 'w-1/4' : 'w-16'}`}>
        <div className="flex items-center justify-between p-2 m-4 shadow-lg shadow-theme3/20 hover:shadow-theme3/40 w-fit">
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            <FaBars />
          </button>
        </div>
        <div className="flex flex-col mt-10 px-1 transition-all duration-300 ease-in-out font-semibold">
            <div className="w-full">
                <div className="flex font-semibold text-6xl justify-end">
                    <h1>N</h1>
                    {isOpen && <span>AMAN</span>}
                </div>
                <div className="flex font-semibold text-2xl justify-end">
                    <h1>S</h1>
                    {isOpen && <span>oftware</span>}
                </div>
            </div>
            <div className={`flex flex-col mt-12 space-y-4 ${isOpen?"justify-start":"mx-auto"}`}>
                <SidebarItem icon={<IoSchool />} label="EDUCATION" isOpen={isOpen} />
                <SidebarItem icon={<MdOutlineWork />} label="WORK EXPERIENCE" isOpen={isOpen} />
                <SidebarItem icon={<DiDatabase />} label="PROJECTS" isOpen={isOpen} />
                <SidebarItem icon={<GiAchievement />} label="ACHIEVEMENTS" isOpen={isOpen} />
                <SidebarItem icon={<FaJava />} label="SKILLS" isOpen={isOpen} />
                <SidebarItem icon={<PiCertificateFill />} label="CERTIFICATES" isOpen={isOpen} />
            </div>
        </div>
      </div>
      <div className={`fixed transition-all w-auto mt-10 duration-300 ease-in-out ${isOpen ? 'ml-96' : 'ml-16'}`}>
        <div className={`flex text-6xl pl-1 font-semibold text-theme1`}>
          <h1>G</h1>
          {isOpen && <span>ARG</span>}
        </div>
        <div className="flex pl-0.5 text-2xl font-semibold text-theme1">
          <p>D</p>
          {isOpen && <span>eveloper</span>}
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, isOpen }: { icon: JSX.Element; label: string; isOpen: boolean }) => (
  // <div className="flex space-x-2">
    // <div className="text-3xl">{icon}</div>
    <Link href={`/${label.toLowerCase()}`} className="flex self-center">
      {isOpen && <span 
      className="text-2xl max-w-80 text-center btn btn-2 text-theme3"
      >{label}</span>}
    </Link>
  // </div>
);

export default Sidebar;
