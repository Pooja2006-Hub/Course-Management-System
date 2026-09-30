import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <p className="welcome">WELCOME TO COURSE APP</p>

          <h1>
            Learn Today.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p className="hero-text">
            Discover exciting courses, improve your skills and
            achieve your learning goals with our modern learning platform.
          </p>

          <div className="hero-buttons">

            <Link to="/courses" className="primary-btn">
              Explore Courses →
            </Link>

            <Link to="/register" className="secondary-btn">
              Get Started
            </Link>

          </div>
        </div>

        <div className="hero-card">

          <div className="floating-card">
            <span>🎓</span>
            <div>
              <h3>Learn Smarter</h3>
              <p>Grow Your Skills</p>
            </div>
          </div>

          <div className="big-icon">
            📚
          </div>

        </div>

      </section>


      {/* Features */}
      <section className="features">

        <h2>Why Choose Us?</h2>

        <p className="section-text">
          Everything you need to make your learning journey successful.
        </p>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Quality Courses</h3>
            <p>
              Learn from carefully designed courses covering
              important technical skills.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Learn at Your Pace</h3>
            <p>
              Study anytime and continue learning according
              to your own schedule.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Track Progress</h3>
            <p>
              Monitor your learning progress and stay motivated
              throughout your journey.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;