import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ToolsSection = () => {
  const clientRef = useRef(null);
  const isClientInView = useInView(clientRef, { once: true });

  const serverRef = useRef(null);
  const isServerInView = useInView(serverRef, { once: true });

  const toolsRef = useRef(null);
  const isToolsInView = useInView(toolsRef, { once: true });

  const othersRef = useRef(null);
  const isOthersInView = useInView(othersRef, { once: true });

  return (
    <div className="mt-4 mb-28 flex flex-col gap-8">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <p className="font-poppins font-semibold text-2xl 2xl:text-3xl">Tech Stack</p>
      </motion.div>

      <motion.div
        ref={clientRef}
        initial="hidden"
        animate={isClientInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8"
      >
        <motion.p variants={itemVariants} className="font-poppins font-medium text-lg 2xl:text-xl">Client Side</motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-3"
        >
          {[
            { src: "./assets/html_logo.png", name: "HTML", desc: "Web Markup" },
            { src: "./assets/css_logo.png", name: "CSS", desc: "Style Sheets" },
            { src: "./assets/javascript_logo.png", name: "Javascript", desc: "Client-Side Scripting" },
            { src: "./assets/react_logo.png", name: "React", desc: "Dynamic Development" },
            { src: "./assets/tailwind_logo.png", name: "Tailwind", desc: "Utility Framework" },
            { src: "./assets/redux_logo.png", name: "Redux", desc: "State Management" },
          ].map(({ src, name, desc }, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex gap-4">
              <img loading="lazy" className="w-12 2xl:w-14" src={src} alt={`${name} logo`} />
              <div className="flex flex-col">
                <p className="font-poppins font-medium 2xl:text-lg">{name}</p>
                <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        ref={serverRef}
        initial="hidden"
        animate={isServerInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8"
      >
        <motion.p variants={itemVariants} className="font-poppins font-medium text-lg 2xl:text-xl">Server Side</motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-3"
        >
          {[
            { src: "./assets/sql_logo.png", name: "MySQL", desc: "Relational Database" },
            { src: "./assets/postgres_logo.png", name: "Postgres", desc: "Relational Database" },
            { src: "./assets/express_logo.png", name: "Express", desc: "API Development" },
            { src: "./assets/node_logo.png", name: "Node", desc: "Runtime Environment" },
            { src: "./assets/aws_logo.png", name: "AWS S3", desc: "File Hosting" },
            { src: "./assets/php_logo.png", name: "PHP", desc: "Server-Side Scripting" },
          ].map(({ src, name, desc }, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex gap-4">
              <img loading="lazy" className="w-12 2xl:w-14" src={src} alt={`${name} logo`} />
              <div className="flex flex-col">
                <p className="font-poppins font-medium 2xl:text-lg">{name}</p>
                <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        ref={toolsRef}
        initial="hidden"
        animate={isToolsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8"
      >
        <motion.p variants={itemVariants} className="font-poppins font-medium text-lg 2xl:text-xl">Tools</motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-3"
        >
          {[
            { src: "./assets/git_logo.png", name: "Git", desc: "Version Control" },
            { src: "./assets/postman_logo.png", name: "Postman", desc: "API Testing" },
            { src: "./assets/vim_logo.png", name: "Vim Motions", desc: "Utility" },
          ].map(({ src, name, desc }, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex gap-4">
              <img loading="lazy" className="w-12 2xl:w-14" src={src} alt={`${name} logo`} />
              <div className="flex flex-col">
                <p className="font-poppins font-medium 2xl:text-lg">{name}</p>
                <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        ref={othersRef}
        initial="hidden"
        animate={isOthersInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8"
      >
        <motion.p variants={itemVariants} className="font-poppins font-medium text-lg 2xl:text-xl">Others</motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-8"
        >
          {[
            { src: "./assets/python_logo.png", name: "Python", desc: "Gen Purpose / Scripting" },
            { src: "./assets/java_logo.png", name: "Java", desc: "OOP" },
          ].map(({ src, name, desc }, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex gap-4">
              <img loading="lazy" className="w-12 2xl:w-14" src={src} alt={`${name} logo`} />
              <div className="flex flex-col">
                <p className="font-poppins font-medium 2xl:text-lg">{name}</p>
                <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ToolsSection;
