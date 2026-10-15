import React from "react";
import "../css/Testimonial.css";
import TestimonialCard from "./T-card";

const testimonials = [
  {
    name: "Gaurav Gupta",
    review: "My learning experience at Amplemind has been very good. Good practical knowledge along with theory. The learning environment is supportive.",
  },
  {
    name: "Himanshu Ghatole",
    review: "I joined Amplemind Academy to learn Full Stack Java. The trainers explain everything clearly, and I am gaining good practical knowledge.",
  },
  {
    name: "Avanti Durugkar",
    review: "I have been a student of Amplemind Institute for a few months now and I really like my experience here. The faculty here is very encouraging and skilled.",
  },
  {
    name: "Shreya Gajbhiye",
    review: "I recently joined this institute, and faculty of this institute is very knowledgeable. The teaching is so excellent 👍.",
  },
  {
    name: "Aditi Ghatbandhe",
    review: "I recently joined Amplemind. And my experience is so good about the course and the trainer are very experienced and supportive.",
  },
  {
    name: "Piyush Narule",
    review: "Excellent institute with experienced trainers. Highly recommended for skill development!",
  },
  {
    name: "Shivani Wanve",
    review: "This IT institute provides excellent knowledge with easy-to-understand teaching. The trainers are supportive, and the practical sessions help improve skills.",
  },
  {
    name: "Aryan Jaiswal",
    review: "I had a great learning experience at Amplemind Institute. In addition to technical knowledge, the institute also focused on personality development. Highly recommended!",
  },
  {
    name: "Pranali Rajurkar",
    review: "I had a great learning experience at this IT institute. The institute focuses on both theory and practical knowledge, which helped me improve my skills and confidence.",
  },
];

function Testimonials({ limit }) {
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="testimonials-section">
      <div className="t-container-main">
        
        <div className="section-title">
          <h2>
            What Our <span>Students Say</span>
          </h2>
          <p>Real stories and experiences from our successful learners.</p>
        </div>

        <div className="t-grid">
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              course={testimonial.course}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;