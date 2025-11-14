import { motion } from "framer-motion";
import "./HeroSection.css";
import overlay from "/Overlay.png";
import { useEffect, useState } from "react";
import SpaceBackground from "./SpaceBackground";

export default function HeroSection() {
  const [startSplit, setStartSplit] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setStartSplit(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth <= 768 && windowWidth > 480;

  return (
    <section id="home" className="hero-section">
      <div className="SpaceBackground">
        <SpaceBackground />
      </div>

      <div className="cursor-color"></div>

      {/* === DESKTOP VIEW === */}
      {!isMobile && !isTablet && (
        <>
          <motion.div
            className="visual-container"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: startSplit ? "-200px" : 0,
            }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="circle">
              <img src={overlay} alt="Profile" className="overlay-image" />
            </div>
          </motion.div>

          <motion.div
            className="text-content"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: "-50%",
              x: startSplit ? 100 : 0,
            }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="title">
              Shankari <span>Ramu</span>
            </h1>
            <p className="subtext">Creative Developer</p>
          </motion.div>
        </>
      )}

      {/* === MOBILE & TABLET VIEW === */}
      {(isMobile || isTablet) && (
        <div className="hero-center">
          <motion.div
            className="visual-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="circle">
              <img src={overlay} alt="Profile" className="overlay-image" />
            </div>
          </motion.div>

          <motion.div
            className="text-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h1 className="title">
              Shankari <span>Ramu</span>
            </h1>
            <p className="subtext">Creative Developer</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
