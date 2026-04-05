import React, { useState, useRef, useEffect } from "react";
import styles from "./HomePage.module.css";
import WaitlistModal from "./WaitlistModal";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Start as playing
  const [pausedByUser, setPausedByUser] = useState(false); // Start as playing
  const [modalOpen, setModalOpen] = useState(false);
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT || "development";

  const domain =
    environment == "production"
      ? "https://api.divinesarathi.in"
      : "http://localhost:3001";

  const GOOGLE_AUTH_URL = domain + "/auth/google";

  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
        window.removeEventListener("click", tryPlay);
      }
    };
    if (!pausedByUser) {
      window.addEventListener("click", tryPlay);
    }

    return () => window.removeEventListener("click", tryPlay);
  }, [isPlaying, pausedByUser]);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleMenuClose = () => setMenuOpen(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPausedByUser(isPlaying);

    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Play/Pause Floating Button */}
      <button
        className={styles.playPauseButton}
        onClick={handlePlayPause}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? (
          // Pause icon (two vertical bars)
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke="#222"
              strokeWidth="2"
              fill="none"
            />
            <rect x="13" y="13" width="4" height="14" fill="#222" />
            <rect x="23" y="13" width="4" height="14" fill="#222" />
          </svg>
        ) : (
          // Play icon (triangle)
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke="#222"
              strokeWidth="2"
              fill="none"
            />
            <polygon points="16,13 28,20 16,27" fill="#222" />
          </svg>
        )}
      </button>
      <audio
        ref={audioRef}
        src="/audio/krishna_bansuri.mp3"
        loop
        style={{ display: "none" }}
      />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/divine_sarathi_logo.png" alt="DivineSarathi Logo" />
        </div>
        <nav className={styles.nav}>
          {/* <a href="about">About Us</a> */}
          {/* <button className={styles.button} onClick={() => setModalOpen(true)}>
            Join the Waitlist
          </button> */}
        </nav>
        <button
          className={`${styles.hamburger} ${
            menuOpen ? styles.hideHamburger : ""
          }`}
          aria-label="Open menu"
          onClick={handleMenuToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.mobileMenu}>
            <button
              className={styles.closeMenu}
              aria-label="Close menu"
              onClick={handleMenuClose}
            >
              &times;
            </button>
            {/* <a href="#about" onClick={handleMenuClose}>
              About Us
            </a> */}
            <button
              className={styles.button}
              style={{ width: "100%", marginTop: 16 }}
              onClick={() => setModalOpen(true)}
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <div className={styles.heroWrapper}>
          <div className={styles.heroSection}>
            <div className={styles.heroImageCol}>
              <img
                src="/images/deity.png"
                alt="Deity"
                className={styles.heroImage}
              />
            </div>
            <div className={styles.heroCard}>
              <h2>Your Divine Guide Through Life</h2>
              <p>
                We’ve imagined an AI-God you can speak to - inspired from Hindu
                scriptures to offer timeless guidance, comfort, and clarity.
              </p>
              <button
                className={styles.button}
                onClick={() => (window.location.href = `${GOOGLE_AUTH_URL}`)}
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className={styles.sectionTitle}>
          DivineSarathi can help you with
        </div>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.icon} role="img" aria-label="Daily Stories">
              📖
            </div>
            <h4>Daily Stories with AI-God</h4>
            <p>
              Come every day to hear a new story from AI-God - from familiar
              epics to forgotten gems, for kids and elders alike.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div
              className={styles.icon}
              role="img"
              aria-label="Everyday Conversations"
            >
              🎤
            </div>
            <h4>Everyday Conversations</h4>
            <p>
              Talk to the AI-God about anything - doubts, joy, confusion. AI-God
              listens and guides you with timeless wisdom.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div
              className={styles.icon}
              role="img"
              aria-label="Rituals & Meanings"
            >
              🧘‍♂️
            </div>
            <h4>Rituals & Meanings</h4>
            <p>
              Wonder what a mantra means? AI God shares the why behind rituals
              and wisdom from the epics.
            </p>
          </div>
        </div>

        {/* Why You'll Love */}
        <div className={styles.sectionTitle}>Why You’ll Love DivineSarathi</div>
        <div className={styles.love}>
          <ul>
            <li>
              <b>Spirituality, reimagined:</b> Timeless wisdom, brought to life
              through modern voice AI.
            </li>
            <li>
              <b>Always there for you:</b> No scheduling, no waiting - just open
              and speak.
            </li>
            <li>
              <b>From kids to elders:</b> Everyone finds something - comfort,
              clarity, curiosity.
            </li>
            <li>
              <b>Made for today:</b> Answers rooted in tradition, tuned to real
              emotions.
            </li>
          </ul>
        </div>

        {/* CTA */}
        {/* <div className={styles.cta}>
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.2rem",
              marginBottom: 12,
            }}
          >
            Be among the first to experience DivineSarathi.
          </div>
          <button className={styles.button} onClick={() => setModalOpen(true)}>
            Join the Waitlist
          </button>
          <div className={styles.waitlist}>
            Over 300+ already on the waitlist
          </div>
        </div> */}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        Built by seekers who grew up with these stories – now bringing them to
        life through AI.
        <br />© 2025 PROI-Labs
      </footer>
    </div>
  );
};

export default HomePage;
