import HeroInformation from "../components/ui/Home/HeroInformation";
import ToolsUsed from "../components/ui/Home/ToolsUsed";

const Home = () => {
    return (
        <div className="flex flex-col flex-1 border-black border-opacity-10 border bg-white m-2 rounded-lg ml-72 px-28 py-24">
            <HeroInformation/>
            <ToolsUsed/>
        </div>
    )
}

export default Home;