import { motion } from "framer-motion";
import background from "../assets/about-bg.png";
import projBg from "../assets/proj-bg.png";
import "../App.css";

function About() {
  return (
    <motion.div
      className="about-scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <section className="section-slide">
        <img src={background} className="ab-background" />
      </section>

      <section className="section-slide">
        <img src={projBg} className="proj-background" />
      </section>
    </motion.div>
  );
}

export default About;