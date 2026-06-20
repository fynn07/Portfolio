import { motion } from "framer-motion";
import DownloadCVSvg from "./svg/DownloadCVSvg";

const HeroInformation = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: [70, 0], opacity: [0, 1] }}
            transition={{ delay: 0.15 }}
            className="mb-28 max-w-5xl 2xl:mb-36"
        >
            <div className="flex justify-center sm:justify-normal">
                <div className="flex items-center gap-2 justify-center bg-green-50 px-4 py-2 rounded-full ring-1 ring-green-200 shadow-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_0_5px_rgba(34,197,94,0.14)] animate-pulse" />
                    <p className="text-sm text-green-700 font-poppins font-medium 2xl:text-md">Available for Work</p>
                </div>
            </div>

            <div className="flex flex-col pt-9 gap-4">
                <h1 className="font-poppins text-primary font-bold text-center sm:text-left text-4xl leading-tight sm:text-5xl 2xl:text-6xl">
                    Hello, I'm Fynn Borja.
                </h1>
                <p className="font-poppins text-secondary font-semibold text-2xl leading-snug text-center sm:text-left sm:text-3xl 2xl:text-4xl">
                    A Full-Stack Developer & Software Engineer
                </p>
            </div>

            <div className="flex justify-center pt-7 sm:justify-normal">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-background px-4 py-2 shadow-sm">
                    <span className="font-poppins text-sm font-semibold text-primary 2xl:text-base">2+ years of experience</span>
                    <span className="h-1 w-1 rounded-full bg-tertiary" />
                    <span className="font-poppins text-sm font-medium text-secondary 2xl:text-base">Full-stack, backend, and AI engineering</span>
                </div>
            </div>

            <div className="pt-9">
                <p className="font-poppins font-regular text-secondary leading-8 text-left 2xl:text-xl 2xl:leading-10">
                    I am a backend-focused full-stack developer and AI software engineer based in Cebu, Philippines.
                    I build scalable web applications, client-facing systems, and AI-powered workflows using technologies like <span className="text-blue-500 font-semibold">React</span>, <span className="text-green-600 font-semibold">Node.js</span>, <span className="text-purple-500 font-semibold">LLMs</span>, and cloud platforms. My recent work spans enterprise logistics platforms, role-based systems, automated communication flows, and agentic AI workflows that help teams turn operational problems into maintainable software.
                </p>
            </div>
            
            <div className="flex justify-center sm:justify-normal">
                <a
                    href="https://www.resumemate.io/resume/1betLNEKHZBJVZG"
                    target="_blank"
                    className="flex mt-10 items-center gap-3 py-3 px-5 shadow-sm border border-black/10 rounded-xl bg-primary font-poppins text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg 2xl:text-base"
                >
                    <DownloadCVSvg/>
                    View my CV
                </a>
            </div>
        </motion.section>
    );
};

export default HeroInformation;
