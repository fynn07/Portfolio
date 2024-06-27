import FacebookSvg from "./svg/FacebookSvg";
import GithubSvg from "./svg/GithubSvg";
import LinkedinSvg from "./svg/LinkedinSvg";

const SocialLinks = () => {
    return (
        <div className="flex justify-center gap-4">
            <button>
                <GithubSvg/>
            </button>
            <button>
                <FacebookSvg/>
            </button>
            <button>
                <LinkedinSvg/>                   
            </button>
        </div>
    )
}

export default SocialLinks;