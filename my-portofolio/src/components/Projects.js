import React from "react";
import prjct from "./../images/prjct.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import SouthIcon from '@mui/icons-material/South';


const Projects = () => {

    return(
        <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
                        My Projects
                    </p>
                    <p className="py-6 text-2xl text-center">
                        Check out some of my projects
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div 
                        style={{backgroundImage: `url(${prjct})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Calculator
                            </span>
                            <p>A calculator created with React</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div 
                        style={{backgroundImage: `url(${prjct})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Snake
                            </span>
                            <p>School project. Sanke game using Java with GUI</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div 
                        style={{backgroundImage: `url(${prjct})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Pong
                            </span>
                            <p>My first game programmed with python, an orignal pong game</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div 
                        style={{backgroundImage: `url(${prjct})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                2048
                            </span>
                            <p>2048, game programmed with Python</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div 
                        style={{backgroundImage: `url(${prjct})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                ToDo app 
                            </span>
                            <p className="text-center">An ToDo list app created with Python</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div 
                        style={{backgroundImage: `url(${prjct})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Website
                            </span>
                            <p className="text-center">A car dealership website created with HTML/CSS</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="hover:bg-cyan-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
                    <p className="text-4xl my-10">Check out more projects on GitHub</p>
                    <p className="my-4"><SouthIcon fontSize="large"/></p>
                    <a href="https://github.com/SaidSolsaev">
                        <button className="hover:bg-cyan-500 text-center rounded-lg px-6 py-3 my-2 bg-white text-gray-700 font-bold text-lg">Vist GitHub <GitHubIcon fontSize="large"/></button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;