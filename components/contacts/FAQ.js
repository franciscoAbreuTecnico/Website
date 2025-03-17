import { useState } from "react";
import styles from "@/styles/contacts/FAQ.module.scss";
import { faqs } from "@/components/textContent/FAQText";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <button
            onClick={() => toggleFAQ(index)}
            className={`${styles.faqQuestion} ${openIndex === index ? styles.active : ""}`}
            >
            {faq.question}
            <span className={styles.icon} >{openIndex === index ? "-" : "+"}</span>
            </button>
          {openIndex === index && <p className={styles.faqAnswer}>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
