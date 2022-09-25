import React, { useState } from 'react';
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () =>(
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#domains">Domains</a></p>
  <p><a href="#websites">Websites</a></p>
  <p><a href="#hosting">Hosting</a></p>
  <p><a href="#security">Security</a></p>
  <p><a href="#marketing">Marketing</a></p>
  <p><a href="#email">Email</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToogleMenu] = useState(false);

  return (
    <div className='laysux__navbar'>
      <div className='laysux__navbar-links'>
        <div className='laysux__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='laysux__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='laysux__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
      </div>
      <div className='laysux__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color="#000000" size={27} onClick={() => setToogleMenu(false)}/>
            : <RiMenu3Line color="#000000" size={27} onClick={() => setToogleMenu(true)}/>
          }
          {toggleMenu &&(
            <div className='laysux__navbar-menu_container scale-up-center'>
              <div className='laysux__navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar