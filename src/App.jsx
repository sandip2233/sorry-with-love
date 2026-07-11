import { useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "❤️ A Message From My Heart";
  }, []);

  return (
    <div className="app">
      {/* Background Hearts */}
      <div className="hearts">
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
        <span>💞</span>
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
      </div>

      {/* Hero Section */}
      <section>
        <div className="container">
          <motion.div
            className="card text-center"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3>To Someone Very Special ❤️</h3>

            <h1 className="title">
              I'm Truly Sorry
            </h1>

            <p className="subtitle">
              Sometimes we realize the value of someone only after making
              mistakes.
              <br />
              <br />
              I know I hurt you, and I genuinely regret it.
              <br />
              This small website is my way of expressing what words alone
              couldn't.
            </p>

            <button
              className="primary-btn"
              onClick={() =>
                document
                  .getElementById("letter")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Read My Heart ❤️
            </button>
          </motion.div>
        </div>
      </section>

      {/* Letter Section */}
      <section id="letter">
        <div className="container">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="title text-center">
              A Letter To You 💌
            </h2>

            <p className="subtitle">
              Dear Sangeeta,
              <br />
              <br />
              I know an apology cannot erase the pain I've caused, but I hope it
              can be the beginning of healing.
              <br />
              <br />
              Every day reminds me how much your smile, your kindness, and your
              presence mean to me.
              <br />
              <br />
              I don't expect everything to be fixed instantly. I simply want you
              to know that I'm sincerely sorry and committed to becoming a better
              person.
              <br />
              <br />
              Thank you for every beautiful memory we've shared.
              <br />
              <br />
              ❤️
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promise Section */}
      <section>
        <div className="container">
          <motion.div
            className="card text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="title">
              My Promise 🌸
            </h2>

            <p className="subtitle">
              ❤️ I'll listen more.
              <br />
              ❤️ I'll understand your feelings.
              <br />
              ❤️ I'll respect your emotions.
              <br />
              ❤️ I'll learn from my mistakes.
              <br />
              ❤️ I'll always value you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final Section */}
      <section>
        <div className="container">
          <motion.div
            className="card text-center"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="title">
              One Last Thing... ❤️
            </h2>

            <p className="subtitle">
              Thank you for taking the time to read this.
              <br />
              <br />
              No matter what happens, I'll always appreciate every beautiful
              moment we shared.
              <br />
              <br />
              If you ever decide to give me another chance, I'll treasure it with
              all my heart.
            </p>

            <button
              className="primary-btn"
              onClick={() => alert("❤️ Thank you for reading.")}
            >
              ❤️ Thank You ❤️
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;