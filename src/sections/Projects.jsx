import { Grid, Stack } from "@mui/material";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data";

const Projects = () => (
  <Section id="projects">
    <Stack spacing={5}>
      <Reveal>
        <SectionHeading
          eyebrow="PORTFOLIO"
          title="Some of the projects I've worked on"
          subtitle="A selection of systems built and modernized across enterprise teams."
        />
      </Reveal>
      <Grid container spacing={3}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Reveal delay={(i % 3) * 90} sx={{ height: "100%" }}>
              <ProjectCard {...project} />
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Stack>
  </Section>
);

export default Projects;
