import { useRefs } from "../context/Context";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { scrollToRef } from "../utils/scrollToRef";
import AboutSvg from "./ui/Navbar/svg/AboutSvg";
import ContactSvg from "./ui/Navbar/svg/ContactSvg";
import HomeSvg from "./ui/Navbar/svg/HomeSvg";
import ProjectsSvg from "./ui/Navbar/svg/ProjectsSvg";

const MobileNavBar = () => {
    const {homeRef, stackRef, projectsRef} = useRefs();
    const scrollDirection = useScrollDirection();

    return (
        <div className={`w-screen fixed bg-background border-b-2 p-4 sm:hidden transition-transform duration-300 ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}>
            <div className="flex justify-around">
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
        </div>
    );
}

export default MobileNavBar;