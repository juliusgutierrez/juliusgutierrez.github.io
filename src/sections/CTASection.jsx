import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { AlternateEmail } from "@mui/icons-material";
import SocialLinks from "../components/SocialLinks";
import Reveal from "../components/Reveal";
import { cta, contact } from "../data";
import ctaImage from "../assets/backgrounds/lets_build_something_great.png";

const emailLink =
  contact.find((c) => c.label === "Email")?.link || "mailto:";

const CTASection = () => (
  <Box
    id="contact"
    component="section"
    sx={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      py: { xs: 10, md: 16 },
      scrollMarginTop: "72px",
    }}
  >
    {/* Full-bleed background image + overlay */}
    <Box
      component="img"
      src={ctaImage}
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
          "linear-gradient(180deg, rgba(7,10,17,0.82) 0%, rgba(7,10,17,0.7) 50%, rgba(7,10,17,0.88) 100%)",
      }}
    />

    <Container maxWidth="lg" sx={{ position: "relative" }}>
      <Stack spacing={3} alignItems="center" textAlign="center">
        <Reveal delay={0}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, color: "#fff" }}
          >
            {cta.title}
          </Typography>
        </Reveal>
        <Reveal delay={90}>
          <Typography
            variant="body1"
            sx={{ maxWidth: 540, color: "rgba(255,255,255,0.78)" }}
          >
            {cta.subtitle}
          </Typography>
        </Reveal>
        <Reveal delay={180}>
          <Button
            variant="contained"
            size="large"
            startIcon={<AlternateEmail />}
            component="a"
            href={emailLink}
          >
            Get in Touch
          </Button>
        </Reveal>
        <Reveal delay={260}>
          <SocialLinks />
        </Reveal>
      </Stack>
    </Container>
  </Box>
);

export default CTASection;
