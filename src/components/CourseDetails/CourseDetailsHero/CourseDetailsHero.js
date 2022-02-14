import { Container, Typography } from "@mui/material";
import React from "react";

const CourseDetailsHero = ({ courseData }) => {
 return (
  <Container sx={{ color: "#fff", mt: 8, mb: 5 }}>
   <Typography
    variant="h3"
    sx={{
     maxWidth: "70%",
     fontWeight: "bold",
     fontSize: "2.8rem",
     lineHeight: "1.5",
    }}
   >
    {courseData.title}
   </Typography>
  </Container>
 );
};

export default CourseDetailsHero;
