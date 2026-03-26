import notFound from "../assets/error-404.png";
import { NavLink } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#F5F5F5] py-20 px-4">
            <img src={notFound} alt="404 Not Found" className="w-full max-w-[460px] aspect-square object-contain" />
            <NavLink to="/" className="text-center text-[16px] font-bold text-white px-8 py-3 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:shadow-lg transition-all mt-10">
                Go to Home
            </NavLink>
        </div>
    );
};

export default NotFound;