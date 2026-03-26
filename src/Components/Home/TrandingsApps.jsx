import { NavLink } from "react-router";
import { useApps } from "../../Hooks/useApps";
import SingleApp from "../single/SingleApp";

const TrandingApps = () => {
    const { apps: allApps, isLoading } = useApps();

    if (isLoading) {
        return <div className="py-[80px] flex items-center justify-center">
            <span className="loading loading-spinner text-primary w-12 h-12"></span>
        </div>;
    }

    return (
        <div className="py-[80px] bg-[#F5F5F5]">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-black text-3xl text-center font-bold text-[48px] mb-3">Trending Apps</h1>
                <p className="text-center text-[16px] text-[#666666] mb-12">Explore All Trending Apps on the Market developed by us</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...allApps]
                        .sort((a, b) => b.ratingAvg - a.ratingAvg)
                        .slice(0, 8)
                        .map((app) => (
                            <SingleApp key={app.id} app={app} />
                        ))}
                </div>

                <NavLink to="/apps" className="text-center text-[16px] font-bold text-white px-4 py-2 rounded bg-gradient-to-r from-[#632EE3] to-[#9F62F2] block w-fit mx-auto mt-12">Show All</NavLink>   
            </div>
        </div>
    );
};

export default TrandingApps;