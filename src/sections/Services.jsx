import { Button, Grid, Stack } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const scrollToId = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Services = () => (
  <Section id="services">
    <Grid container spacing={{ xs: 4, md: 6 }}>
      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <SectionHeading
            eyebrow="WHAT I DO"
            title="I help businesses turn ideas into scalable, reliable, high-performing digital solutions."
            subtitle="From architecture to delivery — built to grow with your business."
          />
          <Button
            variant="outlined"
            endIcon={<ArrowForward />}
            onClick={() => scrollToId("contact")}
            sx={{ alignSelf: "flex-start" }}
          >
            Learn more
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} key={service.title}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Section>
);

export default Services;
