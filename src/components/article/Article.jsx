import React,{useEffect}from 'react'
import './article.css';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
// import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { SectionWrapper } from '../hoc';
import { articles,hackingwebsite } from '../constants';
import Aos from 'aos';
import 'aos/dist/aos.css';


// Aos.init(
//   {
//   }
// );

const ArticleCard = ({articles}) => (
  <VerticalTimelineElement 
  contentStyle={{background: 'rgba(15, 116, 189, 0.4)', color: '#fff', borderRadius: '13px'}}
  contentArrowStyle={{borderRight: '7px solid #4db5ff'}}
  date={articles.title}
  iconStyle={{background: articles.iconBg }}
  icon={<div className='flex justify-center items-center w-full h-full'>
    <img src= {articles.icon}
    alt= {articles.company_name}
    className='w-[60%] h-[60%] object-contain'
    />
  </div>}
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{articles.title}</h3>
      {articles.imgonoff &&
        <img className="mt-2" src={articles.image} alt={articles.title} />
      }
    </div>
    <ul className='mt-5 list-disc ml-5 spac-y-2'>
      {articles.points.map((point, index) => (
        <li key={`article-point-${index}`}
        className='text-white-100 text-[17.5px]
        pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
    <div className='text-secondary text-[16px] font-semibold ' style={{margin:0,}}>ขอบคุณรูปภาพจาก</div>
    <a href={articles.credit}>{articles.credit}</a>
  </VerticalTimelineElement>
)


const Article = () => {
  useEffect(()=>{
    Aos.init();
  }, [])

  return (
    <section id="article">
        <h5 className='mt-4 text-start font-medium text-sky-500' data-aos="fade-up" data-aos-duration="1500">COMPUTER SCIENCE ARTICLES</h5>
          <h1 className='text-[3rem]' data-aos="fade-down" data-aos-duration="1500">ARTICLES</h1>

      <div className="mt-20 flex flex-col">
      <p className='text-center mb-6 text-[2.2rem]'>{hackingwebsite.title1}</p>
      <p className="mb-6 text-[1.3rem] text-center w-full h-full " data-aos="fade-up" data-aos-duration="1000" style={{background: 'rgba(15, 116, 189, 0.4)',borderRadius: '13px',padding:'20px'}}>{hackingwebsite.content}</p>
        <p className='text-center mb-6 text-[2.2rem]'>{hackingwebsite.title2}</p>
        <VerticalTimeline>
          {articles.map((articles, index) => (
            <ArticleCard key={index} articles={articles} />
          ))}
        </VerticalTimeline>
      </div>

    </section>
  )
}

export default SectionWrapper(Article, "work")