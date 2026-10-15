import { useState } from "react";
import "../css/FAQs.css";

const faqData = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer Web Development, Python, Data Analytics, Java, and UI/UX courses.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes, students receive a course completion certificate after finishing the training.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we provide interview preparation and placement assistance.",
  },
  {
    question: "Are live projects included in the training?",
    answer:
      "Yes, students work on live projects for real-world experience.",
  },
  {
    question: "Will you help with resume building?",
    answer:
      "Yes, we help students create professional resumes.",
  },
  {
    question: "Are mock interviews conducted?",
    answer:
      "Yes, mock interviews are part of our placement training.",
  },
  {
    question: "Do you teach the latest technologies?",
    answer:
      "Yes, our syllabus is updated according to industry trends.",
  },
  {
    question: "Can freshers join the institute?",
    answer:
      "Yes, freshers and college students are welcome.",
  },
  {
    question: "Do you conduct tests or assignments?",
    answer:
      "Yes, regular assignments and assessments are conducted.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    {/* <div id="t-main">
        <p>OUR FAQs</p>
        <p>Curious about us?</p>
    </div> */}
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>

            <div
              className={
                activeIndex === index
                  ? "faq-answer active"
                  : "faq-answer"
              }
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default FAQ;