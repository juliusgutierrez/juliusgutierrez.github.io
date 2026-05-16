import { Box, Container, Stack, Typography } from "@mui/material";
import SocialLinks from "../components/SocialLinks";

const Footer = () => (
  <Box
    component="footer"
    sx={{ borderTop: "1px solid", borderColor: "divider", py: 4 }}
  >
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Julius Gutierrez. All rights reserved.
        </Typography>
        <SocialLinks />
      </Stack>
    </Container>
  </Box>
);

export default Footer;
