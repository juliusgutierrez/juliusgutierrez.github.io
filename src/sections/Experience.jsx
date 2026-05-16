import { Box, Stack } from "@mui/material";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import { roles } from "../data";

const Experience = () => (
  <Section id="experience">
    <Stack spacing={5}>
      <SectionHeading eyebrow="EXPERIENCE" title="My professional journey" />
      <Box sx={{ maxWidth: 720 }}>
        {roles.map((role, index) => (
          <TimelineItem
            key={`${role.company}-${role.period}`}
            period={role.period}
            title={role.position}
            company={role.company}
            description={role.details[0]}
            last={index === roles.length - 1}
          />
        ))}
      </Box>
    </Stack>
  </Section>
);

export default Experience;
