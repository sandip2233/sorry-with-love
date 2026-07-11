import { motion } from "framer-motion";
import "./GiftBox.css";

const GiftBox = () => {
  return (
    <section className="gift-section" aria-label="Gift box component">
      <div className="container">
        <motion.div
          className="gift-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01, y: -3 }}
        >
          <div className="gift-box">
            <div className="gift-lid"></div>
            <div className="gift-base"></div>
          </div>
          <div className="gift-copy">
            <p className="section-tag">A little gift for your heart</p>
            <h2 className="gift-title">I would choose you again, even after all this</h2>
            <p>
              I may not be perfect, but I know this: when I think of us, I still feel gratitude,
              warmth, and a deep wish to make things right.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftBox;
