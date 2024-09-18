import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='relative mb-10 mt-3'>
      {/* Botón de hamburguesa */}
      <div className="block lg:hidden absolute top-3 right-3 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      <div className={`lg:flex lg:items-center lg:justify-end ${isOpen ? 'block' : 'hidden'} lg:static absolute top-12 right-0 bg-gray-800 lg:bg-transparent p-4 lg:p-0 w-full lg:w-auto z-40`}>
        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <li>
            <NavLink 
              to="/aboutme"
              className={({ isActive }) => isActive ? "text-[#A435F0] font-bold" : "text-white"}
            >
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "text-[#A435F0] font-bold" : "text-white"}
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/skills" 
              className={({ isActive }) => isActive ? "text-[#A435F0] font-bold" : "text-white"}
            >
              Skills
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
