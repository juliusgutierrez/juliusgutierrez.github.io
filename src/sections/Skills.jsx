import PropTypes from "prop-types";
import { Box, Container, Stack, Typography } from "@mui/material";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { techStack } from "../data";

// Two copies back-to-back so translateX(-50%) loops seamlessly.
const marqueeItems = [...techStack, ...techStack];

const Logo = ({ name, slug }) => (
  <Stack
    spacing={1.25}
    alignItems="center"
    sx={{
      flexShrink: 0,
      opacity: 0.6,
      transition: "opacity 0.3s cubic-bezier(0.16,1,0.3,1)",
      "&:hover": { opacity: 1 },
    }}
  >
    <Box
      component="img"
      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
      alt={name}
      title={name}
      loading="lazy"
      sx={{ height: { xs: 28, md: 34 }, width: "auto" }}
    />
    <Typography
      variant="caption"
      sx={{
        color: "text.secondary",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      {name}
    </Typography>
  </Stack>
);

Logo.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

const Skills = () => (
  <Box id="skills" component="section" sx={{ py: { xs: 7, md: 12 }, scrollMarginTop: "72px" }}>
    <Container maxWidth="lg">
      <Reveal>
        <SectionHeading
          eyebrow="TECH STACK"
          title="Technologies I build with"
          subtitle="A decade of hands-on work across the languages, frameworks, and platforms behind enterprise systems."
        />
      </Reveal>
    </Container>

    <Reveal delay={120} sx={{ mt: { xs: 5, md: 7 } }}>
      <Box
        sx={{
          overflow: "hidden",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          sx={{
            width: "max-content",
            animation: "skills-marquee 42s linear infinite",
            "&:hover": { animationPlayState: "paused" },
            "@keyframes skills-marquee": {
              from: { transform: "translate3d(0,0,0)" },
              to: { transform: "translate3d(-50%,0,0)" },
            },
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
              flexWrap: "wrap",
              width: "auto",
              justifyContent: "center",
              rowGap: 4,
            },
          }}
        >
          {marqueeItems.map((tech, i) => (
            <Logo key={`${tech.slug}-${i}`} {...tech} />
          ))}
        </Stack>
      </Box>
    </Reveal>
  </Box>
);

export default Skills;
