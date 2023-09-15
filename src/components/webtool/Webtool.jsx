import React,{useEffect} from "react";
import './webtool.css';
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Webtool() {
  useEffect(()=>{
		Aos.init();
	  }, [])

  return (
    <section id="webtool">
        <h5 className='mt-[-200px] text-center font-medium text-slate-500' data-aos="fade-up" data-aos-duration="3000">DEVELOPMENT TOOLS</h5>
            <h1 className='text-center mb-8' data-aos="fade-down" data-aos-duration="3000">WEBSITE DEVELOPMENT TOOLS</h1>
        <div className="tech">
        <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <div className="relative w-full h-full" data-aos="fade-right" data-aos-duration="3000"><BallCanvas icon={technology.icon}/></div>
          <p className="text-center" data-aos="fade-left" data-aos-duration="3000">{technology.name}</p>
        </div>
      ))}
    </div>
        </div>
    </section>
  );
};


export default SectionWrapper(Webtool, "");