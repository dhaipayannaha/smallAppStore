import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayouts = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default RootLayouts;