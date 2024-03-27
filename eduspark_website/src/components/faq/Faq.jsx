import React, { useRef, useState } from "react";
import { faq } from "../../data";

const FaqPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const faqRef = useRef([]);

  const toggleFaq = (index) => {
    setExpandedId((prevId) => (prevId === index ? null : index));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
      <div style={{ marginBottom: "20px" }}>
        {faq.map((item, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <div
              style={{
                background: "#1eb2a6", // Dark Cyan
                color: "#fff", // White text
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
                borderTop: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "5px",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
              }}
              onClick={() => toggleFaq(index)}
            >
              <strong>{item.question}</strong>
            </div>
            <div
              ref={(el) => (faqRef.current[index] = el)}
              style={{
                display: expandedId === index ? "block" : "none",
                padding: "10px",
                background: "#1eb2a6", 
                color: "#fff", 
                borderRadius: "5px",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
