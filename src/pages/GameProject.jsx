import ProjectDetailLayout from "../components/ui/Projects/ProjectDetailLayout";

const GameProject = () => {
    return (
        <ProjectDetailLayout
            backgroundClass="bg-red-700"
            title="Exiled: Brotato Game Clone"
            category="Game Development | Java"
            image="./assets/exiled_game.png"
            imageAlt="Exiled"
            actions={[
                { label: "View Demo", href: "https://www.youtube.com/watch?v=VhhG4BvMYNo&ab_channel=Fynn" },
                { label: "Check Code", href: "https://github.com/fynn07/brotato-clone-game" },
            ]}
            techStack={[
                { src: "./assets/java_logo.png", alt: "Java" },
                { src: "./assets/sql_logo.png", alt: "MySQL" },
            ]}
            bullets={[
                "Top-down shooter game inspired by the likes of Brotato and Vampire Survivors.",
                "Made with the Java Game Development Framework LibGDX.",
                "Some assets were made with GIMP.",
                "JDBC was utilized to save high scores in a MySQL database.",
            ]}
            previousProject={{ to: "/tracktrove", title: "TrackTrove: Spotify Music Downloader" }}
            nextProject={{ to: "/visualizer", title: "Philippine Province Visualizer" }}
        />
    );
};

export default GameProject;
