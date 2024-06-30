import { useRefs } from "../../../context/Context";
import { scrollToRef } from "../../../utils/scrollToRef";
import AboutSvg from "./svg/AboutSvg";
import ContactSvg from "./svg/ContactSvg";
import HomeSvg from "./svg/HomeSvg";
import ProjectsSvg from "./svg/ProjectsSvg";
const NavButtons = () => {
    const {homeRef, stackRef, projectsRef} = useRefs();
    
    return (
        <div className="flex flex-col gap-2 pt-8">
            <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} className="flex justify-start gap-4 px-4 py-2 rounded-lg transition-all duration-150 hover:bg-gray-200 hover:cursor-pointer">
                <HomeSvg/>
                <p className="text-secondary text-sm font-poppins font-medium">Home</p>
            </button>
            <div onClick={() => scrollToRef(stackRef)} className="flex justify-start gap-4 px-4 py-2 rounded-lg transition-all duration-150 hover:bg-gray-200 hover:cursor-pointer">
                <AboutSvg/>
                <p className="text-secondary text-sm font-poppins font-medium">Stack</p>
            </div>
            <div onClick={() => scrollToRef(projectsRef)} className="flex justify-start gap-4 px-4 py-2 rounded-lg transition-all duration-150 hover:bg-gray-200 hover:cursor-pointer">
                <ProjectsSvg/>
                <p className="text-secondary text-sm font-poppins font-medium">Projects</p>
            </div>
            <div className="flex justify-start gap-4 px-4 py-2 rounded-lg transition-all duration-150 hover:bg-gray-200 hover:cursor-pointer">
                <ContactSvg/>
                <p className="text-secondary text-sm font-poppins font-medium">Contact</p>
            </div>
        </div>
    )
}

export default NavButtons;