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
                            <li><NavLink to="/" className={({ isActive }) => `font-semibold text-lg transition-colors ${isActive ? 'text-[#632EE3]' : 'text-black hover:text-[#9F62F2]'}`}>Home</NavLink></li>
                            <li><NavLink to="/apps" className={({ isActive }) => `font-semibold text-lg transition-colors ${isActive ? 'text-[#632EE3]' : 'text-black hover:text-[#9F62F2]'}`}>Apps</NavLink></li>
                            <li><NavLink to="/installation" className={({ isActive }) => `font-semibold text-lg transition-colors ${isActive ? 'text-[#632EE3]' : 'text-black hover:text-[#9F62F2]'}`}>Installation</NavLink></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 object-contain" src={logo} alt="logo" />
                        <NavLink to="/" className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent leading-none pt-1">HERO.IO</NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <li><NavLink to="/" className={({ isActive }) => `font-semibold text-lg transition-colors ${isActive ? 'text-[#632EE3]' : 'text-black hover:text-[#9F62F2]'}`}>Home</NavLink></li>
                        <li><NavLink to="/apps" className={({ isActive }) => `font-semibold text-lg transition-colors ${isActive ? 'text-[#632EE3]' : 'text-black hover:text-[#9F62F2]'}`}>Apps</NavLink></li>
                        <li><NavLink to="/installation" className={({ isActive }) => `font-semibold text-lg transition-colors ${isActive ? 'text-[#632EE3]' : 'text-black hover:text-[#9F62F2]'}`}>Installation</NavLink></li>
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