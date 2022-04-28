import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

function Header() {
  return (
    <Container>
      <header>
        <div className='logo'>
          <div className='logo-icon'>
            <div className='sircle'>T</div>
          </div>
          <h4 className='logo-text'>Trafalgar</h4>
        </div>
        <ul className='menu'>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/services'> Services </Link>
          </li>
          <li>
            <Link to='/about'> About Us </Link>
          </li>
          <li>
            <Link to='/contact'> Contact Us </Link>
          </li>
        </ul>
      </header>
    </Container>
  );
}

export default Header;
