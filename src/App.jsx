import { Box } from "@mui/material";

import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";

function App() {
  return (
    <Box>
      <NavBar />
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <CTASection />
      <Footer />
    </Box>
  );
}

export default App;
