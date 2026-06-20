import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowSvg from "./svg/ArrowSvg";
import { useInView } from "react-intersection-observer";

const projects = [
    {
        to: "/cebu-underground-cave",
        image: "./assets/cebu_underground.png",
        type: "Full-Stack Web Application",
        title: "Cebu Underground Cave (Social Media Site)",
    },
    {
        to: "/messaging-board",
        image: "./assets/messaging_board.png",
        type: "Full-Stack Web Application",
        title: "Anonymous Messaging Board",
    },
    {
        to: "/gleam",
        image: "./assets/gleam_website.png",
        type: "Front-End Web Application",
        title: "Gleam Band Website",
    },
    {
        to: "/book-tracker",
        image: "./assets/book_tracker.png",
        type: "Full-Stack Application",
        title: "Book Tracker",
    },
    {
        to: "/tracktrove",
        image: "./assets/tracktrove.png",
        type: "Python Script",
        title: "TrackTrove (Spotify Music Downloader)",
    },
    {
        to: "/exiled",
        image: "./assets/exiled_game.png",
        type: "Game Development | Java",
        title: "Exiled (Brotato Clone Game)",
    },
    {
        to: "/visualizer",
        image: "./assets/philippines_visualizer.jpeg",
        type: "Python Script",
        title: "Philippine Province Visualizer",
    },
    {
        to: "/leetcode",
        image: "./assets/leetcode_image.png",
        type: "Data Structures and Algorithms",
        title: "Leetcode Solved Problems",
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const ProjectSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section ref={ref} className="flex flex-col pt-8 gap-11">
            <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="font-poppins font-semibold text-2xl 2xl:text-3xl"
            >
                Projects
            </motion.p>
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="grid grid-cols-1 gap-6 justify-items-center xl:grid-cols-2 2xl:grid-cols-3"
            >
                {projects.map(({ to, image, type, title }) => (
                    <motion.div key={to} variants={itemVariants} className="w-full max-w-sm">
                        <Link
                            to={to}
                            className="group flex h-full min-h-72 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex w-full flex-col">
                                <div className="h-48 overflow-hidden bg-background sm:h-52">
                                    <img
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        src={image}
                                        alt={`${title} preview`}
                                    />
                                </div>
                                <div className="flex flex-1 flex-col gap-2 p-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="font-poppins text-xs font-medium uppercase text-secondary">
                                            {type}
                                        </p>
                                        <span className="rounded-full bg-background p-2 transition-colors duration-200 group-hover:bg-primary">
                                            <ArrowSvg />
                                        </span>
                                    </div>
                                    <p className="font-poppins font-semibold text-sm leading-6 text-primary sm:text-base">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ProjectSection;
