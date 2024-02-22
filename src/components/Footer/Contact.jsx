import { Button } from "@material-tailwind/react";
import { BiPhoneCall } from "react-icons/bi";
import { RxTwitterLogo } from "react-icons/rx";
import { MdOutlineMailOutline,MdOutlineLocationOn  } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

import './footer.css'

const Contact = () => {
    return (
            <footer className="footer p-10 text-base-content">
                <div className="container px-6 py-12 mx-auto">
                    <div className="md:flex md:items-center md:-mx-6">
                        <div className="md:w-1/2 md:mx-6">
                            <h1 className="text-3xl font-semibold capitalize text-white md:text-6xl ">
                                Contact us <br/> for  more info
                            </h1>
                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">
                                    <MdOutlineLocationOn className="w-6 h-6 mx-2"/>
                                    <span className="mx-2 text-white/70  w-72 dark:text-gray-400">
                                        Cecilia Chapman-711-2880, Stoke-On-Trent,United Kingdom.
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                <BiPhoneCall className="w-6 h-6 mx-2"/>

                                    <span className="mx-2 text-white/70 truncate w-72 dark:text-gray-400">(+441) 563-7401</span>
                                </p>

                                <p className="flex items-start -mx-2">
                                <MdOutlineMailOutline  className="w-6 h-6 mx-2"/>


                                    <span className="mx-2 text-white/70 truncate w-72 dark:text-gray-400">car-com@information.com</span>
                                </p>
                            </div>

                            <div className="mt-6 w-80 md:mt-8">
                                <h3 className="text-white/80">Follow us</h3>
                                <div className="flex mt-4 -mx-1.5 ">
                                    <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                                        <RxTwitterLogo className="w-8 h-8" />
                                    </a>
                                    <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                                        <FaFacebook className="w-8 h-8" />
                                    </a>
                                    <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                                        <LuInstagram className="w-8 h-8"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 md:w-1/2 md:mx-6">
                            <div
                                className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 md:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                                <h1 className="text-2xl font-semibold text-black/90 text-center border-l-8 border-red pl-4 w-fit">What do you want to ask</h1>

                                <form className="mt-6">
                                <input type="text" className="w-full rounded-lg border-b-2 h-14 p-4 text-sm text-black/30 font-medium shadow-sm" placeholder="Full Name" required />

                                <input type="text" className="w-full rounded-lg border-b-2 h-14 p-4 text-sm text-black/30 font-medium shadow-sm mt-7" placeholder="Enter Email" required />
                                <textarea name="description" rows="5" className="w-full rounded-lg border-b-2 p-4 text-sm shadow-sm mt-7 mb-14" placeholder="Short Description" required />
                                <Button className="bg-gradient-to-bl from-lightRed to-darkRed w-full">Get In Touch</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>             
            </footer>
    );
};

export default Contact;