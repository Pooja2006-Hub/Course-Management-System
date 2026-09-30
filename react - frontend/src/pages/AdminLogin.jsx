import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      const admin = {
        name: "Admin",
        email: "admin@gmail.com",
        role: "admin",
      };

      localStorage.setItem(
        "currentUser",
        JSON.stringify(admin)
      );

      navigate("/admin-dashboard");
    } else {
      setError(
        "Invalid admin email or password."
      );
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-icon">
          👨‍💼
        </div>

        <h1>Admin Login</h1>

        <p className="auth-subtitle">
          Login to manage the Course Management System.
        </p>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          <label>Admin Email</label>

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <label>Admin Password</label>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Login as Admin →
          </button>

        </form>

        <div className="demo-login">

          <h3>Demo Admin Login</h3>

          <p>
            Email: <strong>admin@gmail.com</strong>
          </p>

          <p>
            Password: <strong>admin123</strong>
          </p>

        </div>

        <div className="admin-login-link">

          <p>Are you a student?</p>

          <Link to="/user-login">
            User Login →
          </Link>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;