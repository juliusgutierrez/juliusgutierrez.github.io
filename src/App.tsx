import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <h1 className="text-4xl font-bold mb-4">Julius Gutierrez</h1>
        <p className="max-w-xl text-lg">
          Solution Architect, System Analyst, and Software Engineer with over a decade of experience
          delivering scalable and high-performance solutions.
        </p>
      </section>

      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <p className="mb-4">
            Expertise in Java, Spring Boot, AWS, microservices, system integration, and cloud computing.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <p className="mb-4">Highlights of professional projects and personal experiments.</p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p>
            Connect with me on
            <a href="https://www.linkedin.com/in/julius-gutierrez-47302298" className="text-blue-500 underline ml-1">LinkedIn</a>
            or check out my
            <a href="https://github.com/juliusgutierrez" className="text-blue-500 underline ml-1">GitHub</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
