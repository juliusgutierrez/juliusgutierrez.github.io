import { Box, Stack } from "@mui/material";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import Reveal from "../components/Reveal";
import { roles } from "../data";

const Experience = () => (
  <Section id="experience">
    <Stack spacing={5}>
      <Reveal>
        <SectionHeading eyebrow="EXPERIENCE" title="My professional journey" />
      </Reveal>
      <Box sx={{ maxWidth: 720 }}>
        {roles.map((role, index) => (
          <Reveal
            key={`${role.company}-${role.period}`}
            delay={index * 70}
            y={16}
          >
            <TimelineItem
              period={role.period}
              title={role.position}
              company={role.company}
              description={role.details[0]}
              last={index === roles.length - 1}
            />
          </Reveal>
        ))}
      </Box>
    </Stack>
  </Section>
);

export default Experience;
