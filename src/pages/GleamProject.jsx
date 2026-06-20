import ProjectDetailLayout from "../components/ui/Projects/ProjectDetailLayout";

const GleamProject = () => {
    return (
        <ProjectDetailLayout
            backgroundClass="bg-teal-800"
            title="Gleam Band Site"
            category="Front-End Web Application"
            image="./assets/gleam_website.png"
            imageAlt="Gleam Website"
            actions={[
                { label: "Check Live", href: "https://gleam-rho.vercel.app/" },
                { label: "Check Code", href: "https://github.com/fynn07/gleam-website" },
            ]}
            techStack={[
                { src: "./assets/react_logo.png", alt: "React" },
                { src: "./assets/tailwind_logo.png", alt: "Tailwind" },
                { src: "./assets/redux_logo.png", alt: "Redux" },
            ]}
            bullets={[
                "An official page for my band Gleam to host our songs, merch, and gig information.",
                "Uses Redux for State Management.",
                "Developed and integrated a music player to play the band's songs.",
            ]}
            previousProject={{ to: "/messaging-board", title: "Anonymous Messaging Board" }}
            nextProject={{ to: "/book-tracker", title: "FS Book Tracker" }}
        />
    );
};

export default GleamProject;
