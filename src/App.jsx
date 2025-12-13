import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  AlternateEmail,
  Language,
  LocationOn,
  PhoneIphone,
  WorkOutline,
  School,
} from "@mui/icons-material";

import SectionCard from "./components/SectionCard";
import ChipGrid from "./components/ChipGrid";
import { contact, education, interests, roles, skills, summary } from "./data";
import avatar from "./assets/avatar.png";

const iconMap = {
  Portfolio: <WorkOutline color="primary" />,
  Email: <AlternateEmail color="primary" />,
  WhatsApp: <PhoneIphone color="primary" />,
  Location: <LocationOn color="primary" />,
};

function App() {
  return (
    <Box sx={{ pb: 6 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={12}>
            <SectionCard>
              <Stack
                spacing={3}
                direction={{ xs: "column", md: "row" }}
                alignItems={{ md: "center" }}
              >
                <Avatar
                  src={avatar}
                  alt="Avatar"
                  variant="rounded"
                  sx={{
                    width: 180,
                    height: 180,
                    borderRadius: 1, // tweak: 0 = perfect square, 1–2 = subtle rounding
                    border: "2px solid #272730",
                    boxShadow: 3,
                  }}
                />

                <Stack spacing={1.5}>
                  <Typography variant="h4">{summary.name}</Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {summary.role}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    alignItems="center"
                  >
                    <Typography variant="body1" color="text.secondary">
                      Interests
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        borderColor: "rgba(255,255,255,0.3)",
                        height: 40,
                      }}
                    />
                    {interests.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        color="primary"
                        sx={{ bgcolor: "rgba(124,93,255,0.16)" }}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </SectionCard>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              {roles.map((role) => (
                <SectionCard
                  key={role.company}
                  title={role.position}
                  subtitle={role.company}
                  action={<Chip label={role.period} />}
                >
                  <List sx={{ pl: 1 }}>
                    {role.details.map((detail) => (
                      <ListItem key={detail} disableGutters sx={{ py: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              bgcolor: "primary.main",
                              borderRadius: "50%",
                              mt: 0.75,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={detail}
                          primaryTypographyProps={{ color: "text.primary" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Stack spacing={1} sx={{ pl: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Tech Stack
                    </Typography>
                    <ChipGrid items={role.techStack} />
                  </Stack>
                </SectionCard>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {skills.map((group) => (
                <SectionCard
                  key={group.title}
                  title={group.title}
                  spacing={1.5}
                >
                  <ChipGrid items={group.chips} />
                </SectionCard>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <SectionCard title="Education & Certifications" spacing={2.5}>
              <Stack spacing={2}>
                {education.map((item) => (
                  <Stack
                    key={item.school}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Avatar
                      sx={{
                        bgcolor: "rgba(124,93,255,0.18)",
                        color: "primary.main",
                        width: 42,
                        height: 42,
                      }}
                    >
                      <School fontSize="small" />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {item.school}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.focus}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.location}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <Chip
                        label={item.period}
                        variant="outlined"
                        sx={{ borderColor: "rgba(255,255,255,0.16)" }}
                      />
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </SectionCard>
          </Grid>

          <Grid item xs={12} md={5}>
            <SectionCard title="Contact" spacing={1.5}>
              <List disablePadding>
                {contact.map((item) => (
                  <ListItem key={item.label} disableGutters sx={{ py: 1.25 }}>
                    <ListItemIcon sx={{ minWidth: 38 }}>
                      {iconMap[item.label]}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        item.link ? (
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            underline="none"
                            color="inherit"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          item.value
                        )
                      }
                      secondary={item.label}
                      secondaryTypographyProps={{ color: "text.secondary" }}
                    />
                  </ListItem>
                ))}
              </List>
              {/* <Divider sx={{ my: 1.5 }} /> */}
              {/* <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {["Dribbble", "Behance", "LinkedIn"].map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    variant="outlined"
                    sx={{ borderColor: "rgba(255,255,255,0.16)" }}
                  />
                ))}
              </Stack> */}
            </SectionCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
