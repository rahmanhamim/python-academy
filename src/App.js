import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";

function App() {
 return (
  <>
   <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="about" element={<About />} /> */}
   </Routes>
  </>
 );
}

export default App;
