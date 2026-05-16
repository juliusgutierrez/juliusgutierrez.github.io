import { Grid, Stack } from "@mui/material";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => (
  <Section id="projects">
    <Stack spacing={5}>
      <SectionHeading
        eyebrow="PORTFOLIO"
        title="Some of the projects I've worked on"
        subtitle="A selection of systems built and modernized across enterprise teams."
      />
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  </Section>
);

export default Projects;
