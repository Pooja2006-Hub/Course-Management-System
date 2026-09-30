import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="dashboard-container">

      {/* ADMIN HEADER */}

      <div className="dashboard-top">

        <div>
          <p className="dashboard-label">
            ADMIN DASHBOARD
          </p>

          <h1>
            Welcome back, Admin 👋
          </h1>

          <p className="dashboard-subtitle">
            Manage students, courses and learning activities.
          </p>
        </div>

        <div className="dashboard-avatar admin-avatar">
          A
        </div>

      </div>


      {/* STATISTICS */}

      <div className="dashboard-stats">

        <div className="dashboard-stat">
          <div className="stat-icon purple">
            👨‍🎓
          </div>

          <div>
            <h2>125</h2>
            <p>Total Students</p>
          </div>
        </div>


        <div className="dashboard-stat">
          <div className="stat-icon blue">
            📚
          </div>

          <div>
            <h2>6</h2>
            <p>Total Courses</p>
          </div>
        </div>


        <div className="dashboard-stat">
          <div className="stat-icon green">
            🏆
          </div>

          <div>
            <h2>48</h2>
            <p>Completed Courses</p>
          </div>
        </div>


        <div className="dashboard-stat">
          <div className="stat-icon orange">
            📈
          </div>

          <div>
            <h2>78%</h2>
            <p>Average Progress</p>
          </div>
        </div>

      </div>


      {/* MANAGEMENT */}

      <div className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h2>Management</h2>

            <p>
              Manage your Course Management System.
            </p>
          </div>

        </div>


        <div className="admin-management-grid">

          {/* MANAGE COURSES */}

          <div className="admin-management-card">

            <div className="management-icon">
              📚
            </div>

            <h3>
              Manage Courses
            </h3>

            <p>
              Add, edit and manage courses available
              to students.
            </p>

            <Link
              to="/admin/courses"
              className="admin-action-btn"
            >
              Manage Courses →
            </Link>

          </div>


          {/* MANAGE STUDENTS */}

          <div className="admin-management-card">

            <div className="management-icon">
              👨‍🎓
            </div>

            <h3>
              Manage Students
            </h3>

            <p>
              View registered students and their
              learning progress.
            </p>

            <Link
              to="/admin/students"
              className="admin-action-btn"
            >
              View Students →
            </Link>

          </div>


          {/* REPORTS */}

          <div className="admin-management-card">

            <div className="management-icon">
              📊
            </div>

            <h3>
              Reports
            </h3>

            <p>
              View course statistics and student
              performance.
            </p>

            <Link
              to="/admin/reports"
              className="admin-action-btn"
            >
              View Reports →
            </Link>

          </div>

        </div>

      </div>


      {/* RECENT ACTIVITY */}

      <div className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h2>
              Recent Activity
            </h2>

            <p>
              Latest student learning activities.
            </p>
          </div>

          <Link
            to="/admin/students"
            className="view-link"
          >
            View All →
          </Link>

        </div>


        <div className="activity-table">

          <div className="activity-row activity-header">
            <span>Student</span>
            <span>Course</span>
            <span>Progress</span>
            <span>Status</span>
          </div>


          <div className="activity-row">
            <span>Priya</span>
            <span>Python Programming</span>
            <span>100%</span>
            <span className="status completed">
              Completed
            </span>
          </div>


          <div className="activity-row">
            <span>Rahul</span>
            <span>Web Development</span>
            <span>65%</span>
            <span className="status learning">
              In Progress
            </span>
          </div>


          <div className="activity-row">
            <span>Ananya</span>
            <span>Machine Learning</span>
            <span>40%</span>
            <span className="status learning">
              In Progress
            </span>
          </div>


          <div className="activity-row">
            <span>Arun</span>
            <span>Data Analytics</span>
            <span>90%</span>
            <span className="status completed">
              Completed
            </span>
          </div>

        </div>

      </div>


      {/* PLATFORM OVERVIEW */}

      <div className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h2>
              Platform Overview
            </h2>

            <p>
              Overall Course Management System statistics.
            </p>
          </div>

        </div>


        <div className="overview-grid">

          <div className="overview-item">
            <span>👨‍🎓</span>
            <strong>125</strong>
            <p>Registered Students</p>
          </div>


          <div className="overview-item">
            <span>📚</span>
            <strong>6</strong>
            <p>Available Courses</p>
          </div>


          <div className="overview-item">
            <span>🎓</span>
            <strong>48</strong>
            <p>Course Completions</p>
          </div>


          <div className="overview-item">
            <span>⭐</span>
            <strong>4.8</strong>
            <p>Average Rating</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;