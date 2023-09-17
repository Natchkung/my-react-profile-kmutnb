import React, {useState , useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import {BrowserRouter} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Videome from './components/videome/Videome';
import Article from './components/article/Article';
import Credit from './components/credit/Credit';
import Footer from './components/footer/Footer';
import Webtool from './components/webtool/Webtool';
import { StarsCanvas } from './components/canvas';
import Blobity from 'blobity';
// "homepage": "http://project.cs.kmutnb.ac.th/~6604062636151/",

function App() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 5000)
  }, [])
  
  const options = { color: 'rgb(0, 162, 255)',dotColor: '#fff',mode: 'slow' };
  new Blobity(options);
  
  
  return (  
    <div className='Screen'>
      {
        loading ? (
          <div className="Loading">
      <HashLoader
      size={70}
      color={"#4db5ff"}
      loading={loading}
    />
    </div>
         ) : (
      <BrowserRouter>
      <Nav/>
      <div className='relative z-0'>
        <Header/>
          <StarsCanvas/>
        </div>
      <About/>
      <Videome/>
      <Article/>
      <Webtool/>
      <Credit/>
      <Footer/>
      </BrowserRouter>

      )}
    </div>
    
  );
}

export default App;
