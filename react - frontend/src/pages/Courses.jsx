import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div className="courses-page">

      <div className="courses-header">

        <p>EXPLORE & LEARN</p>

        <h1>Popular Courses</h1>

        <span>
          Choose a course and start building your skills today.
        </span>

      </div>

      <div className="courses">

        <CourseCard
          courseId="python"
          title="Python Programming"
          description="Master Python programming from the basics to advanced concepts."
          icon="🐍"
        />

        <CourseCard
          courseId="web-development"
          title="Web Development"
          description="Build modern websites using HTML, CSS and JavaScript."
          icon="💻"
        />

        <CourseCard
          courseId="machine-learning"
          title="Machine Learning"
          description="Understand machine learning concepts and real-world applications."
          icon="🤖"
        />

        <CourseCard
          courseId="data-analytics"
          title="Data Analytics"
          description="Analyze data and create meaningful insights using modern tools."
          icon="📊"
        />

        <CourseCard
          courseId="artificial-intelligence"
          title="Artificial Intelligence"
          description="Explore AI concepts, models and intelligent applications."
          icon="🧠"
        />

        <CourseCard
          courseId="cloud-computing"
          title="Cloud Computing"
          description="Learn the fundamentals of cloud platforms and services."
          icon="☁️"
        />

      </div>

    </div>
  );
}

export default Courses;