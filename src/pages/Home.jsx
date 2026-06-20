import HeroInformation from "../components/ui/Home/HeroInformation";
import ExperienceSection from "../components/ui/Home/ExperienceSection";
import ProjectSection from "../components/ui/Home/ProjectSection";
import ToolsSection from "../components/ui/Home/ToolsSection";
import ContactSection from "../components/ui/Home/ContactSection";
import { useRefs } from "../context/Context";

const Home = () => {
    const {homeRef, stackRef, projectsRef, contactRef} = useRefs();
    return (
        <main className="flex flex-col flex-1 border-black/10 border bg-white/90 rounded-none sm:rounded-[1.35rem] sm:ml-24 lg:ml-56 xl:ml-72 sm:my-6 sm:mr-6 px-5 sm:px-8 lg:px-16 xl:px-24 py-24 sm:py-20 2xl:pr-32 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur">
            <div ref={homeRef}>
                <HeroInformation/>
            </div>
            <ExperienceSection/>
            <div ref={stackRef}>
                <ToolsSection/>
            </div>
            <div ref={projectsRef}>
                <ProjectSection/>
            </div>
            <div ref={contactRef}>
                <ContactSection/>
            </div>
        </main>
    )
}

export default Home;
