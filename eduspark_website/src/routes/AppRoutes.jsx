import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import CourseHome from "../components/courses/CourseHome";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import SignIn from "../components/signin/Signin";
import ErrorPage from "../components/error/ErrorPage";
import EnrollmentPage from "../components/enrollment/EnrollmentPage";
import FAQ from "../components/faq/Faq"



const AppRoutes = () => {
  return (

      <BrowserRouter>
  
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/courses' element={<CourseHome />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/enroll/:courseName' element={<EnrollmentPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
        </>
   
      </BrowserRouter>
    
  );
};

export default AppRoutes;


