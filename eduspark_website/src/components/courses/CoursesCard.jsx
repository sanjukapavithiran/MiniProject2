import React from "react";
import { coursesCard } from "../../data";
import "./courses.css";


const CoursesCard = () => {
 return (
   <section className='coursesCard'>
     <div className='container grid2'>
       {coursesCard.map((course) => (
         <div className='items' key={course.id}>
           <div className='content flex'>
             <div className='img'>
               <img src={course.cover} alt='' />
             </div>
             <div className='cname'>
               <h3>{course.coursesName} </h3>
             </div>
             <div className='price'>
               <h3>{course.priceAll} / {course.pricePer}</h3>
             </div>
             <div className='enroll'>
               <button className='outline-btn'>ENROLL NOW!</button>
             </div>
           </div>
         </div>
       ))}
     </div>
   </section>
 );
};


export default CoursesCard;


