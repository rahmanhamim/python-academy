import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import CourseDetailsMain from "./components/CourseDetails/CourseDetailsMain/CourseDetailsMain";
import ScrollToTop from "./hooks/ScrollToTop";
import Cart from "./components/Cart/Cart";

function App() {
 return (
  <>
   <AuthProvider>
    <ScrollToTop>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="course/:id" element={<CourseDetailsMain />} />
      <Route path="cart" element={<Cart />} />
     </Routes>
    </ScrollToTop>
   </AuthProvider>
  </>
 );
}

export default App;
