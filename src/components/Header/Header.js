import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [activeMenu, setActiveMenu] = useState(true);

  const activeMenuHandler = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <Container>
      <header>
        <div className='logo'>
          <div className='logo-icon'>
            <div className='sircle'>T</div>
          </div>
          <h4 className='logo-text'>Trafalgar</h4>
        </div>
        <ul className={activeMenu ? "menu" : "menu resp-menu-active"}>
          <li onClick={() => setActiveMenu(true)}>
            <Link to='/'> Home </Link>
          </li>
          <li onClick={() => setActiveMenu(true)}>
            <Link to='/services'> Services </Link>
          </li>
          <li onClick={() => setActiveMenu(true)}>
            <Link to='/about'> About Us </Link>
          </li>
        </ul>
        <div className='burger-menu' onClick={activeMenuHandler}>
          <MenuIcon />
        </div>
      </header>
    </Container>
  );
}

export default Header;
