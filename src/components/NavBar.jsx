import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Close } from "@mui/icons-material";
import { navLinks } from "../data";

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Logo = () => (
  <Stack direction="row" spacing={1} alignItems="center">
    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: 2,
        display: "grid",
        placeItems: "center",
        fontWeight: 800,
        fontSize: 14,
        color: "#fff",
        background: "linear-gradient(135deg, #3b82f6, #38bdf8)",
      }}
    >
      JG
    </Box>
    <Typography sx={{ fontWeight: 700, display: { xs: "none", sm: "block" } }}>
      Julius Gutierrez
    </Typography>
  </Stack>
);

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? "rgba(10,14,23,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid",
        borderColor: scrolled ? "divider" : "transparent",
        transition:
          "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>
          <Box
            onClick={() => handleNav("home")}
            sx={{ cursor: "pointer" }}
          >
            <Logo />
          </Box>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.id}
                onClick={() => handleNav(link.id)}
                sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="contained"
              onClick={() => handleNav("contact")}
              sx={{ ml: 1 }}
            >
              Let's Talk
            </Button>
          </Stack>

          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "text.primary" }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 260, backgroundColor: "background.paper" } }}
      >
        <Stack direction="row" justifyContent="flex-end" sx={{ p: 1 }}>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <Close />
          </IconButton>
        </Stack>
        <List>
          {navLinks.map((link) => (
            <ListItemButton key={link.id} onClick={() => handleNav(link.id)}>
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleNav("contact")}
          >
            Let's Talk
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
