import React from "react"
import Particles from 'react-particles'
import { loadFull } from "tsparticles";
 
function Bg_particle() {
  const particlesInit = async (main) => {
    console.log(main);
 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
   
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                resize: true
              },
            },
            style:{
                position: 'absolute',
                height: '70vh',
            },
            particles: {
                maxWidth: '300',
              color: {
                value: "#f1f1f1"
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                value: 300,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 1,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              shape: {
                type: 'circle',
       
              },
              move:{
                direction:"left",
                enable:true,
                outMode:"bounce",
                random: false,
                speed:0.3,
                straight:false,
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5
                },
                value: 1,
              }
            }
          }}
      />  
  </div>
  );
}
 
export default Bg_particle;
