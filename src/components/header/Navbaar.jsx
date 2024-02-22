/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState, useContext } from "react";
import {BsSun} from 'react-icons/bs'
import {HiOutlineMoon} from 'react-icons/hi'
// import UseAuth from "../Hooks/UseAuth";
import { AuthInfo } from "../../context/AuthContext";


const Navbaar = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);








  const {user , logOut} = useContext(AuthInfo);
    const navLinks =  <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/cart">My Cart</NavLink></li>
    <li><NavLink to='/add-car'>Add Products</NavLink></li>
    </>
  return (
    <div data-theme="dark">
        <div className="navbar bg-base-100" data-theme="light">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        
        
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">Moscow Mashuka</a> */}
    <img className="w-[130px] ml-7" src="https://i.ibb.co/CHB0nDB/logo2.png" alt="Logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
     {navLinks}
     </ul>
  </div>
  <div className="navbar-end">
  {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                                </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }



         {/* Toggle button here */}
         <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <BsSun alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <HiOutlineMoon alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>


  </div>
</div>
    </div>
  )
}

export default Navbaar