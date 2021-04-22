import { useEffect } from 'react';
import './App.css';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Hero from "./components/Hero";
import LatestProject from './components/LatestProject';
import Qualification from './components/Qualification';
import Specializing from './components/Specializing';
import Testimonials from './components/Testimonials';
import AOS from "aos";
import 'aos/dist/aos.css';


const App = (props)=>{
  useEffect(()=>{
    AOS.init({
      duration : 1000,
    });
  }, [])
  return (
    <div>
        <Hero/>
        <Specializing/>
        <Expertise/>
        <LatestProject/>
        <Qualification/>
        <Testimonials/>
        <Footer/>
        
    </div>
  )
}


export default  App;
