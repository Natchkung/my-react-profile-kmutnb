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
// "homepage": "http://project.cs.kmutnb.ac.th/~6604062636151/",

function App() {

  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 5000)
  }, [])

  
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
      <Header/>
      <Nav/>
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
