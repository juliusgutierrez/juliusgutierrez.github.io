import React from 'react';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-gray-900 text-white py-6">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Julius Gutierrez</h1>
          <ul className="flex space-x-4 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-16 text-center" id="hero">
        <h2 className="text-4xl font-extrabold mb-4">Solution Architect & Developer</h2>
        <p className="text-lg">Designing scalable systems and building modern applications.</p>
      </section>

      <section className="container mx-auto px-4 py-12" id="about">
        <h3 className="text-2xl font-semibold mb-2">About</h3>
        <p className="mb-4">I am a seasoned architect and engineer with over a decade of experience in software development and enterprise architecture. My work spans banking, e-commerce, and gaming industries where I focus on cloud migrations and high performance systems.</p>
      </section>

      <section className="bg-gray-100 py-12" id="experience">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Led AWS cloud transformations and legacy modernizations.</li>
            <li>Implemented microservice architectures and CI/CD pipelines.</li>
            <li>Provided technical leadership across diverse engineering teams.</li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12" id="projects">
        <h3 className="text-2xl font-semibold mb-2">Projects</h3>
        <p className="mb-4">Check out my work on <a href="https://github.com/juliusgutierrez" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
      </section>

      <section className="bg-gray-100 py-12" id="contact">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p>Feel free to reach out via <a href="https://www.linkedin.com/in/julius-gutierrez-47302298" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
        </div>
      </section>

      <footer className="text-center text-sm py-4 bg-gray-900 text-white">
        © {new Date().getFullYear()} Julius Gutierrez
      </footer>
    </div>
  );
};

export default App;
