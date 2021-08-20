import React from 'react'
import logo from './images/logo.svg'
import { FaBars, FaHome } from 'react-icons/fa'
import {useGlobalContext} from './context'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {openSidebar, openSubmenu,closeSubmenu}= useGlobalContext();

  const displaySubmenu=(e)=>{
    const page= e.target.textContent;
    const tempBtn= e.target.getBoundingClientRect();
    const center= (tempBtn.left +tempBtn.right)/2
    const bottom =tempBtn-3;
    openSubmenu(page, {center, bottom});
  }
  const handleSubmenu =(e)=>{
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  }
  return <nav className='nav' onMouseOver={handleSubmenu}>
    <div className='nav-center'>
    <div className='nav-header'>
    <Link to='/'><button className='btn toggle-btn2'><FaHome/></button></Link> 
     <button  className='btn toggle-btn toggle-btn2'onClick={openSidebar}><FaBars/></button>    
 </div>
      <ul className='nav-links'>
       <Link to='/About'> <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            About
          </button>
          </li></Link>
         <Link to='/Projects'> <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            Projects
          </button>
          </li></Link>
         <Link to='/Contact'> <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            Contact
          </button>
        </li></Link>

      </ul>
     <Link to='/Contact'> <button className='btn signin-btn'>Get in Touch </button></Link>
    </div>
  </nav>
}

export default Navbar
