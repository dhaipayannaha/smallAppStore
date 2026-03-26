import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import appDataJson from "../../app.json";
import download from "../assets/icon-downloads.png"
import star from "../assets/icon-ratings.png"
import review from "../assets/icon-review.png"                                               

import { toast } from "react-toastify";

const AppDetails = () => {
    const { id } = useParams();
    
    const { data: app, isLoading, error } = useQuery({
        queryKey: ["app", id],
        queryFn: async () => {
            const result = appDataJson.find(a => a.id === parseInt(id));
            return new Promise((resolve) => setTimeout(() => resolve(result), 500));
        }
    });

    const handleInstall = () => {
        const installed = JSON.parse(localStorage.getItem("installedApps") || "[]");
        if (!installed.includes(app.id)) {
            installed.push(app.id);
            localStorage.setItem("installedApps", JSON.stringify(installed));
            toast.success(`${app.title} installed successfully!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        } else {
            toast.info(`${app.title} is already installed.`, {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
        }
    };

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner text-primary w-12 h-12"></span>
        </div>;
    }

    if (error || !app) {
        return <div className="min-h-screen flex items-center justify-center">App not found or error occurred</div>;
    }

    // Chart data - reverse to show 5 star first
    const chartData = [...app.ratings].reverse();

    return (
        <div className="bg-[#F5F5F5] min-h-screen pb-20">
            <div className="max-w-6xl mx-auto px-4 pt-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-10 items-center rounded-3xl ">
                    <div className="w-full md:w-80 aspect-square bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center border border-gray-100 shadow-inner shrink-0">
                        <img src={app.image} alt={app.title} className="w-full h-full object-contain p-6" />
                    </div>

                    <div className="flex-1 w-full">
                        <h1 className="text-[#001931] text-2xl md:text-4xl font-bold mb-2">{app.title}</h1>
                        <p className="text-gray-500 text-lg font-medium mb-8">Developed by <span className="text-[#632EE3] hover:underline cursor-pointer">{app.companyName.toLowerCase()}</span></p>
                        <hr className="border-[#00D391]" />

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 border-t border-gray-100 pt-6">
                            <div className="flex flex-col items-center md:items-start">
                                <div className="flex items-center gap-2 text-[#627382] mb-1 font-bold uppercase text-[10px] tracking-widest">
                                    <img src={download} alt="" className="w-5 h-5" />
                                    Downloads
                                </div>
                                <div className="text-3xl font-black text-[#001931]">
                                    {app.downloads >= 1000000 ? `${(app.downloads / 1000000).toFixed(0)}M` : `${(app.downloads / 1000).toFixed(0)}K`}
                                </div>
                            </div>

                            <div className="flex flex-col items-center md:items-start border-y sm:border-y-0 sm:border-x border-gray-100 py-4 sm:py-0 sm:px-6">
                                <div className="flex items-center gap-2 text-[#627382] mb-1 font-bold uppercase text-[10px] tracking-widest">
                                    <img src={star} alt="" className="w-5 h-5" />
                                    Average Ratings
                                </div>
                                <div className="text-3xl font-black text-[#001931]">{app.ratingAvg}</div>
                            </div>

                            <div className="flex flex-col items-center md:items-start">
                                <div className="flex items-center gap-2 text-[#627382] mb-1 font-bold uppercase text-[10px] tracking-widest">
                                    <img src={review} alt="" className="w-5 h-5" />
                                    Total Reviews
                                </div>
                                <div className="text-3xl font-black text-[#001931]">
                                    {app.reviews >= 1000 ? `${(app.reviews / 1000).toFixed(0)}K` : app.reviews}
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={handleInstall}
                            className="w-full md:w-auto bg-[#00D391] hover:bg-[#00BF83] text-white font-bold py-4 px-12 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg"
                        >
                            Install Now ({app.size} MB)
                        </button>
                    </div>
                </div>
                <hr className="border-[#00D391]" />

                {/* Ratings Section */}
                <div className="mt-12  rounded-3xl">
                    <h2 className="text-[#001931] text-2xl font-bold mb-8">Ratings</h2>

                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                layout="vertical"
                                data={chartData}
                                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                            >
                                <XAxis type="number" hide />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#627382', fontSize: 13 }}
                                />
                                <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill="#F48E28" />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Description Section */}
                <hr className="border-[#00D391]" />
                <div className="mt-12 rounded-3xl">
                    <h2 className="text-[#001931] text-2xl font-bold mb-6">Description</h2>
                    <div className="text-[#627382] text-lg leading-relaxed space-y-6 max-w-5xl">
                        {app.description.split('\n').filter(p => p.trim()).map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;