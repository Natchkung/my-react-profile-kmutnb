import React from "react";
import './webtool.css';
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

function Webtool() {
  return (
    <section id="webtool">
        <h5 className='mt-[-200px] text-center font-medium text-slate-500'>DEVELOPMENT TOOLS</h5>
            <h1 className='text-center mb-8'>WEBSITE DEVELOPMENT TOOLS</h1>
        <div className="tech">
        <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="text-center">{technology.name}</p>
        </div>
      ))}
    </div>
        </div>
    </section>
  );
};


export default SectionWrapper(Webtool, "");