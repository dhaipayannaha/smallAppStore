import googlePlay from "../../assets/Group.svg"
import appStore from "../../assets/Group.png"
import heroImage from "../../assets/hero.png"

const Dashboard = () => {
    return (
        <div className="pt-[80px] bg-[#F5F5F5]">
            <h1 className="text-[#001931] text-3xl text-center font-bold text-7xl mb-3">We Build</h1>
            <h1 className="text-[#001931] text-3xl text-center font-bold text-7xl"><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">Productive</span> Apps</h1>
            <p className="text-[#627382] text-center text-xl font-normal mt-6">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="flex justify-center gap-4 py-6">
                <button className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
                    <img src={googlePlay} alt="Google Play" className="w-5 h-5" />
                            <span className="text-[#001931] font-medium">Google Play</span>
                        </button>
                        <button className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
                            <img src={appStore} alt="App Store" className="w-5 h-5" />
                            <span className="text-[#001931] font-medium">App Store</span>
                        </button>
                    </div>
                    <div className="flex justify-center mt-[16px]">
                        <img src={heroImage} alt="Hero" className="w-[90%] max-w-4xl object-contain" />
                    </div>
                </div>
    );
};

export default Dashboard;