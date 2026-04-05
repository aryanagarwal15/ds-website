import React, { useState } from "react";
import styles from "./HomePage.module.css";
import axios from "axios";

const environment = process.env.NEXT_PUBLIC_ENVIRONMENT || "development";

const WaitlistModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const domain =
    environment == "production"
      ? "https://api.divinesarathi.in"
      : "http://localhost:3001";

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      await axios.post(domain + "/waitlist/add", {
        name,
        email,
        phone,
      });
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
    } catch (err: any) {
      if (err.response && err.response.status === 409) {
        setError("Phone number already registered.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalCard}>
        <button
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {!success ? (
          <>
            <div className={styles.modalTitle}>
              Be among the first to experience DivineSarathi
            </div>
            <div className={styles.modalSubtitle}>
              Get early access to the Beta version of our conversational AI-God
            </div>
            {error && (
              <div
                style={{ color: "red", marginBottom: 12, textAlign: "center" }}
              >
                {error}
              </div>
            )}
            <form className={styles.modalForm} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>👤</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>✉️</span>
                <input
                  type="email"
                  placeholder="Your Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>📞</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "4px" }}>+91</span>
                  <input
                    type="tel"
                    placeholder="XXXXXXXXXX"
                    value={phone}
                    onChange={(e) => {
                      // Only allow numbers, max 10 digits
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setPhone(value);
                    }}
                    required
                    style={{ flex: 1 }}
                  />
                </div>
              </div>
              <button className={styles.modalButton} type="submit">
                Join Now
              </button>
            </form>
            <div className={styles.modalFooter}>
              You&apos;ll get early access and updates. No spam, ever.
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: 16,
              }}
            >
              Welcome aboard!
            </div>
            <div>
              You&apos;ll receive communication from us
              <br />
              when your access is ready.
              <br />
              <br />
              Until then, know that the Divine is already beside you.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
