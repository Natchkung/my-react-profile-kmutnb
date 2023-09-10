import * as React from "react";
import './header.css';
import Bg_particle from './bg_particle/Bg_particle';
import {CiFacebook} from 'react-icons/ci';
import {AiOutlineInstagram,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai';
import {FaDiscord} from 'react-icons/fa';
import Scramblertext from './Scramblertext.js'
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import EarthCanvas from './canvas/Earth';

const Header = () => {

  const photo = {
    logo_cs: 'https://media.discordapp.net/attachments/1091963899827462225/1150142785081593876/world.png?width=447&height=447'
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
        <span id="space-content">|</span><span id='type-writer'><Scramblertext/></span></div>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus atque enim cupiditate porro laudantium ipsum perspiciatis expedita nostrum. Quae eveniet aperiam, ducimus repellendus ad distinctio assumenda corrupti magnam est accusamus beatae optio alias unde quas possimus fugiat odit in id sequi non reiciendis expedita libero! Necessitatibus numquam impedit ex sequi?</h5>
        </div>
        <div className="logo-content">
        <EarthCanvas />
        </div>
      </div>
       </div>
       <div className='w-full flex justify-start items-center flex-col text-xs scroll'>
          Scroll to explore
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl  border-solid border-2 border-sky-500  flex justify-center items-start p-2 mt-4 shadow-lg shadow-cyan-500/50 ...'>
            <motion.dev
              animate={{
                y: [ 0, 24 ,0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-sky-500 mb-1"
            />
            </div>
          </a>
        </div>
    </header>
  )
}

export default Header