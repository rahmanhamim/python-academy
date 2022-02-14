import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoginFrom from "../../Home/LoginForm/LoginFrom";
import Navigation from "../../Shared/Navigation/Navigation";
import CourseDetailsHero from "../CourseDetailsHero/CourseDetailsHero";

const CourseDetailsMain = () => {
 const { id } = useParams();
 const [courseData, setCourseData] = useState({});

 useEffect(() => {
  fetch("/courses.json")
   .then((res) => res.json())
   .then((courses) => {
    const course = courses.find((course) => course.id === id);
    setCourseData(course);
   });
 }, [id]);
 // ----------------------------------
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 // -------------------------------------

 const useStyle = makeStyles({
  courseContainer: {
   background: "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
   minHeight: "100vh",
  },
 });

 const { courseContainer } = useStyle();

 return (
  <Box component="div" className={courseContainer}>
   <Navigation handleOpen={handleOpen} />
   <CourseDetailsHero courseData={courseData} />

   <LoginFrom open={open} handleClose={handleClose}></LoginFrom>
  </Box>
 );
};

export default CourseDetailsMain;
