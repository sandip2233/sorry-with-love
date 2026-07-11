import { motion } from "framer-motion";
import "./Gallery.css";

const photos = [
  {
    title: "Your smile",
    caption: "The little moments that made you ❤️",
    image: "/sangeeta.jpeg"
  },
  {
    title: "Our memory",
    caption: "A reminder of the love that still matters.",
    image: "/us.jpeg"
  }
];

const Gallery = () => {
  return (
    <section className="gallery-section" aria-label="Gallery component">
      <div className="container">
        <motion.div
          className="gallery-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">A little gallery for us</p>
          <h2 className="gallery-title">Us</h2>
        </motion.div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.title}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ scale: 1.04, y: -4 }}
            >
              <div className="gallery-photo" aria-hidden="true">
                <img src={photo.image} alt={photo.title} />
              </div>
              <h3>{photo.title}</h3>
              <p>{photo.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
