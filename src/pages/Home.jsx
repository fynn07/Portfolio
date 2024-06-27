import LocationSvg from "../components/ui/Home/svg/LocationSvg";

const Home = () => {
    return (
        <div className="flex flex-col flex-1 h-screen border-black border-opacity-10 border bg-white m-2 rounded-lg ml-72 px-28 py-24">
            <div className="flex">
                <div className="flex items-center gap-2 justify-center bg-green-200 px-4 rounded-full">
                    <p className="text-2xl text-green-700 pb-1">•</p>
                    <p className="text-sm text-green-600 font-poppins font-regular">Available for Work</p>
                </div>
            </div>

            <div className="flex flex-col pt-8 gap-3">
                <p className="font-poppins text-primary font-bold text-4xl">Hello! I'm Fynn Borja 👋</p>
                <p className="font-poppins text-secondary font-bold text-4xl">A Full-Stack Software Engineer</p>
            </div>

            <div className="flex pt-11 gap-2 items-center">
                <LocationSvg/>
                <p className="font-poppins text-shit_brown font-regular text-sm">Labangon, Cebu City</p>
            </div>

            <div className="pt-11">
                <p className="font-poppins font-regular text-secondary leading-loose">I am a highly driven and detail-oriented professional with a passion for continuous learning and problem-solving. 
                My expertise lies in <span className="text-purple-500 font-semibold">Python</span>, <span className="text-orange-500 font-semibold">Java</span>, and the <span className="text-blue-500 font-semibold">PERN</span> web development stack. With hands-on experience collaborating with other developers on various projects, I am well-prepared to 
                tackle challenges head-on, learn rapidly, and make significant contributions to the field of software development. My commitment to excellence and my proactive approach make me an ideal candidate
                 for any team looking to achieve outstanding results.</p>
            </div>
        </div>
    )
}

export default Home;