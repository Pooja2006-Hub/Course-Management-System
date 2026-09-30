import { Link } from "react-router-dom";

function AdminStudents() {
  return (
    <div className="admin-page">

      <div className="admin-page-header">
        <div>
          <p className="dashboard-label">ADMIN PANEL</p>

          <h1>Student Management</h1>

          <p>
            View students and monitor their learning progress.
          </p>
        </div>

        <Link
          to="/admin-dashboard"
          className="back-btn"
        >
          ← Dashboard
        </Link>
      </div>

      <div className="admin-table-card">

        <div className="admin-table-header">
          <h2>Registered Students</h2>

          <span className="student-count">
            125 Students
          </span>
        </div>

        <div className="student-row header">
          <span>Student</span>
          <span>Email</span>
          <span>Courses</span>
          <span>Progress</span>
          <span>Status</span>
        </div>

        <div className="student-row">
          <span>👩 Priya</span>
          <span>priya@gmail.com</span>
          <span>4</span>
          <span>85%</span>
          <span className="status completed">
            Active
          </span>
        </div>

        <div className="student-row">
          <span>👨 Rahul</span>
          <span>rahul@gmail.com</span>
          <span>3</span>
          <span>65%</span>
          <span className="status learning">
            Learning
          </span>
        </div>

        <div className="student-row">
          <span>👩 Ananya</span>
          <span>ananya@gmail.com</span>
          <span>5</span>
          <span>90%</span>
          <span className="status completed">
            Active
          </span>
        </div>

        <div className="student-row">
          <span>👨 Arun</span>
          <span>arun@gmail.com</span>
          <span>2</span>
          <span>40%</span>
          <span className="status learning">
            Learning
          </span>
        </div>

      </div>

    </div>
  );
}

export default AdminStudents;