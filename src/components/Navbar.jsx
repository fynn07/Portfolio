import { motion } from "framer-motion";
import NavButtons from "./ui/Navbar/NavButtons";
import ProfileContent from "./ui/Navbar/ProfileContent";
import SocialLinks from "./ui/Navbar/SocialLinks";
import SocialLinksMobile from "./ui/Navbar/SocialLinksMobile";
const Navbar = () => {
    return (
        <motion.aside animate={{x: [-50, 0], opacity: [0, 1]}} className="hidden sm:flex h-[calc(100vh-3rem)] fixed left-6 top-6 flex-col py-7 px-5 gap-5 bg-white/65 sm:w-16 lg:w-48 xl:w-60 rounded-2xl border border-black/10 shadow-[0_18px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <ProfileContent/>
            <SocialLinks/>
            <NavButtons/>
            <SocialLinksMobile/>
        </motion.aside>
    )
}

export default Navbar;
