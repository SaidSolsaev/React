import React, { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {FaBars, FaTimes} from "react-icons/fa";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-scroll";

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [theme, setTheme] = useState(getStorageTheme());

    const handleTheme = () => {
        if (theme === 'light-theme') {
          setTheme('dark-theme');
        } else {
          setTheme('light-theme');
        }
      };

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <h1 className="font-thin text-3xl italic font-serif">Said Solsaev</h1>
            </div>
            <ul className="hidden md:flex gap-x-6">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={
                !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}   
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <div className="iconBox">
                    <ul className="flex py-6">
                        <li className="h-[60px] flex  items-center bg-blue-600">
                            <LinkedInIcon fontSize="large" />    
                        </li>
                        <li className="h-[60px] flex items-center bg-[#333333]">
                            <GitHubIcon fontSize="large" />    
                        </li>
                        <li className="h-[60px] flex items-center bg-blue-600">
                            <EmailIcon fontSize="large" />    
                        </li>
                        <li className="h-[60px] flex items-center bg-[#333333]">
                            <PersonIcon fontSize="large" />    
                        </li>
                    </ul>
                </div>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover_ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/said-solsaev/">
                            LinkedIn <LinkedInIcon fontSize="large" />    
                        </a>    
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover_ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/SaidSolsaev">
                            GitHub <GitHubIcon fontSize="large" />    
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover_ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="mailto:venum095@hotmail.com">
                            Email <EmailIcon fontSize="large" />    
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover_ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="mailto:venum095@hotmail.com">
                            Resume <PersonIcon fontSize="large" />    
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Navbar;