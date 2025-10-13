import {motion} from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";


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

export const Hero = () => {
    return (
    <motion.section 
    id="home" 
    className="hero" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1}}
    transition={{ duration: 0.8, delay: 0.2}}
    >
     <div className="hero-container">
        <motion.div className="hero-content" 
        variants={staggerContainer} 
        initial="initial" 
        animate="animate"
        >
            <motion.div className="hero-badge">
                <span>👋 Hello, I'm</span>
            </motion.div>
                <motion.h1 className="glitch" 
                variants={fadeInUp} 
                whileHover={{ scale: 1.02 }}
                >
                  AnthonyNell
                </motion.h1>
                <motion.h2 className="hero-subtitle" variants={fadeInUp} >
                    {" "}
                    Front-End Developer
                </motion.h2>
                <motion.p className="hero-description" variants={fadeInUp}>
                  I want to be known as a developer who builds solutions that are both functional and meaningful. Throughout my projects i have learned the value of clean, user-centered design and teamwork in solving real problems. I aim to bring adaptability, attention to detail, and a growth mindset to every team I work with while continuously improving my skills.

                </motion.p>

                <motion.div 
                    className="cta-buttons" 
                    variants={staggerContainer}
                >
                    <motion.a href="#projects" className="cta-primary" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                        {" "}
                        View My Work
                    </motion.a>
                    <motion.a href="#contact" className="cta-secondary" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.a>

                </motion.div>
                <motion.div className="social-links" variants= {staggerContainer}>
                    <motion.a href="https://github.com/AnthonyNell27" target="_blank">
                        <i className="fab fa-github"></i> 
                    </motion.a>
                      <motion.a href="https://www.linkedin.com/in/anthonydagamac/"  target="_blank">
                        <i className="fab fa-linkedin"> </i> 
                    </motion.a>
                </motion.div>
            </motion.div>   
            <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="code-display">
                 <SyntaxHighlighter 
                 language="typescript" 
                 customStyle={{
                    margin:0,
                    padding: "2rem",
                    height: "100%",
                    borderRadius: "20px",
                    background: "rgba(22, 26, 34, 0.8)",
                    backdropFilter: "blur(10px)",
                    marginBottom: 50,
                    /*boxShadow: "0 0 15px rgba(59, 15, 112, 0.6)",*/
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "inset 0 0 8px rgba(255, 255, 255, 0.05)",
                 }}
                 style={vscDarkPlus}>
                    {`const aboutMe: DevProfile = {
  codename: "AnthonyNell",
  origin: "Based in the Philippines, Building for the W🌍rld",
  role: "Front-End Developer",
  stack: {
    languages: ["HTML•CSS" & "JavaScript"],
    frameworks: ["TailwindCSS" & "React"],
  },
  traits: [
    "fueled by caffeine and curiosity",
    "dark mode enjoyer",
    "caffeine-assisted creativity"
    "time-conscious developer" 
  ],
  missionStatement:
    "Driven to learn, adapt, and build with purpose.",
  availability: "Available for hire",
};`}
                 </SyntaxHighlighter>
                </div>
                <motion.div 
                className="floating-card" 
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="card-content">
                        <span className="card-icon">💻</span>
                        <span className="card-text">
                            {" "}
                            CHİLLing & coding with coffee!
                        </span>
                        <span className="card-icon">☕︎</span>
                    </div>
                </motion.div>
            </motion.div>
       </div>
    </motion.section>
    );
};