import { Link } from "react-router-dom";

function AdminCourses() {
  return (
    <div className="admin-page">

      <div className="admin-page-header">

        <div>
          <p className="dashboard-label">
            ADMIN PANEL
          </p>

          <h1>
            Course Management
          </h1>

          <p>
            Add, edit and manage all courses.
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
          <h2>Available Courses</h2>

          <button className="add-btn">
            + Add Course
          </button>
        </div>


        <div className="admin-course-row header">
          <span>Course</span>
          <span>Category</span>
          <span>Students</span>
          <span>Status</span>
          <span>Action</span>
        </div>


        <div className="admin-course-row">
          <span>🐍 Python Programming</span>
          <span>Programming</span>
          <span>45</span>
          <span className="status completed">
            Active
          </span>

          <button className="edit-btn">
            Edit
          </button>
        </div>


        <div className="admin-course-row">
          <span>💻 Web Development</span>
          <span>Development</span>
          <span>38</span>
          <span className="status completed">
            Active
          </span>

          <button className="edit-btn">
            Edit
          </button>
        </div>


        <div className="admin-course-row">
          <span>🤖 Machine Learning</span>
          <span>AI / ML</span>
          <span>25</span>
          <span className="status completed">
            Active
          </span>

          <button className="edit-btn">
            Edit
          </button>
        </div>


        <div className="admin-course-row">
          <span>📊 Data Analytics</span>
          <span>Analytics</span>
          <span>17</span>
          <span className="status completed">
            Active
          </span>

          <button className="edit-btn">
            Edit
          </button>
        </div>

      </div>

    </div>
  );
}

export default AdminCourses;