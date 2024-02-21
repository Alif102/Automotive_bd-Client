import { MdOutlineSettingsSuggest } from "react-icons/md";
import ColorTitle from "../ColorTitle/ColorTitle";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCar,FaHistory  } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";



const Features = () => {

    useEffect(()=>{
    
        AOS.init();
        AOS.init({
            duration: 1200, 
        });
        AOS.refresh();
          },[])

    return (
        
    <div className="w-[90vw] mx-auto min-h-[80vh] mb-44">
        <h1 className="xl:text-6xl text-5xl text-center font-semibold mb-4" data-aos='zoom-out-down' data-aos-delay="500">Our <ColorTitle>Features</ColorTitle></h1>
        <p className='text-sm text-center 2xl:w-1/3 md:w-1/2 mx-auto mb-16 text-black/70'>Elevate Your Driving Experience with a Palette of Features—Customization for Your Style, Convenience at Every Turn, and Confidence in Every Drive.</p>
        <div className="flex xl:flex-row gap-10 flex-col items-center justify-center">
            <div className="xl:w-1/3 sm:w-1/2 overflow-hidden rounded-3xl ">
            <img src="https://i.ibb.co/J7yg6gR/Red-And-Black-Modern-Car-Insurance-Instagram-Postf.jpg" className="rounded-3xl hover:scale-125 md:h-full h-[60vh]" alt="" />
            </div>
            <div className="xl:w-1/2 grid md:grid-cols-2 grid-cols-1 place-items-center place-content-center gap-14">
                <div className="text-center flex justify-between h-52 flex-col items-center">
                    <MdOutlineSettingsSuggest className="xl:text-8xl text-6xl"/>
                    <h1 className="text-2xl font-bold">Custom Car Creations</h1>
                    <p className="xl:text-base text-sm">Design your own car with personalized features and colors.</p>
                </div>
                <div className="text-center flex justify-between h-52 flex-col items-center">
                    <FaCar className="xl:text-8xl text-6xl"/>
                    <h1 className="text-2xl font-bold">Virtual Test Drives</h1>
                    <p className="xl:text-base text-sm">Experience our cars virtually, providing preview before making a purchase.</p>
                </div>
                <div className="text-center flex justify-between h-52 flex-col items-center">
                    <FaHistory className="xl:text-8xl text-6xl"/>
                    <h1 className="text-2xl font-bold">Clear History Reports</h1>
                    <p className="xl:text-base text-sm">Know your {`car's `}story with transparent details about its past.</p>
                </div>
                <div className="text-center flex justify-between h-52 flex-col items-center">
                    <RiCustomerServiceFill className="xl:text-8xl text-6xl"/>
                    <h1 className="text-2xl font-bold">Helpful Customer Support</h1>
                    <p className="xl:text-base text-sm">Get friendly assistance for any concerns along your car-buying journey.</p>
                </div>
            </div>
        </div>
    </ div>
    )}
export default Features;