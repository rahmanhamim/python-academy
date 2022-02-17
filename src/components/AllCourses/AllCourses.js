import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import sectionBgImg from "../../img/section-banner.png";
import Footer from "../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import CourseCards from "../Shared/CourseCards/CourseCards";

const AllCourses = () => {
 const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "90vh",
  margin: "0 auto",
 };
 const searchInputStyle = {
  fontSize: "1.8rem",
  padding: ".2em .5em",
  borderRadius: "5px",
  border: "none",
  width: "70%",
 };
 const submitBtnStyle = {
  background: "#FF4958 ",
  color: "#fff",
  border: "none",
  fontSize: "1.2rem",
  padding: ".2em .5em",
  margin: "10px 5px",
  borderRadius: "5px",
  cursor: "pointer",
  width: "20%",
 };

 const { register, handleSubmit, reset } = useForm();
 const onSubmit = (data) => {
  console.log(data);
  reset();
 };

 const [courses, setCourses] = useState([]);

 useEffect(() => {
  fetch("/courses.json")
   .then((res) => res.json())
   .then((data) => setCourses(data));
 }, []);

 return (
  <>
   <Box
    sx={{
     background: "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
    }}
   >
    <Navigation />
   </Box>
   <Box
    sx={{
     minHeight: "350px",
     background: `url(${sectionBgImg})`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
    }}
   >
    <Box
     sx={{
      height: "350px",
      color: "#fff",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
     }}
    >
     <form onSubmit={handleSubmit(onSubmit)} style={formContainerStyle}>
      <input
       style={searchInputStyle}
       {...register("searchText")}
       placeholder="Search Course"
      />
      <input style={submitBtnStyle} type="submit" value="Search" />
     </form>
    </Box>
   </Box>

   {/* courses data */}
   <Box sx={{ minHeight: "50vh", pt: "6em" }}>
    <Container>
     <Grid container xs={12}>
      {courses?.map((course) => (
       <CourseCards course={course}></CourseCards>
      ))}
     </Grid>
    </Container>
   </Box>
   <Footer></Footer>
  </>
 );
};

export default AllCourses;
