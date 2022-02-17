import { Box } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import QuizQuestions from "../QuizQuestions.js/QuizQuestions";

const QuizHome = () => {
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
    sx={{ background: "rgba(71, 68, 228, 0.1)", minHeight: "80vh", pt: 10 }}
   >
    <QuizQuestions />
   </Box>
   <Footer />
  </>
 );
};

export default QuizHome;
