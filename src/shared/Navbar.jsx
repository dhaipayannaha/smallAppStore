import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import github from "../assets/Vector.png";


const Navbar = () => {
    return (
        <div className="bg-white">
            {/* 9F62F2 632EE3 */}
            <div className="navbar max-w-6xl mx-auto py-[17.5px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className="font-semibold text-lg text-black">Home</a></li>
                        <li><a className="font-semibold text-lg text-black">Apps</a></li>
                        <li><a className="font-semibold text-lg text-black">Installation</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-[40px] h-[40px]" src={logo} alt="" />
                        <NavLink to="/" className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ml-[10px]">HERO.IO</NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <li><a className="font-semibold text-lg text-black">Home</a></li>
                        <li><a className="font-semibold text-lg text-black">Apps</a></li>
                        <li><a className="font-semibold text-lg text-black">Installation</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="flex items-center justify-center rounded-lg cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-[11.5px] px-[15.5px] hover:opacity-90 transition-opacity">
                        <img src={github} alt="" />
                        <p className="font-semibold text-lg text-white ml-[10px]">Contribute</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;