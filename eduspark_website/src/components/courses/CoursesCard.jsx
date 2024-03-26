import React from "react";
import "./courses.css";
import { coursesCard } from "../../data";

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((course) => (
            <div className='items' key={course.id}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={course.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{course.coursesName}</h1>
                  <div className='price'>
                    <h3>
                      {course.priceAll} / {course.pricePer}
                    </h3>
                  </div>
                </div>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
