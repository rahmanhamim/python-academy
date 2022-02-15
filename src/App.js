import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import CourseDetailsMain from "./components/CourseDetails/CourseDetailsMain/CourseDetailsMain";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
 return (
  <>
   <AuthProvider>
    <ScrollToTop>
     <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
      <Route path="course/:id" element={<CourseDetailsMain />} />
     </Routes>
    </ScrollToTop>
   </AuthProvider>
  </>
 );
}

export default App;
