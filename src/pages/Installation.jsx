import { useState, useMemo } from "react";
import { useApps } from "../Hooks/useApps";
import { toast } from "react-toastify";
import star from "../assets/icon-ratings.png";
import downloadIcon from "../assets/icon-downloads.png";
import NotFound from "./NotFound";

const Installation = () => {
    const { apps: allApps, isLoading } = useApps();
    const [installedIds, setInstalledIds] = useState(() => 
        JSON.parse(localStorage.getItem("installedApps") || "[]")
    );
    const [sortBy, setSortBy] = useState("default");

    const installedApps = useMemo(() => {
        const apps = allApps.filter(app => installedIds.includes(app.id));
        if (sortBy === "size") {
            return [...apps].sort((a, b) => b.size - a.size);
        }
        return apps;
    }, [allApps, installedIds, sortBy]);

    const handleUninstall = (id, title) => {
        const updated = installedIds.filter(installedId => installedId !== id);
        setInstalledIds(updated);
        localStorage.setItem("installedApps", JSON.stringify(updated));
        toast.error(`${title} uninstalled.`, {
            position: "top-right",
            autoClose: 2000,
            theme: "colored"
        });
    };

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner text-primary w-12 h-12"></span>
        </div>;
    }

    return (
        <div className="bg-[#F5F5F5] min-h-screen py-10 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 border-2 border-[#632EE3]/20 border-dotted p-10 rounded-xl bg-white/50">
                    <h1 className="text-[#001931] text-4xl md:text-5xl font-extrabold mb-4">Your Installed Apps</h1>
                    <p className="text-[#666666] text-lg">Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className="bg-[#f0f2f5] px-6 py-4 rounded-t-xl flex justify-between items-center border-b border-gray-200">
                    <div className="text-[#001931] font-bold text-xl">
                        {installedApps.length} Apps Found
                    </div>
                    <select 
                        className="bg-white border-none rounded-lg px-4 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-[#632EE3]"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Sort By Default</option>
                        <option value="size">Sort By Size</option>
                    </select>
                </div>

                <div className="bg-white rounded-b-xl shadow-sm overflow-hidden divide-y divide-gray-100 border-x border-b border-gray-200">
                    {installedApps.length > 0 ? (
                        installedApps.map(app => (
                            <div key={app.id} className="p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-6 w-full">
                                    <div className="w-20 h-20 bg-gray-100 rounded-2xl shrink-0 overflow-hidden border border-gray-200">
                                        <img src={app.image} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[#001931] text-xl font-bold mb-2 truncate">{app.title}</h3>
                                        <div className="flex flex-wrap items-center gap-6 text-sm text-[#627382] font-medium">
                                            <div className="flex items-center gap-1.5">
                                                <img src={downloadIcon} alt="" className="w-3.5 h-3.5" />
                                                <span className="text-[#00D391]">{app.downloads >= 1000 ? `${(app.downloads/1000).toFixed(0)}M` : app.downloads}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <img src={star} alt="" className="w-3.5 h-3.5" />
                                                <span className="text-[#F48E28]">{app.ratingAvg}</span>
                                            </div>
                                            <div className="text-gray-400">
                                                {app.size} MB
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleUninstall(app.id, app.title)}
                                    className="w-full sm:w-auto bg-[#00D391] hover:bg-red-500 text-white font-bold py-3 px-10 rounded-xl transition-all active:scale-95 whitespace-nowrap"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="p-20 text-center text-gray-400 text-xl font-medium">
                            <NotFound />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Installation;