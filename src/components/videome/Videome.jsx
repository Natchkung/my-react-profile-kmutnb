import React from 'react';
import './videome.css';
import { motion } from "framer-motion";

const Videome = () => {

  return (
    <section id="videome">
      <h1 className='text-center'>My Video</h1>
      <motion.div
          className="video mt-4"
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
      <iframe className="react-player rounded-2xl" src="https://www.youtube.com/embed/N9Rk3d4fCJ8?si=ZS01d6Jk4ijPZmxa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </motion.div>
    </section>
  )
}

export default Videome