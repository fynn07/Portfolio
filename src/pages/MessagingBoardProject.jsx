import ProjectDetailLayout from "../components/ui/Projects/ProjectDetailLayout";

const MessagingBoardProject = () => {
    return (
        <ProjectDetailLayout
            backgroundClass="bg-blue-800"
            title="Anonymous Messaging Board"
            category="Full-Stack Web Application"
            image="./assets/messaging_board.png"
            imageAlt="Anonymous Messaging Board"
            actions={[
                { label: "Check Live", href: "https://messaging-board-nine.vercel.app/" },
                { label: "Check Code", href: "https://github.com/fynn07/messaging-board" },
            ]}
            techStack={[
                { src: "./assets/node_logo.png", alt: "Node" },
                { src: "./assets/react_logo.png", alt: "React" },
                { src: "./assets/tailwind_logo.png", alt: "Tailwind" },
                { src: "./assets/postgres_logo.png", alt: "Postgres" },
                { src: "./assets/express_logo.png", alt: "Express" },
            ]}
            bullets={[
                "A platform for anonymous users to post messages and engage in real-time chat.",
                "Technology involves the PERN (Postgres, Express, React and Node) Stack.",
                "Allows for real-time rendering of chats.",
                "Utilizes a Rate Limiter to prevent spam and abuse.",
            ]}
            previousProject={{ to: "/cebu-underground-cave", title: "Cebu Underground Cave" }}
            nextProject={{ to: "/gleam", title: "Gleam Band Site" }}
        />
    );
};

export default MessagingBoardProject;
