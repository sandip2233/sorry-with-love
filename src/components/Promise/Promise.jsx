import { motion } from "framer-motion";
import "./Promise.css";

const promises = [
  "I will listen without interrupting.",
  "I will respect your feelings, even when they are hard to hear.",
  "I will choose honesty over pride.",
  "I will show you, not just tell you, that you matter."
];

const Promise = () => {
  return (
    <section className="promise-section" aria-label="Promise component">
      <div className="container">
        <motion.div
          className="promise-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">A promise I want to keep</p>
          <h2 className="promise-title">I will become the man you can trust again</h2>
        </motion.div>

        <div className="promise-grid">
          {promises.map((item, index) => (
            <motion.article
              key={item}
              className="promise-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <span className="promise-icon">💝</span>
              <p>{item}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promise;
