import React from 'react'
import NavBar from './NavBar'
import Projects from '../Page/Projects'
import { Route, Routes, Navigate } from 'react-router-dom';
import Aboutme from '../Page/AboutMe';
import Skills from '../Page/Skills';

export default function Main() {
  return (
    <div className='containerMain w-full p-4'>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Navigate to="/aboutme"/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>
    </div>
  )
}
