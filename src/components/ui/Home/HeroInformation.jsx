import { toast } from "react-hot-toast"
import DownloadCVSvg from "./svg/DownloadCVSvg"
import LocationSvg from "./svg/LocationSvg"
import { motion } from "framer-motion"

const HeroInformation = () => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} animate={{y:[100, 0], opacity:[0, 1]} }  transition={{delay: 0.15}} className="mb-28 2xl:mb-40">
            <div className="flex justify-center sm:justify-normal">
                <div className="flex items-center gap-2 justify-center bg-green-200 px-4 rounded-full shadow-sm">
                    <p className="text-2xl text-green-700 pb-1 animate-pulse 2xl:text-3xl">•</p>
                    <p className="text-sm text-green-600 font-poppins font-regular 2xl:text-md">Available for Work</p>
                </div>
            </div>

            <div className="flex flex-col pt-8 gap-3">
                <p className="font-poppins text-primary font-bold text-center sm:text-justify text-4xl 2xl:text-5xl">Hello! I'm Fynn Borja  👋</p>
                <p className="font-poppins text-secondary font-bold text-2xl text-center sm:text-left sm:text-3xl 2xl:text-4xl">A Full-Stack Developer & Software Engineer</p>
            </div>

            <div className="flex pt-11 gap-2 items-center justify-center sm:justify-normal">
                <LocationSvg/>
                <p className="font-poppins text-shit_brown font-regular text-sm 2xl:text-base">Labangon, Cebu City</p>
            </div>

            <div className="pt-11">
                <p className="font-poppins font-regular text-secondary leading-loose text-justify sm:text-left 2xl:text-xl 2xl:leading-10">I am a highly driven and detail-oriented professional with a passion for continuous learning and problem-solving. 
                My expertise lies in <span className="text-purple-500 font-semibold">Python</span>, <span className="text-orange-500 font-semibold">Java</span>, and the <span className="text-blue-500 font-semibold">PERN</span> web development stack. Equipped with hands-on experience collaborating with other developers on various projects, I am well-prepared to 
                tackle challenges head-on, learn rapidly, and make significant contributions to the field of software development. My commitment to excellence and my proactive approach make me an ideal candidate
                 for any team looking to achieve outstanding results and industry level software.</p>
            </div>
            
            <div className="flex justify-center sm:justify-normal">
                <button className="flex mt-11 items-center gap-3 py-2 px-4 shadow-md border rounded-lg transition-all duration-100 hover:bg-background hover:scale-105">
                        <DownloadCVSvg/>
                        <a href="https://flowcv.com/resume/do6hd0kjlv" target="_blank" className="font-poppins text-primary text-sm 2xl:text-base">View my CV</a>
                </button>

            </div>
        </motion.div>
    )
}

export default HeroInformation