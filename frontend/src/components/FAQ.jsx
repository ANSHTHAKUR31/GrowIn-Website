import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "🚀 Is the GrowIn Community free to join?",
    answer: "Yes! GrowIn Community is 100% free and open to all tech enthusiasts. Our mission is to help people learn, collaborate, and grow together.",
  },
  {
    question: "🤝 How can I join the GrowIn Community?",
    answer: "You can join by signing up on our website and participating in our Discord, Twitter spaces, and meetups. We welcome everyone from beginners to experts!",
  },
  {
    question: "🎤 What kind of events does GrowIn Community organize?",
    answer: "We host hackathons, tech meetups, Web3 bootcamps, mentorship sessions, and more. Stay connected for upcoming events!",
  },
  {
    question: "💡 How can I contribute to the community?",
    answer: "You can contribute by mentoring, writing blogs, giving talks, or participating in open-source projects. Join our Contributor Program!",
  },
  {
    question: "🎓 Do I need to be an expert to join GrowIn Community?",
    answer: "Not at all! Our community is for all skill levels. Whether you’re a beginner or an expert, you’ll find resources and support to grow.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.faqContainer}>
      <h2 style={styles.faqTitle}>📚 Frequently Asked Questions</h2>
      <div style={styles.faqList}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            style={styles.faqItem}
            onClick={() => toggleFAQ(index)}
          >
            <div style={styles.faqQuestion}>
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
            </div>
            <div style={{ ...styles.faqAnswer, display: openIndex === index ? "block" : "none" }}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ CSS-in-JS Styles (Styled Components)
const styles = {
  faqContainer: {
    maxWidth: "800px",
    margin: "auto",
    padding: "40px",
    background: "rgba(0, 0, 0, 0.8)",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
  },
  faqTitle: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#00ffcc",
    textShadow: "0 0 10px #00ffcc",
    marginBottom: "20px",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  faqItem: {
    background: "linear-gradient(135deg, #1a1a1a, #333)",
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0px 4px 10px rgba(0, 255, 204, 0.3)",
  },
  faqQuestion: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  faqAnswer: {
    fontSize: "0.95rem",
    color: "#ccc",
    marginTop: "10px",
    transition: "all 0.3s ease-in-out",
  },
};

export default FAQ;