import React from 'react'
import './footer.css';
import logo from "../../logo.svg";
import {AiOutlineHome,AiOutlineUser,AiOutlineVideoCamera,AiOutlineCreditCard} from 'react-icons/ai';
import {MdOutlineArticle} from 'react-icons/md';
import {VscTools} from 'react-icons/vsc';
import {CiFacebook} from 'react-icons/ci';
import {AiOutlineInstagram,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai';
import {FaDiscord} from 'react-icons/fa';

const Footer = () => {
  const link = {
    facebook: 'https://www.facebook.com/Natx0082/',
    instagram: 'https://www.instagram.com/n_nnat_48/',
    github: 'https://github.com/Natchkung',
    discord: 'https://discordapp.com/users/475327498909908994',
    email: 'mailto:s6604062636151@email.kmutnb.ac.th',
  };

  return (
    <div className='footer'>
      <div className="contact">
        <img src={logo} alt="logo" className='w-[100px] h-[100px]'/>
        <div className="contact-main1 text-center">
          <div className="fllow-me mb-3">Contact</div>
          <div className="contact-secon1">
              <a href="tel:0902974175">+66 902974175</a>
              <a href="mailto:s6604062636151@email.kmutnb.ac.th">s6604062636151@email.kmutnb.ac.th</a>
          </div>
        </div>
        <div className="contact-main2">
          <div className="fllow-me text-center mb-3">Fllow Us</div>
          <div className="contact-secon2">
              <a href= {link.facebook} ><CiFacebook/></a>
              <a href={link.instagram}><AiOutlineInstagram/></a>
              <a href={link.github}><AiOutlineGithub/></a>
              <a href={link.discord}><FaDiscord/></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-5 text-bold'>Copyright © 2023 Nutchanon Supmeechai. All Rights Reserved</p>
      
      
    </div>
  )
}

export default Footer