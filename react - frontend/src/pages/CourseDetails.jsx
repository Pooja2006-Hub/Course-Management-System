import { Link, useParams } from "react-router-dom";

function CourseDetails() {
  const { courseId } = useParams();

  const courses = {
    python: {
      title: "Python Programming",
      icon: "🐍",
      category: "Programming",
      level: "Beginner to Advanced",
      duration: "8 Weeks",
      students: "1,250+",
      description:
        "Learn Python programming from the basics to advanced concepts and build a strong foundation in programming.",
      modules: [
        "Introduction to Python",
        "Variables and Data Types",
        "Operators and Expressions",
        "Conditional Statements",
        "Loops and Functions",
        "Lists, Tuples and Dictionaries",
        "Object-Oriented Programming",
        "Mini Project"
      ]
    },

    "web-development": {
      title: "Web Development",
      icon: "💻",
      category: "Development",
      level: "Beginner",
      duration: "10 Weeks",
      students: "980+",
      description:
        "Learn how to create modern and responsive websites using HTML, CSS and JavaScript.",
      modules: [
        "Introduction to Web Development",
        "HTML Fundamentals",
        "CSS Fundamentals",
        "Responsive Web Design",
        "JavaScript Basics",
        "DOM Manipulation",
        "Forms and Validation",
        "Web Development Project"
      ]
    },

    "machine-learning": {
      title: "Machine Learning",
      icon: "🤖",
      category: "Artificial Intelligence",
      level: "Intermediate",
      duration: "12 Weeks",
      students: "850+",
      description:
        "Understand machine learning concepts, algorithms and real-world applications using Python.",
      modules: [
        "Introduction to Machine Learning",
        "Data Preparation",
        "Supervised Learning",
        "Linear Regression",
        "Classification Algorithms",
        "Unsupervised Learning",
        "Model Evaluation",
        "Machine Learning Project"
      ]
    },

    "data-analytics": {
      title: "Data Analytics",
      icon: "📊",
      category: "Data Science",
      level: "Beginner to Intermediate",
      duration: "8 Weeks",
      students: "720+",
      description:
        "Learn how to analyze data, discover patterns and create meaningful business insights.",
      modules: [
        "Introduction to Data Analytics",
        "Data Collection",
        "Data Cleaning",
        "Excel for Data Analysis",
        "Python for Data Analysis",
        "Data Visualization",
        "Power BI Fundamentals",
        "Analytics Project"
      ]
    },

    "artificial-intelligence": {
      title: "Artificial Intelligence",
      icon: "🧠",
      category: "AI",
      level: "Intermediate",
      duration: "12 Weeks",
      students: "1,100+",
      description:
        "Explore artificial intelligence concepts, intelligent systems and modern AI applications.",
      modules: [
        "Introduction to Artificial Intelligence",
        "AI Problem Solving",
        "Search Algorithms",
        "Knowledge Representation",
        "Machine Learning Basics",
        "Neural Networks",
        "Generative AI",
        "AI Project"
      ]
    },

    "cloud-computing": {
      title: "Cloud Computing",
      icon: "☁️",
      category: "Cloud Technology",
      level: "Beginner",
      duration: "8 Weeks",
      students: "650+",
      description:
        "Understand cloud computing concepts, services, deployment models and cloud platforms.",
      modules: [
        "Introduction to Cloud Computing",
        "Cloud Service Models",
        "Cloud Deployment Models",
        "Virtual Machines",
        "Cloud Storage",
        "Cloud Security",
        "AWS and Azure Basics",
        "Cloud Project"
      ]
    }
  };

  const course = courses[courseId];

  if (!course) {
    return (
      <div className="course-not-found">
        <h1>Course Not Found</h1>

        <p>
          Sorry, the course you are looking for does not exist.
        </p>

        <Link to="/courses" className="primary-btn">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="course-details-page">

      {/* Back Button */}

      <Link to="/courses" className="back-link">
        ← Back to Courses
      </Link>

      {/* Course Hero */}

      <section className="course-details-hero">

        <div className="course-details-icon">
          {course.icon}
        </div>

        <div className="course-details-content">

          <span className="course-category">
            {course.category}
          </span>

          <h1>{course.title}</h1>

          <p>{course.description}</p>

          <div className="course-meta">

            <div>
              <strong>📈 Level</strong>
              <span>{course.level}</span>
            </div>

            <div>
              <strong>⏱ Duration</strong>
              <span>{course.duration}</span>
            </div>

            <div>
              <strong>👨‍🎓 Students</strong>
              <span>{course.students}</span>
            </div>

          </div>

        </div>

      </section>

      {/* Main Content */}

      <div className="course-learning-layout">

        {/* Modules */}

        <section className="modules-section">

          <div className="section-heading">
            <div>
              <p>COURSE CONTENT</p>
              <h2>What You'll Learn</h2>
            </div>

            <span className="module-count">
              {course.modules.length} Modules
            </span>
          </div>

          <div className="module-list">

            {course.modules.map((module, index) => (

              <div className="module-card" key={index}>

                <div className="module-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="module-info">
                  <h3>{module}</h3>

                  <p>
                    Learn important concepts and practical skills
                    through this module.
                  </p>
                </div>

                <span className="module-arrow">
                  →
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* Course Sidebar */}

        <aside className="course-sidebar">

          <div className="progress-card">

            <div className="progress-top">
              <span>Your Progress</span>
              <strong>0%</strong>
            </div>

            <div className="detail-progress-bar">
              <div style={{ width: "0%" }}></div>
            </div>

            <p>
              Start your first module and begin your learning journey.
            </p>

            <button className="continue-btn">
              Start Course →
            </button>

          </div>

          <div className="info-card">

            <h3>Course Includes</h3>

            <ul>
              <li>✓ Structured learning modules</li>
              <li>✓ Practical examples</li>
              <li>✓ Learning progress tracking</li>
              <li>✓ Mini project</li>
              <li>✓ Lifetime access</li>
            </ul>

          </div>

        </aside>

      </div>

    </div>
  );
}

export default CourseDetails;