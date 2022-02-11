import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const HomeTips = () => {
 return (
  <Container sx={{ my: 10 }}>
   <Typography variant="h3" sx={{ color: "#10375C", fontWeight: "bold" }}>
    Useful Tips Videos
   </Typography>
   <Typography sx={{ my: 2, color: "#515B61" }}>
    Urna posuere dapibus hac turpis euismod rutrum massa non id. Et ornare
    <br /> urna placerat purus pharetra dolor.
   </Typography>
   <Grid container spacing={2}>
    <Grid item xs={6}></Grid>
    <Grid item xs={6}></Grid>
   </Grid>
  </Container>
 );
};

export default HomeTips;
