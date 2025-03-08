"use client";

import { useState } from "react";

export default function ContactForm() {
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
    <section>
      <form id="contactForm" action="https://formspree.io/f/xdkazldg" method="POST" onSubmit={handleFormSubmit}>
        <input type="hidden" name="_gotcha" />
        <label>
          your email
          <input type="email" name="email" placeholder="example@example.com" required />
        </label>

        <label>
          subject
          <input type="text" name="subject" required />
        </label>

        <label>
          message
          <textarea name="message" required></textarea>
        </label>

        <button type="submit">Send</button>
      </form>

      {responseMessage && (
        <p className={responseMessage.includes("success") ? "success" : "error"}>{responseMessage}</p>
      )}
    </section>
  );
};