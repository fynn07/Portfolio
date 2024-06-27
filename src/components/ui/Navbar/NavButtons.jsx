import AboutSvg from "./svg/AboutSvg";
import ContactSvg from "./svg/ContactSvg";
import HomeSvg from "./svg/HomeSvg";
import ProjectsSvg from "./svg/ProjectsSvg";

const NavButtons = () => {
    return (
        <div className="flex flex-col gap-2 pt-8">
            <div className="flex justify-start gap-4 px-4 py-2 rounded-lg hover:cursor-pointer hover:outline hover:outline-gray-400 hover:outline-1">
                <HomeSvg/>
                <p className="text-secondary text-sm font-poppins font-medium">Home</p>
            </div>
            <div className="flex justify-start gap-4 px-4 py-2 rounded-lg hover:cursor-pointer hover:outline hover:outline-gray-400 hover:outline-1">
                <ProjectsSvg/>
                <p className="text-secondary text-sm font-poppins font-medium">Projects</p>
            </div>
            <div className="flex justify-start gap-4 px-4 py-2 rounded-lg hover:cursor-pointer hover:outline hover:outline-gray-400 hover:outline-1">
                <AboutSvg/>
                <p className="text-secondary text-sm font-poppins font-medium">About</p>
            </div>
            <div className="flex justify-start gap-4 px-4 py-2 rounded-lg hover:cursor-pointer hover:outline hover:outline-gray-400 hover:outline-1">
                <ContactSvg/>
                <p className="text-secondary text-sm font-poppins font-medium">Contact</p>
            </div>
        </div>
    )
}

export default NavButtons;