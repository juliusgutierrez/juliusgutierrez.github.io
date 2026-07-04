import { Box, Container, Link, Typography } from "@mui/material";

export default function SahodApp() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Sahod
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          This page is live at /sahod. Content coming soon.
        </Typography>
        <Link href="/" underline="hover">
          Back to home
        </Link>
      </Container>
    </Box>
  );
}
