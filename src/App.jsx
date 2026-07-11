import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Letter from "./components/Letter/Letter";
import Promise from "./components/Promise/Promise";
import GiftBox from "./components/GiftBox/GiftBox";
import Timeline from "./components/Timeline/Timeline";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "❤️ A Message From My Heart";
  }, []);

  return (
    <div className="app">
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