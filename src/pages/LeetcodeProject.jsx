import ProjectDetailLayout from "../components/ui/Projects/ProjectDetailLayout";

const LeetcodeProject = () => {
    return (
        <ProjectDetailLayout
            backgroundClass="bg-gray-400"
            title="Leetcode Solved Problems Compilation"
            category="Data Structures and Algorithms"
            image="./assets/leetcode_image.png"
            imageAlt="Leetcode"
            actions={[
                { label: "View Repository", href: "https://github.com/fynn07/LeetCode" },
            ]}
            bullets={[
                "A bunch of Data Structures and Algorithm problems that I solved for fun.",
            ]}
            previousProject={{ to: "/visualizer", title: "Philippine Province Visualizer" }}
            nextProject={{ to: "/cebu-underground-cave", title: "Cebu Underground Cave" }}
        />
    );
};

export default LeetcodeProject;
