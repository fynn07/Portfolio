import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        company: "Symph",
        role: "Forward Deployed AI Engineer",
        period: "May 2026 - Present",
        bullets: [
            "Architected and delivered an enterprise logistics platform for a leading FMCG company in the Philippines.",
            "Led client-facing discovery sessions to identify pain points, analyze bottlenecks, and design scalable technical solutions.",
            "Implemented agentic AI workflows using LLMs, MCP integrations, and AI-assisted engineering practices.",
        ],
    },
    {
        company: "Symph",
        role: "Mid Level Software Engineer",
        period: "Mar 2025 - Present",
        bullets: [
            "Led development for one of the company's highest revenue-generating projects.",
            "Built application modules for a Singapore-based client, including user management, RBAC, and automated email systems.",
            "Developed full-stack applications using Next.js, NestJS, and GCP for large client projects.",
        ],
    },
    {
        company: "Redmedia Studio",
        role: "Software Engineer",
        period: "Nov 2024 - Mar 2025",
        bullets: [
            "Developed a queueing system using Next.js, NestJS, and Supabase for client management.",
            "Designed role-based authentication and access control for secure employee usage.",
            "Optimized Supabase database queries, reducing query response rate by 15%.",
        ],
    },
    {
        company: "Symph · Internship",
        role: "Software Engineer",
        period: "Jul 2024 - Nov 2024",
        bullets: [
            "Developed responsive web applications using React.js, Next.js, and TailwindCSS for large-scale companies.",
            "Implemented RESTful APIs across different projects using NestJS and Node.js.",
            "Participated in Agile Scrum ceremonies including sprint planning, daily stand-ups, and retrospectives.",
            "Transitioned a project's web application framework from webapp2 to Flask.",
        ],
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
            staggerChildren: 0.14,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const ExperienceSection = () => {
    const experienceRef = useRef(null);
    const isExperienceInView = useInView(experienceRef, { once: true });

    return (
        <section ref={experienceRef} className="mb-28 flex flex-col gap-8">
            <motion.div
                initial="hidden"
                animate={isExperienceInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <p className="font-poppins font-semibold text-2xl tracking-normal 2xl:text-3xl">Experience</p>
            </motion.div>

            <motion.div
                initial="hidden"
                animate={isExperienceInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="flex flex-col gap-5"
            >
                {experiences.map(({ company, role, period, bullets }) => (
                    <motion.article
                        key={`${company}-${role}`}
                        variants={itemVariants}
                        className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-7"
                    >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <p className="font-poppins text-sm font-medium text-shit_brown">{company}</p>
                                <h3 className="pt-1 font-poppins text-lg font-semibold text-primary 2xl:text-xl">{role}</h3>
                            </div>
                            <p className="font-poppins text-sm font-medium text-secondary">{period}</p>
                        </div>

                        <ul className="list-disc space-y-2 pl-5 pt-5">
                            {bullets.map((bullet) => (
                                <li key={bullet} className="font-poppins text-sm leading-7 text-secondary 2xl:text-base">
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
};

export default ExperienceSection;
