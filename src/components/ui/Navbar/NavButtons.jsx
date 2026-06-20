import { useRefs } from "../../../context/Context";
import { scrollToRef } from "../../../utils/scrollToRef";
import AboutSvg from "./svg/AboutSvg";
import ContactSvg from "./svg/ContactSvg";
import HomeSvg from "./svg/HomeSvg";
import ProjectsSvg from "./svg/ProjectsSvg";
const NavButtons = () => {
    const {homeRef, stackRef, projectsRef, contactRef} = useRefs();
    const navItemClass = "flex gap-4 justify-center lg:justify-start lg:px-4 lg:py-3 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-sm hover:cursor-pointer hover:-translate-y-0.5";
    
    return (
        <div className="flex flex-col gap-9 lg:gap-2 pt-7 2xl:gap-3">
            <div onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} className={navItemClass}>
                <HomeSvg/>
                <p className="text-secondary text-sm font-poppins font-medium hidden lg:inline 2xl:text-base">Home</p>
            </div>
            <div onClick={() => scrollToRef(stackRef)} className={navItemClass}>
                <AboutSvg/>
                <p className="text-secondary text-sm font-poppins font-medium hidden lg:inline 2xl:text-base">Stack</p>
            </div>
            <div onClick={() => scrollToRef(projectsRef)} className={navItemClass}>
                <ProjectsSvg/>
                <p className="text-secondary text-sm font-poppins font-medium hidden lg:inline 2xl:text-base">Projects</p>
            </div>
            <div onClick={() => scrollToRef(contactRef)} className={navItemClass}>
                <ContactSvg/>
                <p className="text-secondary text-sm font-poppins font-medium hidden lg:inline 2xl:text-base">Contact</p>
            </div>
        </div>
    )
}

export default NavButtons;
