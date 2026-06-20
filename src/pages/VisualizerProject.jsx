import ProjectDetailLayout from "../components/ui/Projects/ProjectDetailLayout";

const VisualizerProject = () => {
    return (
        <ProjectDetailLayout
            backgroundClass="bg-background"
            title="Philippine Province Visualizer"
            category="Python Script"
            image="./assets/philippines_visualizer.jpeg"
            imageAlt="Province visualizer"
            actions={[
                { label: "Check Code", href: "https://github.com/fynn07/philippines-province-visualizer" },
            ]}
            techStack={[
                { src: "./assets/python_logo.png", alt: "Python" },
            ]}
            bullets={[
                "Python program that allows users to interactively learn about the provinces of the Philippines.",
                "Pandas is utilized to read and display the coordinates and names of provinces from a CSV file depending on the user input.",
                "The dataset was created using an automation tool I wrote that would provide the X and Y locations of the province through the click of a button. The name of the provinces were processed manually.",
            ]}
            previousProject={{ to: "/exiled", title: "Exiled: Brotato Game Clone" }}
            nextProject={{ to: "/leetcode", title: "Leetcode Solved Problems Compilation" }}
        />
    );
};

export default VisualizerProject;
