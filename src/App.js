import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import CourseDetailsMain from "./components/CourseDetails/CourseDetailsMain/CourseDetailsMain";
import ScrollToTop from "./hooks/ScrollToTop";
import Cart from "./components/Cart/Cart";
import CartProvider from "./contexts/CartProvider/CartProvider";
import QuizHome from "./components/Quiz/QuizHome/QuizHome";
import BlogsHome from "./components/Blogs/BlogsHome/BlogsHome";
import AllCourses from "./components/AllCourses/AllCourses";

function App() {
 return (
  <>
   <AuthProvider>
    <CartProvider>
     <ScrollToTop>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="course/:id" element={<CourseDetailsMain />} />
       <Route path="cart" element={<Cart />} />
       <Route path="quiz" element={<QuizHome />} />
       <Route path="blogs" element={<BlogsHome />} />
       <Route path="allcourses" element={<AllCourses />} />
      </Routes>
     </ScrollToTop>
    </CartProvider>
   </AuthProvider>
  </>
 );
}

export default App;
