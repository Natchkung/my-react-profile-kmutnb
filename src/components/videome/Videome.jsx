import React,{useEffect} from 'react';
import './videome.css';
import { motion } from "framer-motion";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Videome = () => {

  useEffect(()=>{
		Aos.init();
	  }, [])


  return (
    <section id="videome">
      <h1 className='text-center' data-aos="fade-up" data-aos-duration="1500">My Video</h1>
      <div className="video mt-4" data-aos="fade-down" data-aos-duration="3000">
      <iframe className="react-player rounded-2xl" src="https://www.youtube.com/embed/N9Rk3d4fCJ8?si=ZS01d6Jk4ijPZmxa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </section>
  )
}

export default Videome