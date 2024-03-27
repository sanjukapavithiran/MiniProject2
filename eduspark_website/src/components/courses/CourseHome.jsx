import React, { useState } from "react";
import CoursesCard from "./CoursesCard";
import "./courses.css";


const CourseHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Explore Courses</h1>
      {/* Dropdown for filtering */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label htmlFor="categoryFilter">Filter by Category: </label>
        <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All Categories</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Design">Design</option>
          <option value="Web Development">Web Development</option>
        </select>
      </div>
      {/* Render course cards */}
      <CoursesCard selectedCategory={selectedCategory} />
    </>
  );
};

export default CourseHome;
