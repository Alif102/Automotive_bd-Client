
import Brands from "../../components/brands/Brands";
import Slider from "../../components/header/Slider";
import { useEffect, useState } from "react";
import AllCars from "../../components/AllCars";
import Galance from "../../components/Galance/Galance";
import Features from "../../components/Features/Features";
import AboutSection from "../../components/Features/AboutSection";
import UserActivity from "../../components/Features/UserActivity";
import Newsletter from "../../components/Features/Newsletter";
import LetsAdd from "../../components/Features/LetsAdd";
import Contact from "../../components/Footer/Contact";
import Footer from "../../components/Footer";


const Home = () => {
  let[slideData,setSlideData]=useState([])
 useEffect(()=>{
  fetch('https://automotiveserver.vercel.app/cars')
.then(res => res.json())
.then(data => setSlideData(data))
 },[])


if(slideData.length>10){
  setSlideData(slideData.slice(0,9))
}

    return (
      <>
     
     <Slider slideData={slideData}></Slider>
     
     <UserActivity/>
     <Brands></Brands>
     
     
     
     <AllCars></AllCars>
     <LetsAdd/>
     <AboutSection/>
     <Galance/>
     <Features/>
     
     <Newsletter/>
     <Contact/>
     <Footer/>
     
     
      </>

    );
};

export default Home;