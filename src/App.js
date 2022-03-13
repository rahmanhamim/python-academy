import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllCourses from "./components/AllCourses/AllCourses";
import BlogDetailsMain from "./components/Blogs/BlogDetailsMain/BlogDetailsMain";
import BlogsHome from "./components/Blogs/BlogsHome/BlogsHome";
import Checkout from "./components/Checkout/Checkout";
import CourseDetailsMain from "./components/CourseDetails/CourseDetailsMain/CourseDetailsMain";
import Home from "./components/Home/Home/Home";
import NewCart from "./components/NewCart/NewCart";
import Quiz from "./components/NewQuiz/Quiz";
import QuizHome from "./components/Quiz/QuizHome/QuizHome";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import CartProvider from "./contexts/CartProvider/CartProvider";
import NewCartProvider from "./contexts/NewCartProvider/NewCartProvider";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
 return (
  <>
   <AuthProvider>
    <NewCartProvider>
     <CartProvider>
      <ScrollToTop>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course/:id" element={<CourseDetailsMain />} />
        <Route path="blogs/:id" element={<BlogDetailsMain />} />
        <Route path="newcart" element={<NewCart />} />
        <Route path="checkout" element={<Checkout />} />
        {/* <Route path="quiz" element={<QuizHome />} /> */}
        <Route path="quiz" element={<Quiz />} />
        <Route path="blogs" element={<BlogsHome />} />
        <Route path="allcourses" element={<AllCourses />} />
       </Routes>
      </ScrollToTop>
     </CartProvider>
    </NewCartProvider>
   </AuthProvider>
  </>
 );
}

export default App;
