import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => (
  <header className="bg-white shadow">
    <nav className="container mx-auto flex justify-between items-center p-4">
      <div className="font-bold text-lg">Julius</div>
      <div className="space-x-4">
        <Link to="home" smooth className="cursor-pointer hover:text-blue-500">Home</Link>
        <Link to="experience" smooth className="cursor-pointer hover:text-blue-500">Experience</Link>
        <Link to="projects" smooth className="cursor-pointer hover:text-blue-500">Projects</Link>
        <Link to="contact" smooth className="cursor-pointer hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  </header>
);

export default Header;
