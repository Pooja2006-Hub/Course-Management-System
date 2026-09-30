import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import axios from "axios";

const AppContext = createContext(null);

const API_URL = "http://localhost:5000";

export function AppProvider({ children }) {

  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [users, setUsers] = useState([]);

  const [currentUser, setCurrentUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // LOAD DATA FROM JSON SERVER
  useEffect(() => {

    const loadData = async () => {

      try {

        setLoading(true);
        setError("");

        const studentsResponse =
          await axios.get(`${API_URL}/students`);

        const coursesResponse =
          await axios.get(`${API_URL}/courses`);

        const enrollmentsResponse =
          await axios.get(`${API_URL}/enrollments`);

        const usersResponse =
          await axios.get(`${API_URL}/users`);

        setStudents(studentsResponse.data);
        setCourses(coursesResponse.data);
        setEnrollments(enrollmentsResponse.data);
        setUsers(usersResponse.data);

      } catch (err) {

        console.error(
          "JSON Server Error:",
          err
        );

        setError(
          "Unable to connect to JSON Server. Please make sure JSON Server is running on port 5000."
        );

      } finally {

        setLoading(false);

      }

    };

    loadData();

  }, []);

  // LOGIN
  const login = (email, password) => {

    const user = users.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (user) {

      setCurrentUser(user);

      return true;

    }

    return false;
  };

  // LOGOUT
  const logout = () => {

    setCurrentUser(null);

  };

  // ADD COURSE
  const addCourse = async (course) => {

    try {

      const response =
        await axios.post(
          `${API_URL}/courses`,
          course
        );

      setCourses((previousCourses) => [
        ...previousCourses,
        response.data
      ]);

      return true;

    } catch (err) {

      console.error(
        "Add course error:",
        err
      );

      return false;

    }

  };

  // DELETE COURSE
  const deleteCourse = async (courseId) => {

    try {

      await axios.delete(
        `${API_URL}/courses/${courseId}`
      );

      setCourses((previousCourses) =>
        previousCourses.filter(
          (course) =>
            course.id !== courseId
        )
      );

      return true;

    } catch (err) {

      console.error(
        "Delete course error:",
        err
      );

      return false;

    }

  };

  return (
    <AppContext.Provider
      value={{
        students,
        courses,
        enrollments,
        users,
        currentUser,

        login,
        logout,

        addCourse,
        deleteCourse,

        loading,
        error
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// CUSTOM HOOK
export function useAppContext() {

  const context = useContext(AppContext);

  if (!context) {

    throw new Error(
      "useAppContext must be used inside AppProvider"
    );

  }

  return context;
}