import axios from "axios";

const API_URL = "http://localhost:5000";


// ===============================
// GET STUDENTS
// ===============================

export const getStudents = () => {
  return axios.get(`${API_URL}/students`);
};


// ===============================
// GET COURSES
// ===============================

export const getCourses = () => {
  return axios.get(`${API_URL}/courses`);
};


// ===============================
// GET ENROLLMENTS
// ===============================

export const getEnrollments = () => {
  return axios.get(`${API_URL}/enrollments`);
};


// ===============================
// GET USERS
// ===============================

export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};


// ===============================
// ADD COURSE
// ===============================

export const addCourse = (course) => {
  return axios.post(`${API_URL}/courses`, course);
};


// ===============================
// DELETE COURSE
// ===============================

export const deleteCourse = (courseId) => {
  return axios.delete(`${API_URL}/courses/${courseId}`);
};