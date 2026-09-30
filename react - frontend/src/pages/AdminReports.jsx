import { Link } from "react-router-dom";

function AdminReports() {
  return (
    <div className="admin-page">

      <div className="admin-page-header">

        <div>
          <p className="dashboard-label">
            ADMIN PANEL
          </p>

          <h1>
            Reports & Analytics
          </h1>

          <p>
            Monitor platform performance and student progress.
          </p>
        </div>

        <Link
          to="/admin-dashboard"
          className="back-btn"
        >
          ← Dashboard
        </Link>

      </div>


      {/* REPORT CARDS */}

      <div className="report-grid">

        <div className="report-card">
          <span>👨‍🎓</span>
          <h2>125</h2>
          <p>Total Students</p>
        </div>


        <div className="report-card">
          <span>📚</span>
          <h2>6</h2>
          <p>Total Courses</p>
        </div>


        <div className="report-card">
          <span>🎓</span>
          <h2>48</h2>
          <p>Completed Courses</p>
        </div>


        <div className="report-card">
          <span>📈</span>
          <h2>78%</h2>
          <p>Average Progress</p>
        </div>

      </div>


      {/* COURSE PERFORMANCE */}

      <div className="admin-table-card">

        <div className="admin-table-header">
          <h2>
            Course Performance
          </h2>
        </div>


        <div className="report-row header">
          <span>Course</span>
          <span>Students</span>
          <span>Completion</span>
          <span>Rating</span>
        </div>


        <div className="report-row">
          <span>🐍 Python Programming</span>
          <span>45</span>
          <span>82%</span>
          <span>⭐ 4.8</span>
        </div>


        <div className="report-row">
          <span>💻 Web Development</span>
          <span>38</span>
          <span>76%</span>
          <span>⭐ 4.7</span>
        </div>


        <div className="report-row">
          <span>🤖 Machine Learning</span>
          <span>25</span>
          <span>68%</span>
          <span>⭐ 4.6</span>
        </div>


        <div className="report-row">
          <span>📊 Data Analytics</span>
          <span>17</span>
          <span>72%</span>
          <span>⭐ 4.8</span>
        </div>

      </div>

    </div>
  );
}

export default AdminReports;