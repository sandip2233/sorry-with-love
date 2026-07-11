import { motion } from "framer-motion";
import "./Letter.css";

const Letter = () => {
  return (
    <section className="letter-section" id="letter" aria-label="Letter component">
      <div className="container">
        <motion.div
          className="letter-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01, y: -3 }}
        >
          <p className="letter-eyebrow">A letter I want you to read slowly</p>
          <h2 className="letter-title">Dear Sangeeta,</h2>
          <p className="letter-text">

I know an apology cannot erase the pain I've caused, but I hope it can be the beginning of healing.

Every day reminds me how much your smile, your kindness, and your presence mean to me.

I don't expect everything to be fixed instantly. I simply want you to know that I'm sincerely sorry and committed to becoming a better person.
          </p>
         

          <p className="letter-signoff">With all my heart, your Sandip</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Letter;
