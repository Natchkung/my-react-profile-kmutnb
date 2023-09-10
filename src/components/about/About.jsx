import React from 'react'
import './about.css'
import Carousel from "./Carousel";
import { countries } from "./Data";

const About = () => {
  return (
    <section id="about">
      <div className="container_about">
        <div className="container_photo_me">
        <div className="content_photo_me">
            <Carousel images={countries} />
          </div>
        </div>
        <div className="detail_me">
          
        </div>
      </div>
    </section>
  )
}

export default About