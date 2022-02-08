import { makeStyles } from "@mui/styles";
import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import bgImg from "../../../img/banner-img.png";
import { Box, Button, Container, Typography } from "@mui/material";

const Banner = () => {
 const useStyle = makeStyles({
  bannerContainer: {
   background: `url(${bgImg})`,
   minHeight: "85vh",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   maxWidth: "100%",
  },
  bannerTextContainer: {
   color: "#fff",
   minHeight: "60vh",
   display: "flex",
   justifyContent: "center",
   flexDirection: "column",
  },
  bannerTitle: {
   fontSize: "2.4rem",
   fontWeight: "bold",
  },
 });

 const { bannerContainer, bannerTextContainer, bannerTitle } = useStyle();

 return (
  <div className={bannerContainer}>
   <Navigation />
   <Container>
    <Box className={bannerTextContainer}>
     <Typography className={bannerTitle}>
      Every sufficiently advanced LISP <br /> application will eventually <br />
      reimplement Python.
     </Typography>
     <Typography sx={{ my: 4, fontSize: "1.2rem" }}>
      With a decade of insights and expertise, we're decided to <br /> reimagine
      co-working space.
     </Typography>
     <Button
      sx={{
       bgcolor: "#FF4958",
       color: "#fff",
       maxWidth: "200px",
       padding: "1.2em 0",
       border: "1px solid #FF4958",
       borderRadius: "3px",
       fontFamily: "Manrope",
       "&:hover": {
        bgcolor: "#F9B233",
        border: "1px solid #F9B233",
       },
      }}
     >
      Start Learning
     </Button>
    </Box>
   </Container>
  </div>
 );
};

export default Banner;
