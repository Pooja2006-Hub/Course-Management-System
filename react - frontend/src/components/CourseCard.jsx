import { Link } from "react-router-dom";

function CourseCard({ title, description, icon, courseId }) {
  return (
    <div className="course-card">

      <div className="course-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <Link
        to={`/course/${courseId}`}
        className="course-btn"
      >
        Start Learning →
      </Link>

    </div>
  );
}

export default CourseCard;