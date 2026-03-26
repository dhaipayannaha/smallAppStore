import { Link } from "react-router";
import star from "../../assets/Vector.svg";
import download from "../../assets/Group-2.svg";

const SingleApp = ({ app }) => {
    return (
        <Link to={`/apps/${app.id}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 block ring-1 ring-black/5">
            <img src={app.image} alt={app.title} className="w-full h-48 object-cover p-2 rounded-xl" />
            <div className="p-5">
                <h3 className="font-bold text-lg text-[#001931] mb-1 truncate">{app.title}</h3>
                <p className="text-[#627382] text-sm mb-3">{app.companyName}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-[#627382] bg-gray-100 px-3 py-2 rounded-full font-medium">
                        <img src={download} alt="download" className="w-4 h-4" />
                        <span className=" text-[#00D390]">
                            {app.downloads >= 1000 ? `${(app.downloads / 1000).toFixed(0)}k+` : app.downloads}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#627382] bg-gray-100 px-3 py-2 rounded-full font-medium">
                        <img src={star} alt="star" className="w-4 h-4" />
                        <span className="text-sm font-semibold">{app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleApp;