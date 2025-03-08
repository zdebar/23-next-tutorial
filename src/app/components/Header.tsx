"use client";

import { useState } from "react";
import Link from "next/link"; 
import "./Header.css";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(event.currentTarget.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        event.currentTarget.reset();
      } else {
        setResponseMessage("Error sending message.");
      }
    } catch {
      setResponseMessage("Network error. Please try again.");
    }
  };

  return (
    <header>
      <nav>
        <Link href="/" className="nav-link">home</Link>
        <Link href="/blog" className="nav-link">blog</Link>
        <a href="https://www.linkedin.com/in/your-profile" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" className="tooltip" onClick={() => setFormVisible((prev) => !prev)} id="emailAddress">
          zdebarth@gmail.com
          <span className="tooltip-text">
            {formVisible ? "Click to hide contact form" : "Click to reveal contact form"}
          </span>
        </a>
      </nav>
      {formVisible && (
        <section>
          <form id="contactForm" action="https://formspree.io/f/xdkazldg" method="POST" onSubmit={handleFormSubmit}>
            <input type="hidden" name="_gotcha" />
            <label>
              Your email:
              <input type="email" name="email" placeholder="example@example.com" required />
            </label>

            <label>
              Subject:
              <input type="text" name="subject" required />
            </label>

            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>

            <button type="submit">Send</button>
          </form>

          {responseMessage && (
            <p className={responseMessage.includes("success") ? "success" : "error"}>{responseMessage}</p>
          )}
        </section>
      )}
    </header>
  );
}
