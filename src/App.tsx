import React from "react";
import { Container, Typography, Paper, Link } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "8px" }}>
        <Typography variant="h4" color="primary" gutterBottom>
          🚀 Julius Gutierrez
        </Typography>
        
        <Typography variant="body1" paragraph>
          <strong>Solution Architect, System Analyst, and Software Engineer</strong> with over a decade of
          experience in <strong>software development, solution design, and enterprise architecture</strong>. 
          Experienced in <strong>banking, finance, e-commerce, and gaming industries</strong>, delivering scalable 
          and high-performance solutions.
        </Typography>
        
        <Typography variant="body1" paragraph>
          🎓 Holds multiple industry-recognized certifications, including <strong>AWS Solution Architect – Associate</strong>,
          <strong> Oracle Certified Professional - Java SE 11 Developer</strong>, and <strong>Professional Scrum Master</strong>.
          Expertise in <strong>Java, Spring Boot, AWS, microservices, system integration, and cloud computing</strong>.
        </Typography>
        
        <Typography variant="body1" paragraph>
          💡 Specializes in <strong>enterprise-level solution design, backend optimizations, and cloud migrations</strong>.
          Adept in <strong>scalable architectures, legacy system modernization, and CI/CD pipeline implementation</strong>.
          Provides technical guidance, cross-functional collaboration, and mentoring.
        </Typography>
        
        <Typography variant="body1" paragraph>
          📈 As a <strong>technical leader and architect</strong>, has driven <strong>AWS cloud transformations, integrated
          cutting-edge technologies, and optimized development processes</strong>. Trusted advisor for strategic IT initiatives.
        </Typography>
        
        <Typography variant="h6">🔗 Connect with Julius:</Typography>
        <Typography variant="body1">
          🌐 <Link href="http://www.juliusgutierrez.com" target="_blank">Website</Link><br />
          💼 <Link href="https://www.linkedin.com/in/julius-gutierrez-47302298" target="_blank">LinkedIn</Link><br />
          🐙 <Link href="https://github.com/juliusgutierrez" target="_blank">GitHub</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default App;
