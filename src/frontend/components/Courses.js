import React from "react";
import "../css/Courses.css";
import CourseCard from "./CourseCard";

const courses = [
  {
    id: "Full Stack Development",
    title: "Full Stack Development",
    description: "Learn frontend, backend, databases, and deploy complete web applications.",
  },
  {
    id: "Data Analytics",
    title: "Data Analytics",
    description: "Analyze data, create dashboards, and gain business insights using modern tools.",
  },
  {
    id: "Java Development",
    title: "Java Development",
    description: "Build powerful desktop and web applications using Java technologies.",
  },
  {
    id: "Python Programming",
    title: "Python Programming",
    description: "Master Python fundamentals and real-world projects.",
  },
  {
    id: "Data Science",
    title: "Data Science",
    description: "Master data analysis, visualization, machine learning, and predictive modeling.",
  },
  {
    id: "DevOps",
    title: "DevOps",
    description: "Learn CI/CD, automation, containerization, and cloud practices for deployment.",
  },
  {
    id: "Salesforce",
    title: "Salesforce",
    description: "Master Salesforce CRM, automation, and cloud solutions to build a successful career.",
  },
  {
    id: "SAP",
    title: "SAP",
    description: "Learn SAP modules, business processes, and enterprise solutions.",
  },
];

function Courses({ limit }) {
  const displayedCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>
            Tailored <span>For Your Success</span>
          </h2>
          <p>Explore our highly demanded IT programs designed to build future leaders.</p>
        </div>

        <div className="services-grid">
          {displayedCourses.map((course, index) => (
            <CourseCard
              key={index}
              id={course.id}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;