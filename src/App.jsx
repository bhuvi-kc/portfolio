import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import background from "./assets/background.png";
import cursor from "./assets/cursor.png";
import discoBall from "./assets/disco-ball.png";
import name from "./assets/name.png";
import moon from "./assets/moon.png";
import stars from "./assets/stars.png";
import About from "./pages/About";
import './App.css'

function Intro() {
  const [stage, setStage] = useState("idle"); // idle -> arrived -> clicked
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const clickSound = useRef(new Audio("/click.mp3"));
  const nameRef = useRef(null);

  const measureName = () => {
    if (nameRef.current) {
      const rect = nameRef.current.getBoundingClientRect();
      setTarget({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  };

  const handleCursorArrive = () => {
    setStage("arrived");
    setTimeout(() => {
      setStage("clicked");
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(() => {});
    }, 500);
  };

  const handlePopDownComplete = () => {
    if (stage !== "clicked") return;
    navigate("/about");
  };

  return (
    <motion.div
      className="intro"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={background} className="background" />
      <img src={stars} className="stars" />
      <img src={moon} className="moon" />
      <img src={discoBall} className="disco" />

      <div className="twinkles">
        <span></span><span></span><span></span><span></span>
      </div>

      <div className="name-wrap">
        <motion.img
          ref={nameRef}
          src={name}
          className="name"
          onLoad={measureName}
          animate={
            stage === "arrived"
              ? { scale: 1.15 }
              : stage === "clicked"
              ? { scale: 0.9 }
              : { scale: 1 }
          }
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          onAnimationComplete={handlePopDownComplete}
        />
      </div>

      {target.x !== 0 && (
        <motion.img
          src={cursor}
          className="cursor"
          initial={{ x: -300, y: 300 }}
          animate={{ x: target.x, y: target.y }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          onAnimationComplete={handleCursorArrive}
        />
      )}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;