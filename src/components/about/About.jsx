import {useEffect,React} from 'react'
import './about.css'
import Carousel from "./Carousel";
import { countries } from "./Data";
import VanillaTilt from 'vanilla-tilt';

const About = () => {
  useEffect(() =>{
    VanillaTilt.init(document.querySelectorAll(".content_photo_me"),{
      max: 10,
      speed: 20,
      glare: true,
      'max-glare': 0.10
    })
  })

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