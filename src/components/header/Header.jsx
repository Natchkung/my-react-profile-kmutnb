import {useEffect,React} from 'react'
import './header.css';
import {CiFacebook} from 'react-icons/ci';
import {AiOutlineInstagram,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai';
import {FaDiscord} from 'react-icons/fa';
import Scramblertext from './Scramblertext.js'
import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-scroll";

const Header = () => {

  const link = {
    facebook: 'https://www.facebook.com/Natx0082/',
    instagram: 'https://www.instagram.com/n_nnat_48/',
    github: 'https://github.com/Natchkung',
    discord: 'https://discordapp.com/users/475327498909908994',
    email: 'mailto:s6604062636151@email.kmutnb.ac.th',
  };

  const content_text = {
    content1: 'Hi, my name is Nutchanon Supmeechai',
    content2: 'STUDENT FORM',
    content3: "",
  }

  return (
    <header id="home">
      {/* <Bg_particle/> */}
       <div className="container_header">
        <div className="header_nav">
          <div className="icon_cs">
            <a href="#home" data-no-blobity><h1><b>CS</b><span className='text-white'> | KMUTNB</span></h1></a>
          </div>
          <div className="icon_all_social">
            <Tooltip title="Facebook">
              <a href= {link.facebook} ><CiFacebook/></a>
            </Tooltip>
            <Tooltip title="Instagram">
                <a href={link.instagram}><AiOutlineInstagram/></a>
            </Tooltip>
            <Tooltip title="GitHub">
              <a href={link.github}><AiOutlineGithub/></a>
            </Tooltip>
            <Tooltip title="Discord">
              <a href={link.discord}><FaDiscord/></a>
            </Tooltip>
            <Tooltip title="Email">
              <a href={link.email}><AiOutlineMail/></a>
            </Tooltip> 
          </div>
        </div>

      {/* ------------------------ content-header---------------------------------- */}
      <div className="content-header">
          <motion.div
          className="hello-content"
          initial={{
        x:-100,
        transition: {
          duration: 1
          }
      }}
          whileInView={{
        x:0,
        transition: {
          duration: 1
          }
      }}
        >
        <h1>{content_text.content1}</h1>
        <div className="content-animation">
        <span id="space-content">|</span><span id='type-writer'><Scramblertext/></span></div>
        <h5>I am studying in CS of Computer Science at King Mongkut's University of Technology North Bangkok <br></br>
        This project that I made is part of the Fundamentals of Computer Science and Pro fessional lssues.<br></br>
        Assigned by Prof. Dr. Natthakit Chituetrakul (NJR)</h5>
        </motion.div>
        <motion.div
          className="logo-content"
          initial={{
        x:150,
        transition: {
          duration: 1
          }
      }}
          whileInView={{
        x:0,
        transition: {
          duration: 2
          }
      }}
        >
        <EarthCanvas />
        </motion.div>
      </div>
       </div>
       <div className='w-full flex justify-start items-center flex-col text-xs scroll'>
          Scroll to explore
          <Link smooth to="about" data-no-blobity>
            <div className='w-[35px] h-[64px] rounded-3xl  border-solid border-2 border-sky-500  flex justify-center items-start p-2 mt-4 shadow-lg shadow-cyan-500/50 ...' >
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
          </Link>
        </div>
    </header>
  )
}

export default Header