import { motion } from "framer-motion";
import { flushSync } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import ArrowSvg from "../Home/svg/ArrowSvg";
import BackSVG from "./BackSVG";

const ProjectDetailLayout = ({
    backgroundClass,
    title,
    category,
    image,
    imageAlt,
    actions = [],
    techStack = [],
    bullets = [],
    previousProject,
    nextProject,
}) => {
    const navigate = useNavigate();
    const arrowClass = "group flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-white/95 shadow-[0_18px_45px_rgba(17,17,17,0.18)] ring-1 ring-white/70 backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-primary hover:shadow-[0_22px_55px_rgba(17,17,17,0.24)] xl:h-16 xl:w-16 [&_svg]:h-5 [&_svg]:w-7";

    const navigateWithTransition = (event, to) => {
        if (!document.startViewTransition) {
            return;
        }

        event.preventDefault();
        document.startViewTransition(() => {
            flushSync(() => {
                navigate(to);
            });
        });
    };

    return (
        <main className={`${backgroundClass} project-detail-page relative min-h-screen w-screen overflow-y-auto p-4 sm:p-6`}>
            {previousProject && (
                <Link
                    to={previousProject.to}
                    onClick={(event) => navigateWithTransition(event, previousProject.to)}
                    className={`${arrowClass} fixed left-[max(1.5rem,calc((100vw-72rem)/4))] top-1/2 z-10 hidden -translate-y-1/2 xl:flex`}
                    aria-label={`Previous project: ${previousProject.title}`}
                    title={previousProject.title}
                >
                    <span className="rotate-180">
                        <ArrowSvg/>
                    </span>
                </Link>
            )}

            {nextProject && (
                <Link
                    to={nextProject.to}
                    onClick={(event) => navigateWithTransition(event, nextProject.to)}
                    className={`${arrowClass} fixed right-[max(1.5rem,calc((100vw-72rem)/4))] top-1/2 z-10 hidden -translate-y-1/2 xl:flex`}
                    aria-label={`Next project: ${nextProject.title}`}
                    title={nextProject.title}
                >
                    <ArrowSvg/>
                </Link>
            )}

            <motion.section
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="project-detail-panel mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-6xl flex-col rounded-2xl border border-white/30 bg-white/95 p-5 shadow-2xl backdrop-blur sm:min-h-[calc(100vh-3rem)] sm:p-8"
            >
                <nav className="flex flex-wrap items-center justify-between gap-3">
                    <Link to="/" className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                        <BackSVG/>
                        <span className="font-poppins text-xs text-primary">Back to Main Page</span>
                    </Link>

                    <div className="flex gap-2 xl:hidden">
                        {previousProject && (
                            <Link
                                to={previousProject.to}
                                onClick={(event) => navigateWithTransition(event, previousProject.to)}
                                className={arrowClass}
                                aria-label={`Previous project: ${previousProject.title}`}
                                title={previousProject.title}
                            >
                                <span className="rotate-180">
                                    <ArrowSvg/>
                                </span>
                            </Link>
                        )}
                        {nextProject && (
                            <Link
                                to={nextProject.to}
                                onClick={(event) => navigateWithTransition(event, nextProject.to)}
                                className={arrowClass}
                                aria-label={`Next project: ${nextProject.title}`}
                                title={nextProject.title}
                            >
                                <ArrowSvg/>
                            </Link>
                        )}
                    </div>
                </nav>

                <div className="grid flex-1 gap-8 pt-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(17rem,0.75fr)] lg:items-start">
                    <div className="flex flex-col gap-6">
                        <header className="max-w-3xl">
                            {category && (
                                <p className="font-poppins text-xs font-semibold uppercase text-secondary">{category}</p>
                            )}
                            <h1 className="pt-2 font-poppins text-3xl font-semibold leading-tight text-primary sm:text-4xl">
                                {title}
                            </h1>
                        </header>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08, duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden rounded-2xl border border-black/10 bg-background shadow-sm"
                        >
                            <img className="h-full max-h-[32rem] w-full object-cover" src={image} alt={imageAlt || title} />
                        </motion.div>

                        <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-6">
                            <p className="font-poppins text-lg font-semibold text-primary">Overview</p>
                            <ul className="list-disc space-y-3 pl-5 pt-4">
                                {bullets.map((bullet) => (
                                    <li key={bullet} className="font-poppins text-sm leading-7 text-primary 2xl:text-base">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <aside className="flex flex-col gap-5 lg:sticky lg:top-8">
                        {actions.length > 0 && (
                            <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                                <p className="font-poppins text-sm font-semibold text-primary">Links</p>
                                <div className="flex flex-col gap-3 pt-4">
                                    {actions.map(({ label, href }, index) => (
                                        <a
                                            key={href}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`rounded-xl border border-black/10 px-4 py-3 text-center font-poppins text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${index === 0 ? "bg-primary text-white" : "bg-white text-primary"}`}
                                        >
                                            {label}
                                        </a>
                                    ))}
                                </div>
                            </section>
                        )}

                        {techStack.length > 0 && (
                            <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                                <p className="font-poppins text-sm font-semibold text-primary">Tech Stack</p>
                                <div className="grid grid-cols-3 gap-4 pt-5 sm:grid-cols-4 lg:grid-cols-3">
                                    {techStack.map(({ src, alt }) => (
                                        <div key={src} className="flex aspect-square items-center justify-center rounded-xl bg-background p-3">
                                            <img className="h-full w-full object-contain" src={src} alt={alt} />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </aside>
                </div>
            </motion.section>
        </main>
    );
};

export default ProjectDetailLayout;
