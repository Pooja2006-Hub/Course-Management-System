import { useAppContext } from "../context/AppContext";

function AdminDashboard() {
  const {
    students,
    courses,
    enrollments,
    logout
  } = useAppContext();

  return (
    <div className="dashboard">

      {/* HEADER */}

      <header className="header">

        <div>
          <h1>Admin Dashboard</h1>

          <p>
            Welcome, Admin 👨‍💼
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

          <div className="icon">
            👨‍🎓
          </div>

          <div>
            <h3>Total Students</h3>
            <p>{students.length}</p>
          </div>

        </div>


        <div className="summary-card">

          <div className="icon">
            📚
          </div>

          <div>
            <h3>Total Courses</h3>
            <p>{courses.length}</p>
          </div>

        </div>


        <div className="summary-card">

          <div className="icon">
            📝
          </div>

          <div>
            <h3>Total Enrollments</h3>
            <p>{enrollments.length}</p>
          </div>

        </div>


        <div className="summary-card">

          <div className="icon">
            📊
          </div>

          <div>
            <h3>Active Enrollments</h3>

            <p>
              {
                enrollments.filter(
                  (enrollment) =>
                    enrollment.status === "Active"
                ).length
              }
            </p>

          </div>

        </div>

      </section>


      {/* STUDENT MANAGEMENT */}

      <section className="section">

        <div className="section-title">

          <h2>Student Management</h2>

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


      {/* COURSE MANAGEMENT */}

      <section className="section">

        <div className="section-title">

          <h2>Course Management</h2>

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

          <h2>
            Enrollment Report
          </h2>

          <span>
            {enrollments.length} Records
          </span>

        </div>


        <div className="table-container">

          <table>

            <thead>

              <tr>

                <th>
                  Student ID
                </th>

                <th>
                  Course ID
                </th>

                <th>
                  Status
                </th>

                <th>
                  Progress
                </th>

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
                        ></div>

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


      <footer>

        <p>
          FSWD Task • Admin Panel • React + Axios + JSON Server
        </p>

      </footer>

    </div>
  );
}

export default AdminDashboard;