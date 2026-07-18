import { motion } from "framer-motion";
import background from "../assets/about-bg.png";
import projBg from "../assets/proj-bg.png";
import projs1 from "../assets/kanye-slide.png";
import projs2 from "../assets/apple-slide.png";
import projs3 from "../assets/portfolio-slide.png";
import projj from "../assets/journey-slide.png";
import projc from "../assets/contact-slide.png";
import githubNote from "../assets/git-link.png";
import bvpLogo from "../assets/bvp.png";
import sggsLogo from "../assets/sggs.png";
import tietLogo from "../assets/tiet.png";
import "../App.css";

const REPOS = {
  kanye: "https://github.com/bhuvi-kc/kanye-west",
  apple: "https://github.com/bhuvi-kc/appleWebsite-frontendRedo",
  portfolio: "https://github.com/bhuvi-kc/portfolio",
};

const SOCIALS = {
  github: "https://github.com/bhuvi-kc",
  linkedin: "https://www.linkedin.com/in/bhuvi0149/",
  instagram: "https://www.instagram.com/ft_bhxviii/?hl=en",
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
        <div className="proj-frame">
            <img src={projj} className="proj-j" />

            <div className="edu-box box-1">
            <img src={bvpLogo} className="edu-logo" />
            <div className="edu-text">
                <h3>Bhavan Vidyalaya, Panchkula</h3>
                <span className="strip-years">2019 – 2023</span>
                <p>
                Completed my schooling at Bhavan Vidyalaya, where I built a
                strong academic foundation and grew my interest in technology
                and coding. I also completed my class 10th from here.
                </p>
            </div>
            </div>

            <div className="edu-box box-2">
            <img src={sggsLogo} className="edu-logo" />
            <div className="edu-text">
                <h3>Sri Guru Gobind Singh Public School, Chandigarh</h3>
                <span className="strip-years">2024 – 2025</span>
                <p>
                Studied at SGGS school, exploring myself and expanding my
                niche. I also completed my class 12th from here.
                </p>
            </div>
            </div>

            <div className="edu-box box-3">
            <img src={tietLogo} className="edu-logo" />
            <div className="edu-text">
                <h3>Thapar Institute of Engineering and Technology</h3>
                <span className="strip-years">2025 – 29</span>
                <p>
                Continuing my academic journey at TIET, focusing on
                programming, engineering fundamentals, and most importantly,
                finding myself and growing my interest in the binary world.
                </p>
            </div>
            </div>
        </div>
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