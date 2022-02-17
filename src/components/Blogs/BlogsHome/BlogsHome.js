import {
 Box,
 Button,
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Container,
 Grid,
 Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import blogBannerImg from "../../../img/blogs-banner.png";
import Footer from "../../Shared/Footer/Footer";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import BlogPosts from "../BlogPosts/BlogPosts";

const BlogsHome = () => {
 const [posts, setPosts] = useState([]);
 const [loading, setLoading] = useState(false);
 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage] = useState(10);

 useEffect(() => {
  setLoading(true);
  fetch("/blogs.json")
   .then((res) => res.json())
   .then((data) => {
    setPosts(data);
    setLoading(false);
   });
 }, []);

 console.log(posts);

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
     background: `url(${blogBannerImg})`,
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
     <Typography sx={{ fontWeight: "bold" }}>Python Academy</Typography>
     <Typography variant="h3" sx={{ my: 1, fontWeight: "bold" }}>
      Blogs
     </Typography>
    </Box>
   </Box>
   <Box sx={{ minHeight: "50vh", bgcolor: "rgba(71, 68, 228, 0.1)", py: 8 }}>
    {/* posts container */}
    <Container>
     <Grid container spacing={5}>
      {posts?.map((post) => (
       <BlogPosts key={post.id} post={post} loading={loading}></BlogPosts>
      ))}
     </Grid>
    </Container>
    {/* posts container end */}
   </Box>
   <Footer></Footer>
  </>
 );
};

export default BlogsHome;
