
import FacebookSvg from "./svg/FacebookSvg";
import GithubSvg from "./svg/GithubSvg";
import LinkedinSvg from "./svg/LinkedinSvg";

const SocialLinksMobile = () => {
    return (
        <div className="justify-center items-center gap-11 pt-14 flex flex-col lg:hidden">
            <a href="https://github.com/fynn07" target="_blank">
                <GithubSvg/>
            </a>
            <a href="https://www.facebook.com/fynn.borja/" target="_blank">
                <FacebookSvg/>
            </a>
            <a href="https://www.linkedin.com/in/fynn-borja-4384851bb/" target="_blank">
                <LinkedinSvg/>                   
            </a>
        </div>
    )
}

export default SocialLinksMobile;