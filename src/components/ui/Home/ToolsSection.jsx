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

const sectionClass = "flex flex-col border border-black/10 gap-8 rounded-2xl bg-white/70 px-6 py-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:px-8";
const toolItemClass = "flex gap-4 rounded-xl p-2 transition-colors duration-200 hover:bg-background/70";
const badgeClass = "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary px-2 text-center font-poppins text-[0.65rem] font-semibold leading-tight text-white 2xl:h-14 2xl:w-14";

const ToolsSection = () => {
  const clientRef = useRef(null);
  const isClientInView = useInView(clientRef, { once: true });

  const serverRef = useRef(null);
  const isServerInView = useInView(serverRef, { once: true });

  const toolsRef = useRef(null);
  const isToolsInView = useInView(toolsRef, { once: true });

  const aiRef = useRef(null);
  const isAiInView = useInView(aiRef, { once: true });

  const othersRef = useRef(null);
  const isOthersInView = useInView(othersRef, { once: true });

  return (
    <section className="mt-4 mb-28 flex flex-col gap-8">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <p className="font-poppins font-semibold text-2xl tracking-normal 2xl:text-3xl">Tech Stack</p>
      </motion.div>

      <motion.div
        ref={clientRef}
        initial="hidden"
        animate={isClientInView ? "visible" : "hidden"}
        variants={containerVariants}
        className={sectionClass}
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
            { src: "./assets/nextjs_logo.svg", name: "Next.js", desc: "React Framework" },
            { src: "./assets/tailwind_logo.png", name: "Tailwind", desc: "Utility Framework" },
            { src: "./assets/redux_logo.png", name: "Redux", desc: "State Management" },
          ].map(({ src, badge, name, desc }, idx) => (
            <motion.div key={idx} variants={itemVariants} className={toolItemClass}>
              {src ? (
                <img loading="lazy" className="h-12 w-12 rounded-xl object-contain 2xl:h-14 2xl:w-14" src={src} alt={`${name} logo`} />
              ) : (
                <div className={badgeClass}>{badge}</div>
              )}
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
        className={sectionClass}
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
            { src: "./assets/nestjs_logo.svg", name: "NestJS", desc: "Backend Framework" },
            { src: "./assets/sql_logo.png", name: "SQL", desc: "Query Language" },
            { src: "./assets/rest_api_icon.png", name: "REST APIs", desc: "API Architecture" },
            { src: "./assets/gcp_logo.svg", name: "GCP", desc: "Cloud Platform" },
            { src: "./assets/aws_logo.png", name: "AWS S3", desc: "File Hosting" },
            { src: "./assets/php_logo.png", name: "PHP", desc: "Server-Side Scripting" },
          ].map(({ src, badge, name, desc }, idx) => (
            <motion.div key={idx} variants={itemVariants} className={toolItemClass}>
              {src ? (
                <img loading="lazy" className="h-12 w-12 rounded-xl object-contain 2xl:h-14 2xl:w-14" src={src} alt={`${name} logo`} />
              ) : (
                <div className={badgeClass}>{badge}</div>
              )}
              <div className="flex flex-col">
                <p className="font-poppins font-medium 2xl:text-lg">{name}</p>
                <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        ref={aiRef}
        initial="hidden"
        animate={isAiInView ? "visible" : "hidden"}
        variants={containerVariants}
        className={sectionClass}
      >
        <motion.p variants={itemVariants} className="font-poppins font-medium text-lg 2xl:text-xl">AI Technologies</motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-3"
        >
          {[
            { src: "./assets/llm_icon.png", name: "LLMs", desc: "Language Models" },
            { src: "./assets/ai_agents_icon.webp", name: "AI Agents", desc: "Autonomous Tool Use" },
            { src: "./assets/agentic_workflows_icon.png", name: "Agentic Workflows", desc: "Multi-Step Automation" },
            { src: "./assets/mcp_logo.png", name: "MCP", desc: "Model Context Protocol" },
            { src: "./assets/claude_logo.svg", name: "Claude Code", desc: "AI Coding Assistant" },
            { src: "./assets/openai_logo.svg", name: "OpenAI", desc: "AI Platform" },
          ].map(({ src, name, desc }, idx) => (
            <motion.div key={idx} variants={itemVariants} className={toolItemClass}>
              <img loading="lazy" className="h-12 w-12 rounded-xl object-contain 2xl:h-14 2xl:w-14" src={src} alt={`${name} logo`} />
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
        className={sectionClass}
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
            <motion.div key={idx} variants={itemVariants} className={toolItemClass}>
              <img loading="lazy" className="h-12 w-12 rounded-xl object-contain 2xl:h-14 2xl:w-14" src={src} alt={`${name} logo`} />
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
        className={sectionClass}
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
            <motion.div key={idx} variants={itemVariants} className={toolItemClass}>
              <img loading="lazy" className="h-12 w-12 rounded-xl object-contain 2xl:h-14 2xl:w-14" src={src} alt={`${name} logo`} />
              <div className="flex flex-col">
                <p className="font-poppins font-medium 2xl:text-lg">{name}</p>
                <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ToolsSection;
