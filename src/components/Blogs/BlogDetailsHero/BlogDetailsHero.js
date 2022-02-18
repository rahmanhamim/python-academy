import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import blogHeroBanner from "../../../img/section-banner.png";

const BlogDetailsHero = ({ blogsData }) => {
 console.log(blogsData);
 const useStyle = makeStyles({
  containerStyle: {
   background: `url(${blogHeroBanner})`,
   minHeight: "350px",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   py: 5,
  },
 });

 const { containerStyle } = useStyle();
 // --------------------------

 return (
  <Box className={containerStyle}>
   <Container>
    <Box sx={{ color: "#fff" }}>
     <Typography>
      {blogsData.title} {blogsData.id}{" "}
     </Typography>
     <Typography>Home/Blogs</Typography>
    </Box>
   </Container>
  </Box>
 );
};

export default BlogDetailsHero;
