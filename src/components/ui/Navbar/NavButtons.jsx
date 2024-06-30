import { useRefs } from "../../../context/Context";
import { scrollToRef } from "../../../utils/scrollToRef";
import AboutSvg from "./svg/AboutSvg";
import ContactSvg from "./svg/ContactSvg";
import HomeSvg from "./svg/HomeSvg";
import ProjectsSvg from "./svg/ProjectsSvg";
const NavButtons = () => {
    const {homeRef, stackRef, projectsRef} = useRefs();
    
    return (
        <div className="flex flex-col gap-10 lg:gap-2 pt-8 2xl:gap-4">
            <div onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} className="flex gap-4 justify-center lg:justify-start lg:px-4 lg:py-2 rounded-lg transition-all duration-150 hover:bg-gray-200 hover:cursor-pointer">
                <HomeSvg/>
                <p className="text-secondary text-sm font-poppins font-medium hidden lg:inline 2xl:text-base">Home</p>
            </div>
            <div onClick={() => scrollToRef(stackRef)} className="flex gap-4 justify-center lg:justify-start lg:px-4 lg:py-2 rounded-lg transition-all duration-150 hover:bg-gray-200 hover:cursor-pointer">
                <AboutSvg/>
                <p className="text-secondary text-sm font-poppins font-medium hidden lg:inline 2xl:text-base">Stack</p>
            </div>
            <div onClick={() => scrollToRef(projectsRef)} className="flex gap-4 justify-center lg:justify-start lg:px-4 lg:py-2 rounded-lg transition-all duration-150 hover:bg-gray-200 hover:cursor-pointer">
                <ProjectsSvg/>
                <p className="text-secondary text-sm font-poppins font-medium hidden lg:inline 2xl:text-base">Projects</p>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start lg:px-4 lg:py-2 rounded-lg transition-all duration-150 hover:bg-gray-200 hover:cursor-pointer">
                <ContactSvg/>
                <p className="text-secondary text-sm font-poppins font-medium hidden lg:inline 2xl:text-base">Contact</p>
            </div>
        </div>
    )
}

export default NavButtons;