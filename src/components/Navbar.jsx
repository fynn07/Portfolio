import NavButtons from "./ui/Navbar/NavButtons";
import ProfileContent from "./ui/Navbar/ProfileContent";
import SocialLinks from "./ui/Navbar/SocialLinks";

const Navbar = () => {
    return (
        <div className="h-screen border-black border-opacity-10 border w-72 flex flex-col py-8 px-6 gap-4">
            <ProfileContent/>
            <SocialLinks/>
            <NavButtons/>
        </div>
    )
}

export default Navbar;