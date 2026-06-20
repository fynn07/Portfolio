import ProjectDetailLayout from "../components/ui/Projects/ProjectDetailLayout";

const UndergroundCaveProject = () => {
    return (
        <ProjectDetailLayout
            backgroundClass="bg-cebu_underground"
            title="Cebu Underground Cave"
            category="Full-Stack Web Application"
            image="./assets/cebu_underground.png"
            imageAlt="Cebu Underground Cave"
            actions={[
                { label: "Check Live", href: "https://cebu-underground-cave.vercel.app/" },
                { label: "Check Code", href: "https://github.com/fynn07/cebu-underground-cave" },
            ]}
            techStack={[
                { src: "./assets/react_logo.png", alt: "React" },
                { src: "./assets/node_logo.png", alt: "Node" },
                { src: "./assets/express_logo.png", alt: "Express" },
                { src: "./assets/tailwind_logo.png", alt: "Tailwind" },
                { src: "./assets/aws_logo.png", alt: "AWS S3" },
                { src: "./assets/postgres_logo.png", alt: "Postgres" },
            ]}
            bullets={[
                "Social media site designed to provide a platform for Cebuanos to connect.",
                "Technology involves the PERN (Postgres, Express, React and Node) Stack.",
                "Implements JWT for secure user authentication.",
                "Photos are stored in the cloud with AWS S3 Buckets.",
                "Deployed using Vercel and Supabase.",
            ]}
            previousProject={{ to: "/leetcode", title: "Leetcode Solved Problems Compilation" }}
            nextProject={{ to: "/messaging-board", title: "Anonymous Messaging Board" }}
        />
    );
};

export default UndergroundCaveProject;
