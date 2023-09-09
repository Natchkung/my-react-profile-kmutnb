import React, { useRef, useState, useEffect } from 'react';
import './header.css';
import Bg_particle from './bg_particle/Bg_particle';
import {CiFacebook} from 'react-icons/ci';
import {AiOutlineInstagram,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai';
import {FaDiscord} from 'react-icons/fa';
import Scramblertext from './Scramblertext.js'

const Header = () => {

  const photo = {
    logo_cs: 'https://media.discordapp.net/attachments/1091963899827462225/1150083930784006204/logo-cs.png'
  };

  const link = {
    facebook: 'https://www.facebook.com/Natx0082/',
  };

  const content_text = {
    content1: 'Hi, my name is Nutchanon Supmeechai',
    content2: 'STUDENT FORM',
    content3: '',
  }

  return (
    <header>
      <Bg_particle/>
       <div className="container_header">
        <div className="header_nav">
          <div className="icon_cs">
            <h1><b>CS</b> | KMUTNB</h1>
          </div>
          <div className="icon_all_social">
          <a href= {link.facebook} ><CiFacebook/></a>
              <a href=""><AiOutlineInstagram/></a>
              <a href=""><AiOutlineGithub/></a>
              <a href=""><FaDiscord/></a>
              <a href=""><AiOutlineMail/></a>
          </div>
        </div>

      {/* ------------------------ content-header---------------------------------- */}
      <div className="content-header">
        <div className="hello-content">
        <h1>{content_text.content1}</h1>
        <div className="content-animation">
        <span id="space-content">|</span><span id='type-writer'><Scramblertext/></span>
        </div>
        </div>
        <div className="logo-content">

        </div>
      </div>
       </div>
    </header>
  )
}

export default Header