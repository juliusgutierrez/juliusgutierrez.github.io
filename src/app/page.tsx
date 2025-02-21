import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">🚀 Julius Gutierrez</h1>

        <section className="mt-4 space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong>Solution Architect, System Analyst, and Software Engineer</strong> with over a decade of experience in{" "}
            <strong>software development, solution design, and enterprise architecture</strong>. Experienced in{" "}
            <strong>banking, finance, e-commerce, and gaming industries</strong>, delivering scalable and high-performance solutions.
          </p>

          <p>
            🎓 Holds multiple industry-recognized certifications, including <strong>AWS Solution Architect – Associate</strong>,{" "}
            <strong>Oracle Certified Professional - Java SE 11 Developer</strong>, and <strong>Professional Scrum Master</strong>. 
            Expertise in <strong>Java, Spring Boot, AWS, microservices, system integration, and cloud computing</strong>.
          </p>

          <p>
            💡 Specializes in <strong>enterprise-level solution design, backend optimizations, and cloud migrations</strong>. Adept in{" "}
            <strong>scalable architectures, legacy system modernization, and CI/CD pipeline implementation</strong>. Provides technical guidance, 
            cross-functional collaboration, and mentoring.
          </p>

          <p>
            📈 As a <strong>technical leader and architect</strong>, has driven <strong>AWS cloud transformations, integrated cutting-edge technologies, 
            and optimized development processes</strong>. Trusted advisor for strategic IT initiatives.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">🔗 Connect with Julius:</h2>
          <ul className="mt-2 space-y-2 text-blue-600">
            <li>
              🌐 <Link href="http://www.juliusgutierrez.com" target="_blank" className="hover:underline">Website</Link>
            </li>
            <li>
              💼 <Link href="https://www.linkedin.com/in/julius-gutierrez-47302298" target="_blank" className="hover:underline">LinkedIn</Link>
            </li>
            <li>
              🐙 <Link href="https://github.com/juliusgutierrez" target="_blank" className="hover:underline">GitHub</Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
