import ProjectDetailLayout from "../components/ui/Projects/ProjectDetailLayout";

const TrackTroveProject = () => {
    return (
        <ProjectDetailLayout
            backgroundClass="bg-orange-200"
            title="TrackTrove: Spotify Music Downloader"
            category="Python Script"
            image="./assets/tracktrove.png"
            imageAlt="TrackTrove"
            actions={[
                { label: "View Demo", href: "https://www.youtube.com/watch?v=ZQzyLCHW30Q&ab_channel=Fynn" },
                { label: "Check Code", href: "https://github.com/fynn07/TrackTrove" },
            ]}
            techStack={[
                { src: "./assets/python_logo.png", alt: "Python" },
            ]}
            bullets={[
                "An application that allows users to download music from Spotify links.",
                "User Interface was made using Tkinter.",
                "Utilizes the Spotify API to fetch song data.",
                "Song data is funnelled through the Pytube library to allow for the downloading of MP3 files.",
            ]}
            previousProject={{ to: "/book-tracker", title: "FS Book Tracker" }}
            nextProject={{ to: "/exiled", title: "Exiled: Brotato Game Clone" }}
        />
    );
};

export default TrackTroveProject;
