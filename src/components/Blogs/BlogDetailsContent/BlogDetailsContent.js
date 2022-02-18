import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import blogHeroBanner from "../../../img/section-banner.png";
import blogHeroImage from "../../../img/blogsHeroImg.png";
import Footer from "../../Shared/Footer/Footer";
import BlogsDetailsContentMain from "../BlogsDetailsContentMain/BlogsDetailsContentMain";

const BlogDetailsHero = ({ blogsData }) => {
 console.log(blogsData);
 const useStyle = makeStyles({
  containerStyle: {
   background: `url(${blogHeroBanner})`,
   minHeight: "450px",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   py: 5,
  },
 });

 const { containerStyle } = useStyle();
 // --------------------------

 return (
  <>
   <Box className={containerStyle}>
    <Container>
     <Box sx={{ color: "#fff", pt: "3em" }}>
      <Typography>Home/Blogs</Typography>
      <Typography variant="h4" sx={{ width: "450px", maxWidth: "95vw", pt: 1 }}>
       {blogsData.title}
      </Typography>
     </Box>
    </Container>
   </Box>
   <Container sx={{ mb: 10, color: "#515B61", fontFamily: "Lato" }}>
    <Grid container spacing={4} sx={{ mt: { xs: "-10em", md: "-15em" } }}>
     {/* blog main section
     --------------------------------------- */}
     <BlogsDetailsContentMain blogsData={blogsData}></BlogsDetailsContentMain>

     {/* blogs side section 
     ---------------------------------------- */}
     <Grid item md={4}>
      <img src={blogHeroImage} style={{ maxWidth: "100%" }} alt="" />
     </Grid>
    </Grid>
   </Container>
   <Footer></Footer>
  </>
 );
};

export default BlogDetailsHero;
