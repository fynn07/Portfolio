import DownloadCVSvg from "./svg/DownloadCVSvg"
import LocationSvg from "./svg/LocationSvg"

const HeroInformation = () => {
    return (
        <div>
            <div className="flex">
                <div className="flex items-center gap-2 justify-center bg-green-200 px-4 rounded-full shadow-sm">
                    <p className="text-2xl text-green-700 pb-1 animate-pulse">•</p>
                    <p className="text-sm text-green-600 font-poppins font-regular">Available for Work</p>
                </div>
            </div>

            <div className="flex flex-col pt-8 gap-3">
                <p className="font-poppins text-primary font-bold text-4xl">Hello! I'm Fynn Borja 👋</p>
                <p className="font-poppins text-secondary font-bold text-3xl">A Full-Stack Developer & Software Engineer</p>
            </div>

            <div className="flex pt-11 gap-2 items-center">
                <LocationSvg/>
                <p className="font-poppins text-shit_brown font-regular text-sm">Labangon, Cebu City</p>
            </div>

            <div className="pt-11">
                <p className="font-poppins font-regular text-secondary leading-loose">I am a highly driven and detail-oriented professional with a passion for continuous learning and problem-solving. 
                My expertise lies in <span className="text-purple-500 font-semibold">Python</span>, <span className="text-orange-500 font-semibold">Java</span>, and the <span className="text-blue-500 font-semibold">PERN</span> web development stack. Equipped with hands-on experience collaborating with other developers on various projects, I am well-prepared to 
                tackle challenges head-on, learn rapidly, and make significant contributions to the field of software development. My commitment to excellence and my proactive approach make me an ideal candidate
                 for any team looking to achieve outstanding results and industry level software.</p>
            </div>
            
            <div>
                <button className="flex mt-11 items-center gap-3 py-2 px-4 shadow-md border rounded-lg transition-all duration-100 hover:bg-background hover:scale-105">
                        <DownloadCVSvg/>
                        <p className="font-poppins text-primary text-sm">View my CV</p>
                </button>

            </div>
        </div>
    )
}

export default HeroInformation