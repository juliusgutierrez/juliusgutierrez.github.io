import { Box, Button, Stack, Typography } from "@mui/material";
import { AlternateEmail } from "@mui/icons-material";
import Section from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import { cta, contact } from "../data";

const emailLink =
  contact.find((c) => c.label === "Email")?.link || "mailto:";

const CTASection = () => (
  <Section id="contact">
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 9 },
        textAlign: "center",
        bgcolor: "background.paper",
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.75rem" } }}>
          {cta.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540 }}>
          {cta.subtitle}
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<AlternateEmail />}
          component="a"
          href={emailLink}
        >
          Get in Touch
        </Button>
        <SocialLinks />
      </Stack>
    </Box>
  </Section>
);

export default CTASection;
