import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  const scrollToLetter = () => {
    const section = document.getElementById("letter");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="container">
        <motion.div
          className="hero-card glass"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="hero-tag">❤️ Made with love ❤️</p>
          <h1 className="hero-title">I&apos;m Truly Sorry</h1>
          <h2 className="hero-name">For the hurt, the silence, and the distance</h2>

          <p className="hero-description">
            I know I was not at my best, and I understand why it hurt you.
            <br />
            <br />
            This page is my way of saying that I still care deeply, I still admire you,
            and I want to become a better man for you.
            <br />
            <br />
            If you read this with an open heart, I hope you feel how sincere I am.
          </p>

          <button className="hero-button" onClick={scrollToLetter}>
            Read My Heart ❤️
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;