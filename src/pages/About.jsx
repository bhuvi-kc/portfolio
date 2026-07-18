import { motion } from "framer-motion";
import background from "../assets/about-bg.png";
import projBg from "../assets/proj-bg.png";
import projs1 from "../assets/kanye-slide.png";
import projs2 from "../assets/apple-slide.png";
import projs3 from "../assets/portfolio-slide.png";
import projj from "../assets/journey-slide.png";
import projc from "../assets/contact-slide.png";
import githubNote from "../assets/git-link.png";
import "../App.css";

const REPOS = {
  kanye: "https://github.com/bhuvi-kc/kanye-west",
  apple: "https://github.com/bhuvi-kc/appleWebsite-frontendRedo",
  portfolio: "https://github.com/bhuvi-kc/portfolio",
};

const SOCIALS = {
  github: "https://github.com/bhuvi-kc",
  linkedin: "https://www.linkedin.com/in/bhuvi0149/",
  instagram: "https://www.instagram.com/?hl=en",
};

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

      <section className="section-slide">
        <div className="proj-frame">
          <img src={projs1} className="proj-s1" />
          <a
            href={REPOS.kanye}
            target="_blank"
            rel="noopener noreferrer"
            className="note-link note-link-s1"
          >
            <img src={githubNote} className="note-img" />
          </a>
        </div>
      </section>

      <section className="section-slide">
        <div className="proj-frame">
          <img src={projs2} className="proj-s2" />
          <a
            href={REPOS.apple}
            target="_blank"
            rel="noopener noreferrer"
            className="note-link note-link-s2"
          >
            <img src={githubNote} className="note-img" />
          </a>
        </div>
      </section>

      <section className="section-slide">
        <div className="proj-frame">
          <img src={projs3} className="proj-s3" />
          <a
            href={REPOS.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="note-link note-link-s3"
          >
            <img src={githubNote} className="note-img" />
          </a>
        </div>
      </section>

      <section className="section-slide">
        <img src={projj} className="proj-j" />
      </section>

      <section className="section-slide">
        <div className="proj-frame">
          <img src={projc} className="proj-c" />
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hotspot icon-github"
          />
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hotspot icon-linkedin"
          />
          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hotspot icon-instagram"
          />
        </div>
      </section>
    </motion.div>
  );
}

export default About;