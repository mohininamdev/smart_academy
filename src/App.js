import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Course from "./components/Course";
import ExploreCourse from "./components/ExploreCourse";
import Header from "./components/Header";
import "./index.css";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
// import Subscribe from "./components/Subscribe";
// import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Header/>      
      {/* <Home/>
      <About/>
      <Services/>
      <Course/>
      <Testimonials/>
      <ExploreCourse/>
      <Subscribe/>
      <ContactUs/> */}
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About />} />
         <Route path="/course" element={<Course />} />
         <Route path="/explorecourse" element={<ExploreCourse />} />
      </Routes>  
    </div>
  )
}

export default App;

