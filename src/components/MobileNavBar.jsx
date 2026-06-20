import { useRefs } from "../context/Context";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { scrollToRef } from "../utils/scrollToRef";
import AboutSvg from "./ui/Navbar/svg/AboutSvg";
import ContactSvg from "./ui/Navbar/svg/ContactSvg";
import HomeSvg from "./ui/Navbar/svg/HomeSvg";
import ProjectsSvg from "./ui/Navbar/svg/ProjectsSvg";

const MobileNavBar = () => {
    const {homeRef, stackRef, projectsRef, contactRef} = useRefs();
    const scrollDirection = useScrollDirection();
    const navItemClass = "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 hover:bg-white hover:shadow-sm hover:cursor-pointer";

    return (
        <div className={`w-screen fixed z-20 bg-white/85 border-b border-black/10 p-3 shadow-sm backdrop-blur-xl sm:hidden transition-transform duration-300 ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}>
            <div className="flex justify-around">
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
        </div>
    );
}

export default MobileNavBar;
