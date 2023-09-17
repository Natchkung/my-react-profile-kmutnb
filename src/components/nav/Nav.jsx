import React,{useState,useEffect} from 'react'
import './nav.css';
import {links} from "../constants";
// import { NavLink } from 'react-router-dom';


const Nav = () => {
    // must be a capitalized name in order for react to treat it as a component
  const [activeNav, setActiveNav] = useState('#home')


  // const sec = document.querySelectorAll("section")

// function activeMenu(){
//     let len = sec.length;
//     while(--len && window.scrollY + 97 < sec[len].offsetTop){}
//       li.forEach(ltx => ltx.classList.remove("active"));
//       li[len].classList.add("active");
// }
// activeMenu();

  return (
    // <nav>
    //     <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>   
    //     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a> 
    //     <a href="#videome" onClick={() => setActiveNav('#videome')} className={activeNav === '#videome' ? 'active' : ''}><AiOutlineVideoCamera/></a>     
    //     <a href="#article" onClick={() => setActiveNav('#article')} className={activeNav === '#article' ? 'active' : ''}><MdOutlineArticle/></a>
    //     <a href="#webtool" onClick={() => setActiveNav('#webtool')} className={activeNav === '#webtool' ? 'active' : ''}><VscTools/></a>      
    //     <a href="#credit" onClick={() => setActiveNav('#credit')} className={activeNav === '#credit' ? 'active' : ''}><AiOutlineCreditCard/></a>
    // </nav>
    <nav>
      {links.map((link) => (
          <a href={link.hash} onClick={() => setActiveNav(link.hash)} className={activeNav === link.hash ? 'active' : ''}>{link.icons}</a>
      ))}


    </nav>
  )
}

export default Nav