import { useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  const [showAgreement, setShowAgreement] = useState(false);

  const scrollToLetter = () => {
    const section = document.getElementById("letter");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadAgreement = () => {
    window.open("/Love_Agreement.pdf", "_blank", "noopener,noreferrer");
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

          <div className="hero-actions">
            <button className="hero-button" onClick={scrollToLetter}>
              Read My Heart ❤️
            </button>
            <button
              className="hero-secondary-button"
              onClick={() => setShowAgreement(true)}
            >
              Relationship Agreement
            </button>
          </div>
        </motion.div>
      </div>

      {showAgreement && (
        <div className="agreement-modal-overlay" onClick={() => setShowAgreement(false)}>
          <div className="agreement-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="agreement-close-button"
              onClick={() => setShowAgreement(false)}
              aria-label="Close agreement"
            >
              ×
            </button>

            <div className="agreement-paper" id="agreement-document">
              <div className="agreement-letterhead-wrap">
                <svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="tealBg" cx="50%" cy="50%" r="75%">
                      <stop offset="0%" stopColor="#bfe9e2" />
                      <stop offset="100%" stopColor="#8fd6ca" />
                    </radialGradient>
                    <linearGradient id="pillarBg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d8b483" />
                      <stop offset="50%" stopColor="#b9925f" />
                      <stop offset="100%" stopColor="#d8b483" />
                    </linearGradient>
                    <pattern id="rosette" width="60" height="60" patternUnits="userSpaceOnUse">
                      <circle cx="30" cy="30" r="22" fill="none" stroke="#eaf7f4" strokeWidth="1.2" opacity="0.55" />
                      <circle cx="30" cy="30" r="4" fill="#eaf7f4" opacity="0.6" />
                      <path d="M30 10 L34 24 L48 24 L37 33 L41 47 L30 38 L19 47 L23 33 L12 24 L26 24 Z" fill="#eaf7f4" opacity="0.35" />
                    </pattern>
                  </defs>

                  <rect x="0" y="0" width="800" height="240" fill="url(#tealBg)" />
                  <rect x="0" y="0" width="800" height="240" fill="url(#rosette)" />
                  <line x1="14" y1="0" x2="14" y2="240" stroke="#5fb3a8" strokeWidth="1.5" strokeDasharray="4 5" />
                  <rect x="6" y="6" width="788" height="228" fill="none" stroke="#0f8074" strokeWidth="3" />
                  <rect x="12" y="12" width="776" height="216" fill="none" stroke="#0f8074" strokeWidth="1" />
                  <text x="400" y="34" textAnchor="middle" fontSize="21" fontFamily="'Noto Sans Devanagari', sans-serif" fontWeight="700" fill="#0d6e64">प्रेम गैर न्यायिक</text>
                  <rect x="330" y="42" width="140" height="150" fill="url(#pillarBg)" />
                  <rect x="330" y="42" width="140" height="150" fill="none" stroke="#0f8074" strokeWidth="1.5" />
                  <text x="400" y="60" textAnchor="middle" fontSize="13" fontFamily="'Noto Sans Devanagari', sans-serif" fontWeight="700" fill="#0d6e64">हृदय</text>
                  <g transform="translate(400,68)">
                    <rect x="-3" y="0" width="6" height="70" fill="#0d6e64" />
                    <ellipse cx="0" cy="0" rx="34" ry="10" fill="#0d6e64" />
                    <ellipse cx="0" cy="70" rx="34" ry="10" fill="#0d6e64" />
                    <path d="M0 18 C-14 4 -34 12 -34 30 C-34 46 0 62 0 62 C0 62 34 46 34 30 C34 12 14 4 0 18 Z" fill="#fdf8ea" stroke="#0d6e64" strokeWidth="2" transform="translate(0,-2) scale(0.62)" />
                  </g>
                  <text x="400" y="178" textAnchor="middle" fontSize="10.5" fontFamily="'Noto Sans Devanagari', sans-serif" fill="#0d6e64">सत्यमेव प्रीयते</text>
                  <text x="400" y="190" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0d6e64">LOVE</text>
                  <text x="170" y="90" textAnchor="middle" fontSize="26" fontFamily="'Noto Sans Devanagari', sans-serif" fontWeight="700" fill="#0d6e64">हज़ार</text>
                  <text x="170" y="122" textAnchor="middle" fontSize="24" fontFamily="'Noto Sans Devanagari', sans-serif" fontWeight="700" fill="#0d6e64">प्रेम</text>
                  <text x="170" y="156" textAnchor="middle" fontSize="26" fontWeight="700" fill="#0d6e64">रु.❤️</text>
                  <text x="630" y="120" textAnchor="middle" fontSize="22" fontWeight="700" letterSpacing="1" fill="#0d6e64">THOUSAND HEARTS</text>
                  <text x="630" y="154" textAnchor="middle" fontSize="26" fontWeight="700" fill="#0d6e64">Rs.❤️</text>
                  <rect x="6" y="196" width="788" height="38" fill="#fdf8ea" />
                  <line x1="6" y1="196" x2="794" y2="196" stroke="#0f8074" strokeWidth="2" />
                  <line x1="6" y1="234" x2="794" y2="234" stroke="#0f8074" strokeWidth="2" />
                  <text x="400" y="221" textAnchor="middle" fontSize="19" fontWeight="700" letterSpacing="2" fill="#0d6e64">HEART NON JUDICIAL</text>
                </svg>
              </div>

              <div className="agreement-state-strip">
                <span>राज्य: प्रेम नगर &nbsp;|&nbsp; STATE OF LOVE</span>
                <span>Sl. No. LOVE-000001</span>
              </div>

              <div className="agreement-cert-strip">
                <span>Purchased By: <b> SANDIP DAS (The Promisor)</b></span>
                <span>Stamp Duty Paid: <b>One Heart, Fully</b></span>
              </div>

              <div className="agreement-body-inner">
                <div className="agreement-title">DEED OF PROMISE &amp; DEVOTION</div>
                <div className="agreement-subtitle-line">( Executed voluntarily, without force, coercion, or bribery — except maybe chocolates )</div>

                <div className="agreement-content">
                  <div className="agreement-parties" style={{ textAlign: "left" }}>
                    This Promise Note is made and entered into on this <b>30th day of July, 2026</b>,
                    at <b>12:00 PM</b>, by and between:<br /><br />
                    <b>PARTY OF THE FIRST PART:</b> Sandip Das (hereinafter called "the Promisor"),<br />
                    <b>AND</b><br />
                    <b>PARTY OF THE SECOND PART:</b> Sangeeta Banerjee (hereinafter called "the Beloved").
                  </div>

                  <p>
                    <b>WHEREAS</b> the Promisor is of sound heart and has been completely irrevocably smitten by the Beloved since the aforementioned relationship began; and
                  </p>

                  <p>
                    <b>WHEREAS</b> the Promisor wishes to record, in writing and on record, certain solemn promises for the peace of mind, happiness, and continued affection of the Beloved;
                  </p>

                  <p><b>NOW THEREFORE, THIS DEED WITNESSETH AS FOLLOWS:</b></p>

                  <ol className="agreement-promises"  style={{ textAlign: "left" }}>
                    <li>We commit to never leave each other.</li>
                    <li>We commit to never ignoring each other.</li>
                    <li>If we face any problems, we will solve them together and never quit on each other.</li>
                    <li>We commit to ensuring that no third person comes between us.</li>
                    <li>We commit to sharing our thoughts, whether they are good or bad, with each other.</li>
                    <li>I commit to never forcing you to agree with my thoughts.</li>
                    <li>I commit to never doing anything that would cause you mental pressure or pain.</li>
                    <li>We commit to being loyal to each other.</li>
                    <li>While we may have disagreements from time to time, we commit to never considering breakup or leaving each other as an option.</li>
                    <li>If either of us is upset for any reason, we promise to meet and spend time together, offering comfort and support.</li>
                    <li>If we recognize a mistake made by one of us, we will discuss it immediately and ensure that the same mistake does not recur, promoting growth and understanding.</li>
                    <li>I acknowledge that I am not only entering into a relationship with you but also with your family. If any problems arise concerning your family or parents, we will handle them together. I am always with you and your family</li>
                  </ol>

                  <p className="agreement-witness-note">
                    IN WITNESS WHEREOF, the Promisor has signed this Agreement with his own digital sign and full heart, in the presence of the witnesses named below, on the date and place first written above.
                  </p>
                </div>

                <div className="agreement-seal">OFFICIAL<br />SEAL OF<br />THE HEART <br />❤️</div>

                <div className="agreement-date-place">
                  <span>Place: Kolkata</span>
                  <span>Date: 30/07/2026</span>
                </div>

                <div className="agreement-signatures">
                  <div className="agreement-sig-block">
                    <img
                      src="/signature_sandip.png"
                      alt="Sandip signature"
                      className="agreement-signature-image"
                    />
                    <div className="agreement-sig-line">&nbsp;</div>
                    <b>Signature of the Promisor</b><br />
                    <span className="agreement-sig-role"></span>
                  </div>
                  <div className="agreement-sig-block">
                    <div className="agreement-sig-line">&nbsp;</div>
                    <b>Signature of the Beloved</b><br />
                    <span className="agreement-sig-role">(ACCEPTED WITH A SMILE)</span>
                  </div>
                </div>

                <div className="agreement-footer-note">
                  THIS DOCUMENT IS BINDING ONLY BY THE POWER OF LOVE
                </div>

                <button
                  type="button"
                  className="agreement-download-button"
                  onClick={handleDownloadAgreement}
                >
                  Download Agreement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;