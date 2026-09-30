import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // =========================
    // ADMIN LOGIN
    // =========================

    if (role === "admin") {
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

        return;
      }

      setError(
        "Invalid admin email or password."
      );

      return;
    }


    // =========================
    // USER LOGIN
    // =========================

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

      return;
    }

    setError(
      "Invalid email or password. Please register first."
    );
  };


  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-icon">
          🔐
        </div>

        <h1>Welcome Back!</h1>

        <p className="auth-subtitle">
          Login to continue your learning journey.
        </p>


        {/* ROLE SELECTION */}

        <div className="role-selection">

          <button
            type="button"
            className={
              role === "user"
                ? "role-btn active"
                : "role-btn"
            }
            onClick={() => {
              setRole("user");
              setError("");
            }}
          >
            👨‍🎓 User
          </button>


          <button
            type="button"
            className={
              role === "admin"
                ? "role-btn active"
                : "role-btn"
            }
            onClick={() => {
              setRole("admin");
              setError("");
            }}
          >
            👨‍💼 Admin
          </button>

        </div>


        {/* ERROR */}

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}


        {/* LOGIN FORM */}

        <form onSubmit={handleLogin}>

          <label>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />


          <label>
            Password
          </label>

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
            Login →
          </button>

        </form>


        {/* REGISTER */}

        {role === "user" && (
          <p className="switch-text">
            Don't have an account?

            <Link to="/register">
              {" "}Create Account
            </Link>
          </p>
        )}


        {/* ADMIN DEMO LOGIN */}

        {role === "admin" && (
          <div className="demo-login">

            <h3>
              Demo Admin Login
            </h3>

            <p>
              Email: <strong>admin@gmail.com</strong>
            </p>

            <p>
              Password: <strong>admin123</strong>
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default Login;