import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");


  const handleRegister = (e) => {

    e.preventDefault();

    setError("");


    // Check passwords

    if (password !== confirmPassword) {

      setError(
        "Passwords do not match."
      );

      return;
    }


    // Check password length

    if (password.length < 6) {

      setError(
        "Password must contain at least 6 characters."
      );

      return;
    }


    // Save registered user

    const newUser = {
      name: name,
      email: email,
      password: password,
    };


    localStorage.setItem(
      "registeredUser",
      JSON.stringify(newUser)
    );


    // Go to login

    navigate("/login");

  };


  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-icon">
          ✨
        </div>


        <h1>
          Create Account
        </h1>


        <p className="auth-subtitle">
          Start your learning journey today.
        </p>


        {/* ERROR */}

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}


        {/* REGISTER FORM */}

        <form onSubmit={handleRegister}>

          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />


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
            placeholder="Create a password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />


          <label>
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
          />


          <button
            type="submit"
            className="auth-btn"
          >
            Create Account →
          </button>

        </form>


        <p className="switch-text">

          Already have an account?

          <Link to="/login">
            {" "}Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;