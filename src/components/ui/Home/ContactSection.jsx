import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MailIcon = () => (
    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.75 6.75h14.5v10.5H4.75V6.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="m5.25 7.25 6.75 5 6.75-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PhoneIcon = () => (
    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8.1 5.2 9.55 8.5c.25.57.1 1.24-.36 1.65l-1.17 1.03a10.7 10.7 0 0 0 4.8 4.8l1.03-1.17c.41-.46 1.08-.61 1.65-.36l3.3 1.45c.68.3 1.05 1.04.88 1.76l-.32 1.37c-.18.78-.89 1.32-1.69 1.27C10.12 19.85 4.15 13.88 3.7 6.33c-.05-.8.49-1.51 1.27-1.69l1.37-.32c.72-.17 1.46.2 1.76.88Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const LinkedinIcon = () => (
    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6.6 9.8v8.45M11 18.25v-4.7c0-2.5 3.9-2.7 3.9 0v4.7M6.6 6.7v.05M4.75 4.75h14.5v14.5H4.75V4.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const GithubIcon = () => (
    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9.25 19.25c-3.5 1-3.5-1.75-5-2m10 4v-3.25c0-.9.08-1.25-.45-1.75 2.1-.23 4.32-1.02 4.32-4.65A3.6 3.6 0 0 0 17.1 9c.1-.25.45-1.3-.1-2.65 0 0-.83-.27-2.75 1a9.36 9.36 0 0 0-5 0c-1.92-1.27-2.75-1-2.75-1-.55 1.35-.2 2.4-.1 2.65a3.6 3.6 0 0 0-1.02 2.6c0 3.6 2.2 4.42 4.3 4.65-.42.38-.65.88-.65 1.75v3.25" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const contactLinks = [
    {
        label: "Email",
        value: "pewdiestuff@gmail.com",
        href: "mailto:pewdiestuff@gmail.com",
        icon: MailIcon,
    },
    {
        label: "Mobile",
        value: "+63 966 413 9289",
        href: "tel:+639664139289",
        icon: PhoneIcon,
    },
    {
        label: "LinkedIn",
        value: "fynn-borja",
        href: "https://www.linkedin.com/in/fynn-borja-4384851bb/",
        icon: LinkedinIcon,
    },
    {
        label: "GitHub",
        value: "fynn07",
        href: "https://github.com/fynn07",
        icon: GithubIcon,
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

const ContactSection = () => {
    const contactSectionRef = useRef(null);
    const isContactInView = useInView(contactSectionRef, { once: true });

    return (
        <section ref={contactSectionRef} className="flex flex-col gap-8 pt-24">
            <motion.div
                initial="hidden"
                animate={isContactInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <p className="font-poppins font-semibold text-2xl tracking-normal 2xl:text-3xl">Contact</p>
            </motion.div>

            <motion.div
                initial="hidden"
                animate={isContactInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm sm:p-8"
            >
                <motion.div variants={itemVariants} className="max-w-3xl">
                    <p className="font-poppins text-xl font-semibold text-primary 2xl:text-2xl">Let&apos;s build something useful.</p>
                    <p className="pt-4 font-poppins text-sm leading-7 text-secondary 2xl:text-base">
                        I&apos;m open to backend, full-stack, and AI engineering opportunities, especially work involving scalable systems, product-facing engineering, automation, and agentic AI workflows.
                    </p>
                </motion.div>

                <motion.div variants={containerVariants} className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 xl:grid-cols-4">
                    {contactLinks.map(({ label, value, href, icon: Icon }) => (
                        <motion.a
                            key={label}
                            variants={itemVariants}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noreferrer" : undefined}
                            className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background">
                                <Icon/>
                            </div>
                            <p className="pt-5 font-poppins text-xs font-semibold uppercase text-secondary">{label}</p>
                            <p className="pt-2 break-words font-poppins text-sm font-medium text-primary 2xl:text-base">{value}</p>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
