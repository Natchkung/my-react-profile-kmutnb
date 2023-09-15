import {useEffect,React} from 'react'
import './about.css'
import Carousel from "./Carousel";
import { countries } from "./Data";
import VanillaTilt from 'vanilla-tilt';
import { motion } from "framer-motion";
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

	useEffect(()=>{
		Aos.init();
	  }, [])

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
        <div className="container_photo_me" data-aos="flip-left" data-aos-duration="3000">
		<div className="content_photo_me">
        <Carousel images={countries} />
		</div>
        </div>
        <div className="detail_me">
        <h5 className='mt-4 text-center font-medium text-slate-500' data-aos="fade-right" data-aos-duration="1000">INTRODUCTION</h5>
            <h1 className='text-center' data-aos="fade-left" data-aos-duration="1000">ABOUT ME</h1>
			<div className="main-detail_me">
			<div className="mt-4 text-center font-medium text-slate-500">
			<h5 data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum vel obcaecati possimus voluptatem quos commodi incidunt, exercitationem delectus iusto eligendi quasi quae, suscipit dignissimos ducimus soluta dolorum voluptatibus natus. Laborum beatae ullam iste deleniti ducimus delectus voluptatem aliquam reiciendis blanditiis! Non perspiciatis amet quibusdam in atque inventore! Veritatis, et ullam!</h5>
			</div>
			<div className="secon-detail" >
			<div data-aos="fade-up">
						<h3 data-aos="fade-left" data-aos-duration="2000">ชื่อ-สกุล</h3>
						<p data-aos="fade-right" data-aos-duration="2000">นาย ณัฐชานน ทรัพย์มีชัย</p>
					</div>
					<div>
						<h3 data-aos="fade-left" data-aos-duration="2000">ชื่อเล่น</h3>
						<p data-aos="fade-right" data-aos-duration="2000">ณัฐ</p>
					</div>
					<div>
						<h3 data-aos="fade-left" data-aos-duration="2000">รหัสนักศึกษา</h3>
						<p data-aos="fade-right" data-aos-duration="2000">6604062636151</p>
					</div>
					<div>
						<h3 data-aos="fade-left" data-aos-duration="2000">กำลังศึกษาอยู่ที่</h3>
						<p data-aos="fade-right" data-aos-duration="2000">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (มจพ.)</p>
					</div>
					<div>
						<h3 data-aos="fade-left" data-aos-duration="2000">ที่อยู่ปัจจุบัน</h3>
						<p data-aos="fade-right" data-aos-duration="2000">33/2 ถนนเทศบาล 8 ตำบล สระแก้ว อำเภอ เมืองสระแก้ว จังหวัดสระแก้ว รหัสไปรษณีย์ 27000</p>
					</div>
					<div>
						<h3 data-aos="fade-left" data-aos-duration="2000">จบการศึกษามัธยมปลายจาก</h3>
						<p data-aos="fade-right" data-aos-duration="2000">โรงเรียนสระแก้ว</p>
					</div>
					<div>
						<h3 data-aos="fade-left" data-aos-duration="2000">เกรดเฉลี่ยมัธยมปลาย</h3>
						<p data-aos="fade-right" data-aos-duration="2000">3.98</p>
					</div>
					<div>
						<h3 data-aos="fade-left" data-aos-duration="2000">วัน/เดือน/ปี ที่เกิด</h3>
						<p data-aos="fade-right" data-aos-duration="2000">20 มีนาคม พ.ศ.2548</p>
						<p data-aos="fade-left" data-aos-duration="2000">(<b>อายุ</b> 18 ปี)</p>
					</div>
					<div>
						<h3 data-aos="fade-left" data-aos-duration="2000">หมู่เลือด</h3>
						<p data-aos="fade-right" data-aos-duration="2000">B (บี)</p>
					</div>
					<div>
						<h3 data-aos="fade-left" data-aos-duration="2000">สีที่ชอบ</h3>
						<ul>
							<li data-aos="fade-right" data-aos-duration="2000">ฟ้า/น้ำเงิน</li>
							<li data-aos="fade-left" data-aos-duration="2000">เขียว</li>
						</ul>
					</div>
					<div>
						<h3 data-aos="fade-left" data-aos-duration="2000">งานอดิเรก</h3>
						<ul>
							<li data-aos="fade-right" data-aos-duration="2000">ดู YouTube</li>
							<li data-aos="fade-left" data-aos-duration="2000">เล่นเกม</li>
							<li data-aos="fade-right" data-aos-duration="2000">ศึกษา เขียนเว็บไซต์</li>
							<li data-aos="fade-left" data-aos-duration="2000">ศึกษา เขียนโปรแกรม</li>
						</ul>
					</div>
					<div>
						<h3 data-aos="fade-left">เป้าหมายในอนาคต</h3>
						<p data-aos="fade-right">Full Stack Developer และการเขียนโปรแกรมแขนงอื่น ๆ</p>
					</div>
			</div>
			</div>
        </div>
      </div>
    </section>
  )
}

export default About