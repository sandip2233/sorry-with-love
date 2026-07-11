import { motion } from "framer-motion";
import "./Timeline.css";

const moments = [
  { title: "The first memory", text: "The first time I saw your smile, I knew you were special." },
  { title: "The mistake", text: "I let my ego and silence hurt what mattered most." },
  { title: "The lesson", text: "I learned that love is not only about feeling, but also about listening." },
  { title: "The hope", text: "I still believe we can rebuild something honest and beautiful." }
];

const Timeline = () => {
  return (
    <section className="timeline-section" aria-label="Timeline component">
      <div className="container">
        <motion.div
          className="timeline-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">A little timeline of my heart</p>
          <h2 className="timeline-title">From what I lost to what I want to rebuild</h2>
        </motion.div>

        <div className="timeline-list">
          {moments.map((item, index) => (
            <motion.div
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.01, x: 4 }}
            >
              <div className="timeline-dot"></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
