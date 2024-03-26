import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Heading from "../heading/Heading";
import "./home.css";

const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <div className='row'>
          <Heading title='Welcome To EduSpark !' subtitle='A Digital Education & Learning Portal'  />
          <p>EduSpark is a leading online education platform offering a wide range of courses for learners of all ages. With its user-friendly interface and diverse content, Eduspark enables individuals to learn at their own pace and convenience. From academic support to professional development, Eduspark provides expert instruction and interactive lessons, shaping the future of online learning and empowering users worldwide to achieve their educational goals. With a commitment to accessibility and quality, Eduspark ensures that learners have the tools they need to succeed in their educational journey.</p>
          <div className='button'>
            <Link to="/signup"> {/* Use Link to navigate to sign-up page */}
              <button className='primary-btn'>
              GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </Link>
            <Link to="/courses"> {/* Use Link to navigate to courses page */}
              <button>
              VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
