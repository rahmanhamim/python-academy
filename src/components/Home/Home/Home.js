import React from "react";
import Banner from "../Banner/Banner";
import HomeCourses from "../HomeCourses/HomeCourses";
import HomeFeature from "../HomeFeature/HomeFeature";
import HomeResource from "../HomeResource/HomeResource";
import HomeReview from "../HomeReview/HomeReview";
import HomeTips from "../HomeTips/HomeTips";

const Home = () => {
 return (
  <>
   <Banner />
   <HomeFeature />
   <HomeCourses />
   <HomeResource />
   <HomeTips />
   <HomeReview />
  </>
 );
};

export default Home;
