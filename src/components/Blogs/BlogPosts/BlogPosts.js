import {
 Button,
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Grid,
 Typography,
} from "@mui/material";
import React from "react";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";

const BlogPosts = ({ post, loading }) => {
 return (
  <Grid
   item
   xs={12}
   sm={6}
   md={4}
   sx={{ display: "flex", justifyContent: "center" }}
  >
   <Card
    sx={{
     maxWidth: 375,
     bgcolor: "rgb(236,236,252)",
     boxShadow: "none",
    }}
   >
    <CardMedia
     component="img"
     height="240"
     image={post?.img}
     alt="green iguana"
    />
    <CardContent sx={{ pb: 0, px: 0 }}>
     <Typography
      gutterBottom
      variant="p"
      component="div"
      sx={{ display: "flex", color: "#515B61" }}
     >
      <DateRangeRoundedIcon />{" "}
      <Typography variant="span" sx={{ ml: 1 }}>
       10/10/20
      </Typography>
     </Typography>
     <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{ color: "#10375C" }}
     >
      Lizard
     </Typography>
     <Typography
      variant="body2"
      color="text.secondary"
      sx={{ color: "#515B61" }}
     >
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
     </Typography>
    </CardContent>
    <CardActions sx={{ m: 0, p: 0 }}>
     <Button sx={{ color: "#10375C", border: "2px solid #10375C", my: 2 }}>
      Learn More
     </Button>
    </CardActions>
   </Card>
  </Grid>
 );
};

export default BlogPosts;
