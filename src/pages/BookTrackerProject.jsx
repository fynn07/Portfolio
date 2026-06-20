import ProjectDetailLayout from "../components/ui/Projects/ProjectDetailLayout";

const BookTrackerProject = () => {
    return (
        <ProjectDetailLayout
            backgroundClass="bg-orange-400"
            title="FS Book Tracker"
            category="Full-Stack Application"
            image="./assets/book_tracker.png"
            imageAlt="Book Tracker"
            actions={[
                { label: "View Demo", href: "https://www.youtube.com/watch?v=yY943woNK6g&ab_channel=Fynn" },
                { label: "Check Code", href: "https://github.com/fynn07/FSbooktracker" },
            ]}
            techStack={[
                { src: "./assets/java_logo.png", alt: "Java" },
                { src: "./assets/sql_logo.png", alt: "MySQL" },
            ]}
            bullets={[
                "An application to help users track and manage their books.",
                "Made with Java, JavaFX was utilized for the user interface.",
                "JDBC and SQL are used for database connectivity and management.",
                "Involves all CRUD operations for the backend.",
            ]}
            previousProject={{ to: "/gleam", title: "Gleam Band Site" }}
            nextProject={{ to: "/tracktrove", title: "TrackTrove: Spotify Music Downloader" }}
        />
    );
};

export default BookTrackerProject;
