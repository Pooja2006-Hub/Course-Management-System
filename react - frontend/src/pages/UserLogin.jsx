import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const registeredUser =
      JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      const user = {
        name: registeredUser.name,
        email: registeredUser.email,
        role: "user",
      };

      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );

      navigate("/dashboard");
    } else {
      setError(
        "Invalid email or password. Please register first."
      );
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-icon">
          👨‍🎓
        </div>

        <h1>User Login</h1>

        <p className="auth-subtitle">
          Login to access your learning dashboard.
        </p>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
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
            Login as User →
          </button>

        </form>

        <p className="switch-text">
          Don't have an account?

          <Link to="/register">
            {" "}Create Account
          </Link>
        </p>

        <div className="admin-login-link">
          <p>Are you an administrator?</p>

          <Link to="/admin-login">
            Admin Login →
          </Link>
        </div>

      </div>

    </div>
  );
}

export default UserLogin;