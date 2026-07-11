import "./FloatingHearts.css";

const hearts = [
  "❤️",
  "💖",
  "💕",
  "💗",
  "💓",
  "💞",
  "💘",
  "💝",
  "❤️",
  "💖",
  "💕",
  "💗",
];

function FloatingHearts() {
  return (
    <div className="floating-hearts">
      {hearts.map((heart, index) => (
        <span
          key={index}
          className={`heart heart-${index + 1}`}
        >
          {heart}
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;