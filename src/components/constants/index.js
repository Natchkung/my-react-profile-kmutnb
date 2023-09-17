import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  photoshop,
  vegas,
  fontgoogle,
  sqli,
  xss,
  csrf,
  sm,
  basm,
  sde,
  hacker,
  browser,
} from "../../assets";

import {AiOutlineHome,AiOutlineUser,AiOutlineVideoCamera,AiOutlineCreditCard} from 'react-icons/ai';
import {MdOutlineArticle} from 'react-icons/md';
import {VscTools} from 'react-icons/vsc';


export const links = [
  {
    name : 'Home',
    icons: <AiOutlineHome/>,
    hash: "#home",
  },
  {
    name : 'About',
    icons: <AiOutlineUser/>,
    hash: "#about",
  },
  {
    name : 'Videome',
    icons: <AiOutlineVideoCamera/>,
    hash: "#videome",
  },
  {
    name : 'Article',
    icons: <MdOutlineArticle/>,
    hash: "#article",
  },
  {
    name : 'Webtool',
    icons: <VscTools/>,
    hash: "#webtool",
  },
  {
    name : 'Credit',
    icons: <AiOutlineCreditCard/>,
    hash: "#credit",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  {
    name: "Sony Vegas Pro",
    icon: vegas,
  },
  {
    name: "Google Fonts",
    icon: fontgoogle,
  },
];

const articles = [
  {
    title: "SQL Injections (SQLi)",
    icon: hacker,
    imgonoff: true,
    image: sqli,
    iconBg: "#383E56",
    points: [
      "ช่องโหว่ SQLi จะทำให้แฮกเกอร์สามารถแทรกโค้ดที่เป็นอันตรายลงในเป้าหมาย โดยการกระทำรูปแบบนี้ ผู้โจมตีสามารถเข้าถึงข้อมูลที่ไม่ได้รับอนุญาตและสามารถ แก้ไข/ สร้าง/ ลบ/ และจัดการข้อมูลที่เป็นความลับของเหยื่อ ซึ่งถือว่าเป็นหนึ่งในช่องโหว่ของเว็บแอปพลิเคชันที่ร้ายแรงมากที่สุด",
    ],
    credit: 'https://portswigger.net/web-security/sql-injection',
  },
  {
    title: "Cross-Site Scripting (XSS)",
    icon: browser,
    imgonoff: true,
    image: xss,
    iconBg: "#E6DEDD",
    points: [
      "ช่องโหว่ XSS จะช่วยให้ผู้โจมตีสามารถแอบอ้างเป็นบุคคลอื่นหรือการโจมตีแบบฟิชชิ่ง โดยอนุญาตให้แฮกเกอร์แทรกสคริปต์ที่เป็นอันตรายในฝั่ง Client กรณีนี้มักเกิดขึ้นเมื่อแอปพลิเคชันรับข้อมูลจากแหล่งที่ไม่น่าเชื่อถือและอนุญาตให้ป้อนข้อมูลโดยที่ไม่ผ่านการตรวจสอบ เช่น แบบฟอร์ม แบบสำรวจความคิดเห็น หรือการดาวน์โหลดลิงก์อันตราย จนการเป็นติดตั้งมัลแวร์ลงเครื่อง ฯลฯ",
    ],
    credit: 'https://www.geeksforgeeks.org/what-is-cross-site-scripting-xss/',
  },
  {
    title: "Cross-Site Request Forgery (CSRF)",
    icon: hacker,
    imgonoff: true,
    image: csrf,
    iconBg: "#383E56",
    points: [
      "ช่องโหว่ของ CSRF จะช่วยให้ผู้โจมตีใช้ตัวตน (Identity) และ สิทธิ์ (Privilege) ข้อมูลของเหยื่อที่มีบนเว็บไซต์ หรือ Application ในการปลอมตัวเป็นเหยื่อและกระทำการหรือธุรกรรมที่ไม่พึงประสงค์โดยที่เหยื่อไม่ได้ตั้งใจ",
    ],
    credit: 'https://www.atatus.com/blog/cross-site-request-forgery-a-threat-to-open-web-applications/',
  },
  {
    title: "Security Misconfigurations",
    icon: browser,
    imgonoff: true,
    image: sm,
    iconBg: "#E6DEDD",
    points: [
      "ช่องโหว่ของเว็บไซต์เหล่านี้เกิดขึ้นเมื่อการควบคุมความปลอดภัยและการตั้งค่าต่าง ๆ ของเว็บไซต์ ไม่ว่าจะเป็นแอปพลิเคชัน เซิร์ฟเวอร์ บริการเครือข่าย แพลตฟอร์ม กรอบงาน ฐานข้อมูล ฯลฯ ถูกนำไปใช้อย่างไม่เหมาะสมหรือดำเนินการโดยมีช่องว่างและข้อผิดพลาด",
    ],
    credit: 'https://www.aquasec.com/cloud-native-academy/supply-chain-security/security-misconfigurations/',
  },
  {
    title: "Broken Authentication and Session Management",
    icon: hacker,
    imgonoff: true,
    image: basm,
    iconBg: "#383E56",
    points: [
      "ช่องโหว่เหล่านี้เป็นช่องโหว่ของเว็บแอปฯ ที่อนุญาตให้ผู้โจมตีดักจับหรือยอมให้ข้ามวิธีการตรวจสอบ โดยการข้ามการตรวจสอบสิทธิ์และตัวระบุเซสชัน ผู้โจมตีสามารถแอบอ้างบุคคลอื่น ขโมยข้อมูลส่วนตัวและข้อมูลทางบัญชี เป็นต้น",
    ],
    credit: 'https://www.hackingarticles.in/comprehensive-guide-on-broken-authentication-session-management/',
  },
  {
    title: "Sensitive Data Exposure",
    icon: browser,
    imgonoff: true,
    image: sde,
    iconBg: "#E6DEDD",
    points: [
      "ช่องโหว่ของเว็บไซต์นี้เกิดขึ้นเมื่อข้อมูลที่ละเอียดอ่อนไม่ได้รับการป้องกันเพียงพอ ทำให้ผู้โจมตีสามารถเข้าถึงข้อมูลได้ง่าย อย่างเช่นชื่อผู้ใช้ รหัสผ่าน โทเค็นเซสชัน ข้อมูลบัตรเครดิต เวชระเบียน ฯลฯ",
    ],
    credit: 'https://www.wallarm.com/what/a3-sensitive-data-exposure-2017-owasp',
  },
];

const hackingwebsite = {
    title1: 'บทความเกี่ยวกับช่องโหว่ของเว็บไซต์',
    title2: 'ประเภทช่องโหว่ของเว็บไซต์',
    content: 'ช่องโหว่ เป็นข้อบกพร่องของโค้ดหรือที่เรียกว่า “บั๊ก” ส่วนใหญ่จะพบในเว็บไซต์ เนื่องจากทุกเว็บไซต์จะมีการเขียนโค้ดเพื่อทำเป็นระบบหลังบ้านของเว็บไซต์ เมื่อโปรแกรมเมอร์เขียนโค้ดไม่รอบคอบ หรือเกิดการโจมตีรูปแบบใหม่ขึ้นจนทำให้โค้ดที่เขียนไว้นานแล้ว เกิดข้อผิดพลาดจนเป็นช่องโหว่และไม่สามารถป้องกันการโจมตีได้  ก็จะทำให้ผู้ประสงค์ร้าย หรือ แฮกเกอร์ เข้าถึงระบบ กระบวนการหรือแม้กระทั่งข้อมูลที่มีความสำคัญขององค์กรโดยที่ไม่ได้รับอนุญาตได้นั่นเอง ซึ่งการเข้าถึงดังกล่าวของผู้ประสงค์ร้าย หรือ แฮกเกอร์ จะเข้าจัดการระบบภายใน จนสามารถยึดเอาแอปพลิเคชัน ขโมยข้อมูล จนเกิดผลเสียหาย เช่น ทำให้เกิดการหยุดชะงักของบริการขนาดใหญ่ ถูกนำเอาข้อมูลภายในไปขายใน Darkweb  หรือ ใช้เรียกค่าไถ่ข้อมูล ฯลฯ'
}

export {  technologies, articles, hackingwebsite };
