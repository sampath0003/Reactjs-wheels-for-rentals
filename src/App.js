
import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignupPopup from "./routes/SignupPopup";
import ScrollToTop from "./components/ScrollToTop";


export default function App(){
  return(
    
    <div className="App">
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/SignUp" element={<SignupPopup/>} />
        
      </Routes>
      <ScrollToTop/>
    </div>
  );
} 