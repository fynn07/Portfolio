import NavButtons from "./ui/Navbar/NavButtons";
import ProfileContent from "./ui/Navbar/ProfileContent";
import SocialLinks from "./ui/Navbar/SocialLinks";
import SocialLinksMobile from "./ui/Navbar/SocialLinksMobile";

const Navbar = () => {
    return (
        <div className="hidden sm:flex h-screen fixed flex-col py-8 px-6 gap-4 bg-background sm:w-20 lg:w-52 xl:w-64">
            <ProfileContent/>
            <SocialLinks/>
            <NavButtons/>
            <SocialLinksMobile/>
        </div>
    )
}

export default Navbar;