import { useParams } from "react-router-dom";
import { useState } from "react";
import courses from "./CourseData";
import '../css/CourseDetails.css'

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((course) => course.id === id);

  const [openIndex, setOpenIndex] = useState(null);

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  return (
    <div className="course-details">
      {/* Hero Section */}
      <img
        src={course.image}
        alt={course.title}
        className="course-image"
      />

      <h1>{course.title}</h1>

      {/* Overview */}
      <section>
        <h2>Course Overview</h2>
        <p>{course.overview}</p>
      </section>

      {/* Syllabus Accordion */}
      <section>
        <h2>Syllabus</h2>

        {course.syllabus.map((module, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span>{module.title}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="accordion-content">
                <ul>
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default CourseDetails;