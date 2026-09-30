import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="nav-container">

        <Link to="/" className="logo">
          🎓 Course<span>App</span>
        </Link>

        <div className="nav-links">

          <Link to="/">Home</Link>

          <Link to="/courses">Courses</Link>

          {!currentUser && (
            <>
              <Link to="/user-login">User Login</Link>

              <Link to="/register">
                Register
              </Link>

              <Link
                to="/admin-login"
                className="admin-nav-btn"
              >
                Admin Login
              </Link>
            </>
          )}

          {currentUser && currentUser.role === "user" && (
            <>
              <Link to="/dashboard">
                User Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="logout-btn"
              >
                Logout
              </button>
            </>
          )}

          {currentUser && currentUser.role === "admin" && (
            <>
              <Link to="/admin-dashboard">
                Admin Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="logout-btn"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;