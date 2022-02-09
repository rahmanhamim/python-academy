import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import featureImage from "../../../img/feature-image.png";

const HomeFeature = () => {
 const useStyle = makeStyles({
  featureTitle: {
   color: "#10375C",
   fontSize: "3rem",
   fontWeight: "600",
   lineHeight: "1.2em",
  },
  imgFeature: {
   display: "block",
   position: "relative",
   "&:before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(77, 57, 224, 0.4)",
    top: "0px",
    right: "0px",
    borderRadius: "10px",
   },
  },
  FeatureBtnContainer: {
   "& > *": {
    textAlign: "left",
    color: "#515B61",
    textTransform: "none",
    fontSize: "1rem",
    lineHeight: "1.2em",
    margin: ".3em 0",
   },
  },
 });

 const { featureTitle, imgFeature, FeatureBtnContainer } = useStyle();

 return (
  <Container sx={{ my: 8 }}>
   <Typography className={featureTitle}>
    We aim to serve all are to <br /> meet your needs
   </Typography>
   <Grid sx={{ display: "flex", alignItems: "center" }} container spacing={2}>
    <Grid item xs={12} md={6}>
     <Box className={FeatureBtnContainer}>
      <Button>Learner and Enthusiast in search of a new career.</Button>
      <Button>
       Students and Professionals from any field who want to learn to develop
       and manage digital technology.
      </Button>
      <Button>Entrepreneurs who are looking to carry out their ideas.</Button>
      <Button>
       Professionals without technical knowledge seeking to innovate their work
       areas.
      </Button>
      <Button>
       Students and Professionals from any field who want to learn to develop
       and manage digital technology.
      </Button>
      <Button>Entrepreneurs who are looking to carry out their ideas.</Button>
     </Box>
    </Grid>
    <Grid sx={{ ml: "auto" }} item xs={12} md={6}>
     <Box className={imgFeature}>
      <img
       style={{ width: "100%", display: "block", borderRadius: "10px" }}
       src={featureImage}
       alt=""
      />
     </Box>
    </Grid>
   </Grid>
  </Container>
 );
};

export default HomeFeature;
