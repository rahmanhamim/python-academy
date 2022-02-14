import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import CourseDetailsMain from "./components/CourseDetails/CourseDetailsMain/CourseDetailsMain";

function App() {
 return (
  <>
   <AuthProvider>
    <Routes>
     <Route path="/" element={<Home />} />
     {/* <Route path="about" element={<About />} /> */}
     <Route path="course/:id" element={<CourseDetailsMain />} />
    </Routes>
   </AuthProvider>
  </>
 );
}

export default App;
