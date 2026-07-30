import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Letter from "./components/Letter/Letter";
import Promise from "./components/Promise/Promise";
import GiftBox from "./components/GiftBox/GiftBox";
import Timeline from "./components/Timeline/Timeline";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [showFlash, setShowFlash] = useState(true);

  useEffect(() => {
    document.title = "❤️ A Message From My Heart";
  }, []);

  return (
    <div className="app">
      {showFlash && (
        <div className="flash-screen" role="dialog" aria-live="polite">
          <div className="flash-card">
            <span className="flash-heart">💔</span>
            <h1>Sorry Pakhi</h1>
            <p>For every hurt and every moment I wish I could undo.
              Please Forgive me and give me a chance to make things right. I love you and I want to be better for you.
            </p>
            <button
              type="button"
              className="flash-button"
              onClick={() => setShowFlash(false)}
            >
              Ok Babi I forgive You
            </button>
          </div>
        </div>
      )}

      <div className="hearts" aria-hidden="true">
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
        <span>💞</span>
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
      </div>

      <Hero />
      <Letter />
      <Promise />
      <GiftBox />
      <Timeline />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;