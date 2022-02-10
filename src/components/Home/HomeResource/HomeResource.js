import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bookIcon from "../../../img/book-icon.png";
import cvIcon from "../../../img/cv-icon.png";
import resourceImg from "../../../img/resource-img.png";

const HomeResource = () => {
 return (
  <Box
   component="div"
   sx={{ mt: 10, mb: 20, bgcolor: "#0F2D4A", pt: 8, color: "#fff" }}
  >
   <Container>
    <Typography
     variant="h3"
     sx={{ fontWeight: "bold", textAlign: "center", fontSize: "2.5rem" }}
    >
     Grab this Exciting Opportunity <br /> to get Free Resources
    </Typography>
    <Typography sx={{ textAlign: "center", mt: 3, mb: 4 }}>
     Urna posuere dapibus hac turpis euismod rutrum massa non id. Et ornare urna{" "}
     <br />
     placerat purus pharetra dolor.
    </Typography>
    <Grid container spacing={2}>
     <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
      <img src={bookIcon} alt="" />
      <Typography variant="h5" sx={{ fontWeight: "bold", my: 1 }}>
       Get Free Courses
      </Typography>
      <Typography>
       We offer the latest knowledge formulated by the mentors <br /> who stand
       out for being empathetic professionals.
      </Typography>
      <Button
       sx={{
        bgcolor: "",
        color: "#fff",
        maxWidth: "200px",
        padding: "1em 3.5em",
        border: "2px solid #FFF",
        borderRadius: "3px",
        fontFamily: "Manrope",
        fontWeight: "bold",
        mt: 2,
        "&:hover": {
         bgcolor: "#FF4958",
         border: "2px solid #FF4958",
        },
       }}
      >
       Get Now
      </Button>
     </Grid>
     <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
      <img src={cvIcon} alt="" />
      <Typography variant="h5" sx={{ fontWeight: "bold", my: 1 }}>
       Get Free CV
      </Typography>
      <Typography>
       We offer the latest knowledge formulated by the mentors <br /> who stand
       out for being empathetic professionals.
      </Typography>
      <Button
       sx={{
        bgcolor: "",
        color: "#fff",
        maxWidth: "200px",
        padding: "1em 3.5em",
        border: "2px solid #FFF",
        borderRadius: "3px",
        fontFamily: "Manrope",
        fontWeight: "bold",
        mt: 2,
        "&:hover": {
         bgcolor: "#FF4958",
         border: "2px solid #FF4958",
        },
       }}
      >
       Get Now
      </Button>
     </Grid>
    </Grid>
    <Grid
     container
     spacing={0}
     sx={{
      bgcolor: "#F9F9F9",
      height: "10rem",
      borderRadius: "120px 120px 0 0",
      mt: "3rem",
     }}
    >
     <Grid item xs={12} md={6}>
      <Typography varient="h4" sx={{ color: "#10375C" }}>
       Get Free Quizzes
      </Typography>
     </Grid>
     <Grid
      item
      xs={12}
      md={6}
      sx={{
       background: `url(${resourceImg})`,
       backgroundSize: "cover",
       height: "200px",
       borderRadius: "0 120px 0 0",
      }}
     ></Grid>
    </Grid>
   </Container>
  </Box>
 );
};

export default HomeResource;
