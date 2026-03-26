import { useApps } from "../../Hooks/useApps";
import SingleApp from "../single/SingleApp";
import AppError from "../../pages/AppError";

const Apps = () => {
    const { 
        apps: filteredApps, 
        searchTerm, 
        setSearchTerm, 
        isLoading, 
        error 
    } = useApps();

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner text-primary w-12 h-12"></span>
        </div>;
    }

    if (error) {
        return <AppError />;
    }

    return (
        <div className="bg-[#F5F5F5] min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-[#001931] text-4xl md:text-5xl font-bold mb-4">Explore Our Apps</h1>
                    <p className="text-[#666666] text-base md:text-lg max-w-2xl mx-auto">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                {/* Filter & Count Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div className="text-[#333333] font-bold text-xl">
                        ({filteredApps.length}) Apps Found
                    </div>
                    
                    <div className="relative w-full md:w-80">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </span>
                        <input 
                            type="text" 
                            placeholder="Search Apps" 
                            className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#632EE3] transition-all text-black shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredApps.length > 0 ? (
                        filteredApps.map(app => (
                            <SingleApp key={app.id} app={app} />
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center">
                            <AppError />
                            <p className="text-center text-gray-500 text-2xl font-bold -mt-10">No applications found matching "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Apps;