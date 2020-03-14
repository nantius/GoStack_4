import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div id="nav">
        <h1 id="nav-logo">facebook.</h1>
        <div id="profile_container">
          <a id="nav-text" href="#"><h3 >Meu perfil</h3></a>
          <FaUserCircle size={20} id="icon" color="white"/>
        </div>
      </div>
    </>
  )
};

export default Navbar;
