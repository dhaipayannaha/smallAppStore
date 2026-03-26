const Contact = () => {
    return (
        <div className="bg-[#F5F5F5] min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#001931] mb-8 leading-tight">Get in <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">Touch</span></h1>
                        <p className="text-gray-500 text-xl leading-relaxed max-w-lg mb-12">Have an idea? Or a question about our support? We'd love to hear from you. We respond to all inquiries within 24 hours.</p>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#632EE3]/10 flex items-center justify-center text-[#632EE3] text-2xl group-hover:bg-[#632EE3] group-hover:text-white transition-all duration-300">
                                    📧
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#001931] mb-1">Email Us</h3>
                                    <p className="text-gray-500 text-lg">support@hero.io</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#00D391]/10 flex items-center justify-center text-[#00D391] text-2xl group-hover:bg-[#00D391] group-hover:text-white transition-all duration-300">
                                    🏢
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#001931] mb-1">Visit Us</h3>
                                    <p className="text-gray-500 text-lg">123 App Avenue, Tech City, <br />California, USA</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#632EE3]/10 flex items-center justify-center text-[#632EE3] text-2xl group-hover:bg-[#632EE3] group-hover:text-white transition-all duration-300">
                                    📱
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#001931] mb-1">Call Us</h3>
                                    <p className="text-gray-500 text-lg">+1 (800) 123-HERO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#001931] font-bold text-sm tracking-widest uppercase opacity-70">First Name</label>
                                    <input type="text" placeholder="John" className="w-full bg-[#f8f9fa] border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#632EE3] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#001931] font-bold text-sm tracking-widest uppercase opacity-70">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full bg-[#f8f9fa] border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#632EE3] transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[#001931] font-bold text-sm tracking-widest uppercase opacity-70">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-[#f8f9fa] border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#632EE3] transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[#001931] font-bold text-sm tracking-widest uppercase opacity-70">Message</label>
                                <textarea placeholder="Tell us about your project..." rows="5" className="w-full bg-[#f8f9fa] border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#632EE3] transition-all resize-none"></textarea>
                            </div>
                            <button className="w-full bg-[#001931] hover:bg-black text-[#00D391] font-black text-lg py-5 rounded-2xl transition-all shadow-xl hover:shadow-2xl active:scale-95 uppercase tracking-widest">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
