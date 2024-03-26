import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import CourseHome from "../components/courses/CourseHome";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import SignUp from "../components/signup/SignUp";
import ErrorPage from "../components/error/ErrorPage";


const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/courses' element={<CourseHome />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
