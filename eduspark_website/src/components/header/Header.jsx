import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className="flexSB">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/signup'>SignUp</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
