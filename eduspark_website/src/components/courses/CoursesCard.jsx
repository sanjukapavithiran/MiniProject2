import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { coursesCard } from "../../data"; // Import courses data
import "./courses.css"; // Import CSS styles

const CoursesCard = ({ selectedCategory }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const filteredCourses = selectedCategory === "All" ? coursesCard : coursesCard.filter(course => course.category === selectedCategory);

  const handleEnrollClick = (courseName) => {
    navigate(`/enroll/${courseName}`); // Navigate to the enrollment page with the course name as a parameter
  };

  return (
    <section className='coursesCard'>
      <div className='container grid2'>
        {filteredCourses.map((course) => (
          <div className='items' key={course.id}>
            <div className='content flex'>
              <div className='img'>
                <img src={course.cover} alt={course.coursesName} />
              </div>
              <div className='cname'>
                <h3>{course.coursesName}</h3>
              </div>
              <div className='price'>
                <h3>{course.priceAll} / {course.pricePer}</h3>
              </div>
              <div className='enroll'>
                <button className='outline-btn' onClick={() => handleEnrollClick(course.coursesName)}>ENROLL NOW!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesCard;
