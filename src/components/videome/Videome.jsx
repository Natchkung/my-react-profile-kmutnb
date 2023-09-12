import React from 'react';
import './videome.css';
import Myvideo from './video/myvideo.mp4';
import ReactPlayer from 'react-player';
import { motion } from "framer-motion";

const Videome = () => {

  return (
    <section id="videome">
      <h1>My Video</h1>
      <motion.div
          className="hello-content"
          initial={{
        y:100,
        transition: {
          duration: 0.5
          }
      }}
          whileInView={{
        y:0,
        transition: {
          duration: 1
          }
      }}
      >
        <ReactPlayer
        className='react-player'
      playing={true}
      controls
      width='700px'
      height='500px'
      url={Myvideo}
      />
      </motion.div>
    </section>
  )
}

export default Videome