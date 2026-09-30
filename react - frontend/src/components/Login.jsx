import { useState } from "react";
import { useAppContext } from "../context/AppContext";

function Login() {
  const { login, loading } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    setLoginError("");

    const success = login(email, password);

    if (!success) {
      setLoginError("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-icon">
          🎓
        </div>

        <h1>Student Portal</h1>

        <p className="login-subtitle">
          Login to access your dashboard
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {loginError && (
            <p className="login-error">
              {loginError}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>

        </form>

        <div className="demo-login">
          <p>Demo Login</p>

          <small>
            Email: pooja@gmail.com
          </small>

          <small>
            Password: 1234
          </small>
        </div>

      </div>
    </div>
  );
}

export default Login;