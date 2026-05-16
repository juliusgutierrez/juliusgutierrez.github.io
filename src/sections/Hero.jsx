import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ArrowForward, Download } from "@mui/icons-material";
import Highlight from "../components/Highlight";
import { hero } from "../data";
import heroImage from "../assets/backgrounds/hero_background.png";

const scrollToId = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Hero = () => (
  <Box
    id="home"
    component="section"
    sx={{
      position: "relative",
      minHeight: { xs: "88vh", md: "92vh" },
      display: "flex",
      alignItems: "center",
      scrollMarginTop: "72px",
    }}
  >
    {/* Full-bleed background image + overlay */}
    <Box
      component="img"
      src={heroImage}
      alt=""
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(100deg, rgba(7,10,17,0.94) 0%, rgba(7,10,17,0.72) 42%, rgba(7,10,17,0.35) 100%)",
      }}
    />

    <Container maxWidth="lg" sx={{ position: "relative" }}>
      <Stack spacing={3} sx={{ maxWidth: 620, py: { xs: 8, md: 0 } }}>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "2.6rem", sm: "3.4rem", md: "4rem" } }}
        >
          {hero.headlineLead} <Highlight>{hero.headlineHighlight}</Highlight>{" "}
          {hero.headlineTrail}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
          {hero.subtext}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => scrollToId("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="contained"
            color="inherit"
            size="large"
            startIcon={<Download />}
            component="a"
            href={hero.cv}
            target="_blank"
            rel="noreferrer"
            sx={{
              bgcolor: "rgba(255,255,255,0.08)",
              color: "text.primary",
              boxShadow: "none",
              border: "1px solid",
              borderColor: "divider",
              "&:hover": { bgcolor: "rgba(255,255,255,0.14)" },
            }}
          >
            Download CV
          </Button>
        </Stack>

        {/* Tech stack strip */}
        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 3 }}
          alignItems="center"
          flexWrap="wrap"
          useFlexGap
          sx={{ pt: 1 }}
        >
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", opacity: 0.6, fontWeight: 500, whiteSpace: "nowrap" }}
          >
            Built with
          </Typography>
          {["Java", "Spring Boot", "React", "AWS", "Docker"].map((tech) => (
            <Typography
              key={tech}
              variant="caption"
              sx={{
                color: "text.secondary",
                opacity: 0.55,
                fontWeight: 700,
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              {tech}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Hero;
