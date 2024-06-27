import NavButtons from "./ui/Navbar/NavButtons";
import ProfileContent from "./ui/Navbar/ProfileContent";
import SocialLinks from "./ui/Navbar/SocialLinks";

const Navbar = () => {
    return (
        <div className="h-screen w-72 fixed flex flex-col py-8 px-6 gap-4 bg-background">
            <ProfileContent/>
            <SocialLinks/>
            <NavButtons/>
        </div>
    )
}

export default Navbar;