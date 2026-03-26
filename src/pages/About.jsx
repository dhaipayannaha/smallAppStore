const About = () => {
    return (
        <div className="bg-[#F5F5F5] min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#001931] mb-6 tracking-tight">About <span className="text-[#632EE3]">HERO.IO</span></h1>
                    <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto italic font-medium">"Transforming complicated ideas into elegant, everyday digital experiences."</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#001931] mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">To empower individuals and teams worldwide by creating tools that are not only powerful but also remarkably simple to use. We believe that technology should serve people, not the other way around.</p>
                    </div>
                    <div className="bg-[#001931] p-10 rounded-3xl shadow-xl text-white">
                        <h2 className="text-2xl font-bold mb-4 text-[#00D391]">Our Vision</h2>
                        <p className="text-gray-300 leading-relaxed">An ecosystem where every creative and professional has access to high-end software that feels natural and boosts productivity without the steep learning curve.</p>
                    </div>
                </div>

                <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#632EE3]/5 -mr-16 -mt-16 rounded-full"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-[#001931] mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>Founded in 2024, HERO.IO started with a simple observation: most apps are too cluttered. Our founders wanted to strip away the noise and focus on what truly matters to the user.</p>
                            <p>From a small home office to a global team, we've stayed true to our minimalist roots. Every button we add, every pixel we nudge, is in service of making your life simpler.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold text-[#001931] mb-12">Driven by Excellence</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl font-black text-[#632EE3] mb-2">10M+</div>
                            <div className="text-[#627382] font-semibold">Active Users</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-[#00D391] mb-2">150+</div>
                            <div className="text-[#627382] font-semibold">Quality Apps</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-[#632EE3] mb-2">4.9/5</div>
                            <div className="text-[#627382] font-semibold">Avg. Rating</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-[#00D391] mb-2">24/7</div>
                            <div className="text-[#627382] font-semibold">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
