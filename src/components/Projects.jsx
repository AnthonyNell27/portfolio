import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('dist/projects/portfolio.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Modern & Minimalist Personal Portfolio </h3>
          <p>
            A fast, responsive personal portfolio built with Vite, React.js, and Tailwind CSS, showcasing projects, skills, and contact details in a clean, modern design optimized for performance.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
            <span>Vite</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('dist/projects/movie.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Movie Discovery Web Application</h3>
          <p>
            A responsive movie discovery web app built with Vite, React.js, and Tailwind CSS, featuring real-time search, trending titles, and a modern dark-themed UI for effortless film exploration.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
            <span>Vite</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('dist/projects/sms.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Student Management System — Admin Dashboard</h3>
          <p>
            A full-featured Student Management System built with React.js and Tailwind CSS, featuring an intuitive admin dashboard for managing user accounts, roles, and audit logs with light/dark mode support.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>HTML•CSS</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};