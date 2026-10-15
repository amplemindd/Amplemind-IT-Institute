import { useEffect, useState } from "react";
import '../css/Stat.css'

const stats = [
  {
    number: 500,
    text: "Students Trained",
    suffix: "+",
  },
  {
    number: 12,
    text: "Courses Available",
    suffix: "+",
  },
  {
    number: 95,
    text: "Satisfaction Rate",
    suffix: "%",
  },
  {
    number: 5,
    text: "Years Experience",
    suffix: "+",
  },
];

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h2 className="counter-number">
      {count}
      {suffix}
    </h2>
  );
};

const StatsCounter = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <Counter target={item.number} suffix={item.suffix} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;