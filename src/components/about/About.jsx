import {useEffect,React} from 'react'
import './about.css'
import Carousel from "./Carousel";
import { countries } from "./Data";
import VanillaTilt from 'vanilla-tilt';
import { motion } from "framer-motion";

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
		<motion.div
      className="content_photo_me"
      initial={{
		x:-100,
		transition: {
			duration: 1
		  }
	}}
      whileInView={{
		x:0,
		transition: {
			duration: 1
		  }
	}}
    >
        <Carousel images={countries} />
		</motion.div>
        </div>
        <div className="detail_me">
        <h5 className='mt-4 text-center font-medium text-slate-500'>INTRODUCTION</h5>
            <h1 className='text-center'>ABOUT ME</h1>
			<div className="main-detail_me">
			<motion.div
			className="mt-4 text-center font-medium text-slate-500"
			initial={{
				x:-100,
				transition: {
					duration: 1
				}
			}}
			whileInView={{
				x:0,
				transition: {
					duration: 1
				}
			}}
			>
			<h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum vel obcaecati possimus voluptatem quos commodi incidunt, exercitationem delectus iusto eligendi quasi quae, suscipit dignissimos ducimus soluta dolorum voluptatibus natus. Laborum beatae ullam iste deleniti ducimus delectus voluptatem aliquam reiciendis blanditiis! Non perspiciatis amet quibusdam in atque inventore! Veritatis, et ullam!</h5>
			</motion.div>
			<motion.div
			className="secon-detail"
			initial={{
				x:100,
				transition: {
					duration: 1
				}
			}}
			whileInView={{
				x:0,
				transition: {
					duration: 1
				}
			}}
			>
			<div>
						<h3>ชื่อ-สกุล</h3>
						<p>นาย ณัฐชานน ทรัพย์มีชัย</p>
					</div>
					<div>
						<h3>ชื่อเล่น</h3>
						<p>ณัฐ</p>
					</div>
					<div>
						<h3>รหัสนักศึกษา</h3>
						<p>6604062636151</p>
					</div>
					<div>
						<h3>กำลังศึกษาอยู่ที่</h3>
						<p>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (มจพ.)</p>
					</div>
					<div>
						<h3>ที่อยู่ปัจจุบัน</h3>
						<p>33/2 ถนนเทศบาล 8 ตำบล สระแก้ว อำเภอ เมืองสระแก้ว จังหวัดสระแก้ว รหัสไปรษณีย์ 27000</p>
					</div>
					<div>
						<h3>จบการศึกษามัธยมปลายจาก</h3>
						<p>โรงเรียนสระแก้ว</p>
					</div>
					<div>
						<h3>เกรดเฉลี่ยมัธยมปลาย</h3>
						<p>3.98</p>
					</div>
					<div>
						<h3>วัน/เดือน/ปี ที่เกิด</h3>
						<p>20 มีนาคม พ.ศ.2548</p>
						<p>(<b>อายุ</b> 18 ปี)</p>
					</div>
					<div>
						<h3>หมู่เลือด</h3>
						<p>B (บี)</p>
					</div>
					<div>
						<h3>สีที่ชอบ</h3>
						<ul>
							<li>ฟ้า/น้ำเงิน</li>
							<li>เขียว</li>
						</ul>
					</div>
					<div>
						<h3>งานอดิเรก</h3>
						<ul>
							<li>ดู YouTube</li>
							<li>เล่นเกม</li>
							<li>ศึกษา เขียนเว็บไซต์</li>
							<li>ศึกษา เขียนโปรแกรม</li>
						</ul>
					</div>
					<div>
						<h3>เป้าหมายในอนาคต</h3>
						<p>Full Stack Developer และการเขียนโปรแกรมแขนงอื่น ๆ</p>
					</div>
			</motion.div>
			</div>
        </div>
      </div>
    </section>
  )
}

export default About