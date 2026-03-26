import CountUpModule from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Fix for ESM/CJS interop in certain bundlers
const CountUp = CountUpModule.default || CountUpModule;

const Trusted = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <div className="py-[80px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white" ref={ref}>
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-white text-3xl font-bold text-[48px] mb-3 leading-tight">Trusted by Millions, Built for You</h1>
                
                <div className="flex flex-wrap justify-center mt-[50px] gap-y-10">
                    <div className="px-[70px]">
                        <h5 className="text-[12px] uppercase opacity-80 mb-1">Total Downloads</h5>
                        <h1 className="text-[64px] font-bold h-[72px]">
                            {inView && <CountUp end={10} duration={2} suffix="M+" />}
                        </h1>
                        <h5 className="text-[12px] opacity-80 mt-1">21% more than last month</h5>
                    </div>
                    <div className="px-[70px] border-x border-white/10">
                        <h5 className="text-[12px] uppercase opacity-80 mb-1">Total Reviews</h5>
                        <h1 className="text-[64px] font-bold h-[72px]">
                            {inView && <CountUp end={906} duration={2} suffix="K" />}
                        </h1>
                        <h5 className="text-[12px] opacity-80 mt-1">46% more than last month</h5>
                    </div>
                    <div className="px-[70px]">
                        <h5 className="text-[12px] uppercase opacity-80 mb-1">Active Apps</h5>
                        <h1 className="text-[64px] font-bold h-[72px]">
                            {inView && <CountUp end={132} duration={2} suffix="+" />}
                        </h1>
                        <h5 className="text-[12px] opacity-80 mt-1">31 more will Launch</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trusted;