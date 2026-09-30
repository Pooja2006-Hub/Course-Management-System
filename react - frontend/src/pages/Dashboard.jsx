import { Navigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";

function Dashboard() {
  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (currentUser.role !== "user") {
    return <Navigate to="/admin-dashboard" />;
  }

  return <UserDashboard />;
}

export default Dashboard;