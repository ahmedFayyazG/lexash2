"use client";
import React, { useState } from "react";
import styles from "./self-sponsorship.module.css";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQClient({ items }: { items: FAQItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div>
      {items.map((faq, i) => {
        const open = active === i;
        return (
          <div key={i} className={`${styles.faqItem} ${open ? styles.faqItemActive : ""}`}>
            <button
              className={styles.faqQuestion}
              onClick={() => setActive(open ? null : i)}
              aria-expanded={open}
              aria-controls={`faq-${i}`}
            >
              {faq.question}
              <span className={styles.faqIcon} aria-hidden="true">▼</span>
            </button>
            <div id={`faq-${i}`} className={styles.faqAnswer} role="region" aria-label={faq.question}>
              <p className={styles.paragraph}>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
