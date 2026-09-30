import { useState } from "react";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const {
    students,
    courses,
    enrollments,
    currentUser,
    logout,
    loading,
    error
  } = useAppContext();

  if (loading) {
    return (
      <div className="message">
        <h2>Loading...</h2>
        <p>Please wait while the data is loading.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="message error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!currentUser) {
    return <Login />;
  }

  if (currentUser.role === "admin") {
    return <AdminDashboard />;
  }

  const myEnrollments = enrollments.filter(
    (enrollment) =>
      enrollment.studentId === currentUser.id
  );

  const activeEnrollments = myEnrollments.filter(
    (enrollment) =>
      enrollment.status === "Active"
  ).length;

  return (
    <div className="dashboard">

      {/* HEADER */}
      <header className="header">

        <div>
          <h1>Student Learning Dashboard</h1>

          <p>
            Welcome, {currentUser.name} 👋
          </p>
        </div>

        <button
          className="logout-button"
          onClick={logout}
        >
          Logout
        </button>

      </header>

      {/* SUMMARY */}
      <section className="summary">

        <div className="summary-card">
          <div className="icon">👨‍🎓</div>

          <div>
            <h3>Total Students</h3>
            <p>{students.length}</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="icon">📚</div>

          <div>
            <h3>Total Courses</h3>
            <p>{courses.length}</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="icon">📝</div>

          <div>
            <h3>Total Enrollments</h3>
            <p>{enrollments.length}</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="icon">📊</div>

          <div>
            <h3>Active Enrollments</h3>
            <p>{activeEnrollments}</p>
          </div>
        </div>

      </section>

      {/* MY COURSES */}
      <section className="section">

        <div className="section-title">

          <h2>My Courses</h2>

          <span>
            {myEnrollments.length} Courses
          </span>

        </div>

        <div className="course-grid">

          {myEnrollments.map((enrollment) => {

            const course = courses.find(
              (course) =>
                course.id === enrollment.courseId
            );

            if (!course) {
              return null;
            }

            return (
              <div
                className="course-card"
                key={enrollment.id}
              >

                <div className="course-icon">
                  📖
                </div>

                <h3>
                  {course.title}
                </h3>

                <p>
                  <strong>Instructor:</strong>{" "}
                  {course.instructor}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {enrollment.status}
                </p>

                <div className="progress-wrapper">

                  <div className="progress-bar">

                    <div
                      className="progress-fill"
                      style={{
                        width:
                          `${enrollment.progress}%`
                      }}
                    />

                  </div>

                  <span>
                    {enrollment.progress}%
                  </span>

                </div>

                <button
                  className="start-learning-button"
                  onClick={() =>
                    setSelectedCourse(course)
                  }
                >
                  Start Learning 🚀
                </button>

              </div>
            );
          })}

        </div>

      </section>

      {/* LEARNING PAGE */}
      {selectedCourse && (

        <section className="learning-section">

          <div className="learning-card">

            <div className="learning-icon">
              🎓
            </div>

            <h2>
              {selectedCourse.title}
            </h2>

            <p>
              Welcome to your learning page! 🚀
            </p>

            <div className="learning-info">

              <p>
                <strong>Instructor:</strong>{" "}
                {selectedCourse.instructor}
              </p>

              <p>
                <strong>Duration:</strong>{" "}
                {selectedCourse.duration}
              </p>

              <p>
                <strong>Level:</strong>{" "}
                {selectedCourse.level}
              </p>

            </div>

            <button
              className="back-button"
              onClick={() =>
                setSelectedCourse(null)
              }
            >
              ← Back to My Courses
            </button>

          </div>

        </section>

      )}

      {/* STUDENT INFORMATION */}
      <section className="section">

        <div className="section-title">

          <h2>Student Information</h2>

          <span>
            {students.length} Students
          </span>

        </div>

        <div className="student-grid">

          {students.map((student) => (

            <div
              className="student-card"
              key={student.id}
            >

              <div className="student-avatar">
                {student.name.charAt(0)}
              </div>

              <div className="student-info">

                <h3>
                  {student.name}
                </h3>

                <p>
                  {student.email}
                </p>

                <p>
                  {student.department}
                </p>

                <span>
                  {student.year}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* AVAILABLE COURSES */}
      <section className="section">

        <div className="section-title">

          <h2>Available Courses</h2>

          <span>
            {courses.length} Courses
          </span>

        </div>

        <div className="course-grid">

          {courses.map((course) => (

            <div
              className="course-card"
              key={course.id}
            >

              <div className="course-icon">
                📚
              </div>

              <h3>
                {course.title}
              </h3>

              <p>
                <strong>Instructor:</strong>{" "}
                {course.instructor}
              </p>

              <div className="course-details">

                <span>
                  ⏱ {course.duration}
                </span>

                <span>
                  🎯 {course.level}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ENROLLMENT REPORT */}
      <section className="section">

        <div className="section-title">

          <h2>Enrollment & Progress</h2>

          <span>
            {enrollments.length} Records
          </span>

        </div>

        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>Student ID</th>
                <th>Course ID</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>

            </thead>

            <tbody>

              {enrollments.map((enrollment) => (

                <tr
                  key={enrollment.id}
                >

                  <td>
                    Student #{enrollment.studentId}
                  </td>

                  <td>
                    Course #{enrollment.courseId}
                  </td>

                  <td>

                    <span
                      className={`status ${
                        enrollment.status.toLowerCase()
                      }`}
                    >
                      {enrollment.status}
                    </span>

                  </td>

                  <td>

                    <div className="progress-wrapper">

                      <div className="progress-bar">

                        <div
                          className="progress-fill"
                          style={{
                            width:
                              `${enrollment.progress}%`
                          }}
                        />

                      </div>

                      <span>
                        {enrollment.progress}%
                      </span>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <p>
          FSWD Task • React + Axios + JSON Server + Context API
        </p>

      </footer>

    </div>
  );
}

export default App;