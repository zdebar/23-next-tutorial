"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import ContactForm from "./ContactForm";

export default function Header() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navright}>
          <Link href="/" className="tooltip">home</Link>
          <Link href="/blog" className="tooltip">blog</Link>
        </div>
        <div className={styles.navright}>
          <a href="#" className="tooltip" onClick={() => setFormVisible((prev) => !prev)} id="emailAddress">
            zdebarth@gmail.com
            <span className="tooltip-text">
              {formVisible ? "Click to hide contact form" : "Click to reveal contact form"}
            </span>
          </a>
        </div>
      </nav>

      {formVisible && <ContactForm />}
    </header>
  );
}
