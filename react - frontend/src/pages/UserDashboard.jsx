import { Link } from "react-router-dom";

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="dashboard-container">

      {/* Dashboard Header */}

      <div className="dashboard-top">

        <div>
          <p className="dashboard-label">STUDENT DASHBOARD</p>

          <h1>
            Welcome back, {user?.name || "Student"} 👋
          </h1>

          <p className="dashboard-subtitle">
            Continue your learning journey and achieve your goals.
          </p>
        </div>

        <div className="dashboard-avatar">
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </div>

      </div>


      {/* Statistics */}

      <div className="dashboard-stats">

        <div className="dashboard-stat">
          <div className="stat-icon purple">📚</div>

          <div>
            <h2>6</h2>
            <p>Total Courses</p>
          </div>
        </div>


        <div className="dashboard-stat">
          <div className="stat-icon blue">🚀</div>

          <div>
            <h2>2</h2>
            <p>In Progress</p>
          </div>
        </div>


        <div className="dashboard-stat">
          <div className="stat-icon green">🏆</div>

          <div>
            <h2>3</h2>
            <p>Completed</p>
          </div>
        </div>


        <div className="dashboard-stat">
          <div className="stat-icon orange">⭐</div>

          <div>
            <h2>65%</h2>
            <p>Overall Progress</p>
          </div>
        </div>

      </div>


      {/* Main Dashboard Grid */}

      <div className="dashboard-grid">

        {/* My Courses */}

        <div className="dashboard-panel courses-panel">

          <div className="panel-header">

            <div>
              <h2>My Courses</h2>
              <p>Continue where you left off.</p>
            </div>

            <Link to="/courses">
              View All →
            </Link>

          </div>


          {/* Python */}

          <div className="dashboard-course">

            <div className="dashboard-course-icon">
              🐍
            </div>

            <div className="dashboard-course-info">

              <h3>Python Programming</h3>

              <p>Programming • Beginner</p>

              <div className="progress-container">
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <span>75%</span>
              </div>

            </div>

            <Link
              to="/course/python"
              className="continue-btn"
            >
              Continue
            </Link>

          </div>


          {/* Web Development */}

          <div className="dashboard-course">

            <div className="dashboard-course-icon">
              💻
            </div>

            <div className="dashboard-course-info">

              <h3>Web Development</h3>

              <p>Development • Beginner</p>

              <div className="progress-container">

                <div className="progress-track">

                  <div
                    className="progress-fill"
                    style={{ width: "60%" }}
                  ></div>

                </div>

                <span>60%</span>

              </div>

            </div>

            <Link
              to="/course/web-development"
              className="continue-btn"
            >
              Continue
            </Link>

          </div>

        </div>


        {/* Learning Summary */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <div>
              <h2>Learning Summary</h2>
              <p>Your learning activity</p>
            </div>

          </div>

          <div className="summary-item">

            <div className="summary-icon">
              📅
            </div>

            <div>
              <strong>12</strong>
              <span>Learning Days</span>
            </div>

          </div>


          <div className="summary-item">

            <div className="summary-icon">
              ⏱️
            </div>

            <div>
              <strong>18h 30m</strong>
              <span>Learning Time</span>
            </div>

          </div>


          <div className="summary-item">

            <div className="summary-icon">
              🎯
            </div>

            <div>
              <strong>85%</strong>
              <span>Weekly Goal</span>
            </div>

          </div>


          <div className="summary-item">

            <div className="summary-icon">
              🔥
            </div>

            <div>
              <strong>7 Days</strong>
              <span>Learning Streak</span>
            </div>

          </div>

        </div>

      </div>


      {/* Recommended Courses */}

      <div className="dashboard-panel recommended-panel">

        <div className="panel-header">

          <div>
            <h2>Recommended Courses</h2>

            <p>
              Explore courses that match your interests.
            </p>
          </div>

          <Link to="/courses">
            Explore All →
          </Link>

        </div>


        <div className="recommended-courses">

          <div className="recommended-course">

            <span>🤖</span>

            <h3>Machine Learning</h3>

            <p>
              Learn machine learning concepts and algorithms.
            </p>

            <Link to="/course/machine-learning">
              View Course →
            </Link>

          </div>


          <div className="recommended-course">

            <span>📊</span>

            <h3>Data Analytics</h3>

            <p>
              Analyze data and discover useful insights.
            </p>

            <Link to="/course/data-analytics">
              View Course →
            </Link>

          </div>


          <div className="recommended-course">

            <span>🧠</span>

            <h3>Artificial Intelligence</h3>

            <p>
              Explore modern AI technologies and applications.
            </p>

            <Link to="/course/artificial-intelligence">
              View Course →
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserDashboard;