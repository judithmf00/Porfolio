import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='mb-10'>
      <ul className="flex gap-12 justify-end">
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
    </nav>
  );
}
