import HeroInformation from "../components/ui/Home/HeroInformation";
import ProjectSection from "../components/ui/Home/ProjectSection";
import ToolsSection from "../components/ui/Home/ToolsSection";
import { useRefs } from "../context/Context";

const Home = () => {
    const {homeRef, stackRef, projectsRef} = useRefs();
    return (
        <div className="flex flex-col flex-1 border-black border-opacity-10 border bg-white rounded-lg sm:ml-20 lg:ml-52 xl:ml-64 px-4 sm:px-8 lg:px-16 xl:px-28 py-24 2xl:pr-36 ">
            <div ref={homeRef}>
                <HeroInformation/>
            </div>
            <div ref={stackRef}>
                <ToolsSection/>
            </div>
            <div ref={projectsRef}>
                <ProjectSection/>
            </div>
        </div>
    )
}

export default Home;