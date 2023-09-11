import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Videome from './components/videome/Videome';
import Article from './components/article/Article';
import Credit from './components/credit/Credit';
import Footer from './components/footer/Footer';
// "homepage": "http://project.cs.kmutnb.ac.th/~6604062636151/",

function App() {
  return (  
    <>
      <Header/>
      <Nav/>
      <About/>
      <Videome/>
      <Article/>
      <Credit/>
      <Footer/>
      </>
  );
}

export default App;
