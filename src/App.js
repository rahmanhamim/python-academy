import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
 return (
  <>
   <AuthProvider>
    <Routes>
     <Route path="/" element={<Home />} />
     {/* <Route path="about" element={<About />} /> */}
    </Routes>
   </AuthProvider>
  </>
 );
}

export default App;
