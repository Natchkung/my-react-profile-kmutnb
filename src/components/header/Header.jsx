import React from 'react'
import './header.css';
import { Typewriter } from 'react-simple-typewriter';
import {CiFacebook} from 'react-icons/ci';
import {AiOutlineInstagram,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai';
import {FaDiscord} from 'react-icons/fa';
import {MovingComponent} from 'react-moving-text'

const Header = () => {
  const img = {
    photoheader: 'https://raw.githubusercontent.com/judygab/web-dev-projects/6bf5a12767154a7383288450bb441d04f7c0dce9/personal-portfolio/src/assets/img/header-img.svg',
  };
  return (
    <header>
        <div className="header__container">
            <div className="hello-header">
            <span className='hello-header-hello'><MovingComponent
             type="fadeInFromLeft"
             duration="1000ms"
             delay="100ms"
             direction="normal"
             timing="ease"
             iteration="1"
             fillMode="none">
              Hello I'm
            </MovingComponent></span>
            <h1>
            <MovingComponent
             type="fadeInFromRight"
             duration="1000ms"
             delay="100ms"
             direction="normal"
             timing="ease"
             iteration="1"
             fillMode="none">Nutchanon Supmeechai</MovingComponent></h1>
             <MovingComponent
             type="fadeInFromBottom"
             duration="1000ms"
             delay="100ms"
             direction="normal"
             timing="ease"
             iteration="1"
             fillMode="none">
            <span className='header-typewriter'>Student From</span><span className="typewriter"> <Typewriter
            words={['KMUTNB', "King mongkut's university of technology north bangkok"]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span></MovingComponent>
          <p>
          <MovingComponent
             type="fadeInFromTop"
             duration="1000ms"
             delay="100ms"
             direction="normal"
             timing="ease"
             iteration="1"
             fillMode="none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo nostrum inventore, saepe quae vero praesentium quod consectetur dolorum temporibus necessitatibus ipsa corrupti delectus quidem nihil laudantium mollitia quisquam, maxime a ea voluptatem quia cum autem. Unde odit, enim officia ullam reiciendis cumque eveniet accusamus vitae! Excepturi expedita harum eos.
             </MovingComponent></p>
          <div className="contact-header">
              <a href=""><CiFacebook/></a>
              <a href=""><AiOutlineInstagram/></a>
              <a href=""><AiOutlineGithub/></a>
              <a href=""><FaDiscord/></a>
              <a href=""><AiOutlineMail/></a>
          </div>
            </div>
            <div className="photo-header">
              <div className="container-photo">
                <img src={img.photoheader} alt="photo-header" />
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header