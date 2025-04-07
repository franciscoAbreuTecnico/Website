import { useState } from "react";
import styles from "@/styles/utils/SubscribePopup.module.scss";

export default function SubscribePopup({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");

    try {
      // TODO - Hide the Script URL with a Serverless Proxy
      // OR Obfuscate the Script URL using .env
      // OR use VERCEL and put script behind a simple API endpoint
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email, website: "" }),
      });

      const text = await res.text().then(t => t.toLowerCase());

      if (text.includes("success")) setStatus("success");
      else if (text.includes("already")) setStatus("already");
      else if (text.includes("invalid")) setStatus("invalid");
      else if (text.includes("blocked")) setStatus("blocked");
      else setStatus("error");

      if (text.includes("success")) {
        setEmail("");
        setTimeout(() => {
          setStatus("");
          onClose();
        }, 1500);
      }
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2 className={styles.title}>Subscribe to our Newsletter</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <button
          className={styles.subscribeButton}
          onClick={handleSubmit}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>

        {status && (
          <div className={styles.statusContainer}>
            {status === "invalid" && <p className={styles.error}>Invalid email address.</p>}
            {status === "already" && <p className={styles.error}>This email is already subscribed.</p>}
            {status === "blocked" && <p className={styles.error}>Submission blocked.</p>}
            {status === "success" && <p className={styles.success}>Subscribed successfully!</p>}
            {status === "error" && <p className={styles.error}>Something went wrong. Try again.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
