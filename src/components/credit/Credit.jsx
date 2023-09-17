import React,{useEffect}from 'react'
import './credit.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Credit = () => {
  useEffect(()=>{
    Aos.init();
  }, [])

  return (
    <section id="credit">
      <h1 className='text-center text-[3rem]' data-aos="fade-down" data-aos-duration="1500">CREDIT</h1>
      <div className="wrapper relative">
        <div className="content" data-aos="zoom-in" data-aos-duration="1500">
        <div>
							<h3><a href="https://www.cyfence.com/article/what-types-of-website-vulnerabilities-are-most-frequently-exploited/">บทความ (ที่มา)</a></h3>
							<p>โดย <a href="https://www.indusface.com/blog/author/ritika-singh/">Ritika Singh</a></p>
							<p>เผยแพร่บน <a href="https://www.cyfence.com/">NT cyfence</a></p>
						</div>
						<div>
							<h3><a href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70">Stylized planet 3D Model  </a></h3>
							<p>โดย <a href="https://sketchfab.com/cmzw">cmzw</a></p>
							<p>เผยแพร่บน <a href="https://sketchfab.com/">Sketchfab</a></p>
						</div>
						<div>
							<h3>รูปอื่น ๆ ของบทความ</h3>
							<p>โดย <a href="https://www.indusface.com/blog/author/ritika-singh/">Ritika Singh</a></p>
							<p>เผยแพร่บน <a  href="https://www.cyfence.com/">NT cyfence</a></p>
						</div>
            <div>
							<h3>Fonts และ สัญลักษณ์อื่น ๆ (Icons)</h3>
							<p>Icons นำเข้าจาก <a href="https://react-icons.github.io/react-icons/">React-icons</a></p>
              <p>Fonts นำเข้าจาก <a href="https://fonts.google.com/">Google Fonts</a></p>
						</div>
						<div>
							<h3>รูปพื้นหลัง และรูปผู้จัดทำ</h3>
							<p>โดย นายณัฐชานน ทรัพย์มีชัย</p>
						</div>
            <div>
							<h3><a href="https://www.youtube.com/watch?v=N9Rk3d4fCJ8">วิดีโอที่เผยแพร่ (ที่มา)</a></h3>
							<p>โดย <a href="https://www.youtube.com/channel/UC25TAr5RNi_RHdFaEJLWLNQ">Zeeouil</a></p>
							<p>เผยแพร่บน <a  href="https://www.youtube.com/">YouTube</a></p>
						</div>
            <div>
								<h3>ภาษาที่ใช้ในการเขียนเว็บ</h3>
								<ul>
									<li ><a href="#">HTML</a></li>
									<li ><a href="#">CSS</a></li>
									<li><a href="https://react.dev/">React Js</a></li>
									<li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
									<li ><a href="#">JavaScript</a></li>
								</ul>
						</div>
            <div>
							<h3>เครื่องมือหรือซอฟต์แวร์ที่ใช้</h3>
							<p>เขียนเว็บไซต์ - <a href="https://code.visualstudio.com">Visual Studio Code</a></p>
								<p>ทดสอบเว็บไซต์</p>
								<ul>
									<li><a href="https://www.microsoft.com/en-us/edge/download?form=MA13FJ">Microsoft Edge [115]</a></li>
								<li><a href="https://www.google.com/intl/th_th/chrome/">Google Chrome [116]</a></li>
								<li><a href="https://www.mozilla.org">Mozilla Firefox [116]</a></li>
								</ul>
							<p>ตัดต่อวีดีโอและโปรแกรมตัดต่อภาพ</p>
              <ul>
                <li><a href="https://www.adobe.com/th_th/products/photoshop/free-trial-download.html">Adobe Photoshop</a></li>
                <li><a href="https://www.vegascreativesoftware.com/us/vegas-pro/">Sony Vegas Pro</a></li>
                </ul>
						</div>
      </div>
      </div>
    </section>
  )
}

export default Credit