import { useState } from "react";
import "./App.css";
import {FaUser, FaCode, FaVideo, FaSearch} from "react-icons/fa";

import HeroBanner from "./assets/HeroBanner.png";
import PortfolioBackground from "./assets/PortfolioBackground.png";
import ProfileImage from "./assets/X1.png";
import LinkedInLogo from "./assets/linkedin-logo.png";
import GitHubLogo from "./assets/github-logo.png";

import WebProjects from "./components/web/WebProjects";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [activeProjectSection, setActiveProjectSection] = useState("web");

  const tabs = [
  {
    id: "about",
    label: "About Me",
    icon: <FaUser />,
  },

  {
    id: "development",
    label: "Projects",
    icon: <FaCode />,
  },

  {
    id: "video",
    label: "Video Editing",
    icon: <FaVideo />,
  },

  {
    id: "research",
    label: "Investigative Work",
    icon: <FaSearch />,
  },
];
  const renderProjectContent = () => {
  switch (activeProjectSection) {

    case "web":
        return <WebProjects />;;

    case "game":
      return (
        <>
          <h2>Game Development</h2>

          <p>
            Gameplay systems, Unreal Engine exploration,
            interactive storytelling, and mechanics research.
          </p>

          <div className="project-grid">

            <div className="project-card">
              <div className="project-image"></div>

              <div className="project-info">
                <h3>Gameplay Systems</h3>

                <p>
                  Experimentation with mechanics,
                  interaction systems, and worldbuilding.
                </p>
              </div>
            </div>

          </div>
        </>
      );

    case "art":
      return (
        <>
          <h2>Art & Visual Development</h2>

          <p>
            Concept studies, visual atmosphere,
            cinematic compositions, and environmental design.
          </p>

          <div className="project-grid">

            <div className="project-card">
              <div className="project-image"></div>

              <div className="project-info">
                <h3>Concept Frames</h3>

                <p>
                  Visual storytelling through cinematic
                  composition and mood exploration.
                </p>
              </div>
            </div>

          </div>
        </>
      );

    case "software":
      return (
        <>
          <h2>Software Systems</h2>

          <p>
            Technical tools, utilities, AI experimentation,
            and analytical systems.
          </p>

          <div className="project-grid">

            <div className="project-card">
              <div className="project-image"></div>

              <div className="project-info">
                <h3>AI Utilities</h3>

                <p>
                  Experimental tools focused on
                  automation and intelligent workflows.
                </p>
              </div>
            </div>

          </div>
        </>
      );

    default:
      return null;
  }
};
  const renderContent = () => {
    switch (activeTab) {
      case "about":
  return (
    <div className="about-layout">
      {/* LEFT SIDE */}

      <div className="about-left">
        <div className="profile-image">
          <img src={ProfileImage} alt="Hardik Singh" />
        </div>

        <div className="contact-block">
          <p className="contact-label">Phone</p>
          <p className="contact-text">
            +91-7836871309
          </p>
        </div>

        <div className="contact-block">
          <p className="contact-label">Email</p>
          <p className="contact-text">
            hardiksingh30012@gmail.com
          </p>
        </div>

        <div className="contact-block">
          <p className="contact-label">Socials</p>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/hrdksngh/"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn"
              />
            </a>

            <a
              href="https://github.com/hrdksngh"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <img
                src={GitHubLogo}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="about-right">
        <div className="about-section">
          <h2>Profile Summary</h2>

          <p>
            Creative technical generalist with a background in
            computer science, focused on Interactive Storytelling,
            Game Development and Investigative Research.
            Experienced in web development, C++ programming,
            video editing, and research-driven problem solving,
            with growing specialization in Unreal Engine 5 and
            gameplay systems.
          </p>

          <p>
            Seeking opportunities in game development,
            gameplay programming, and creative technology.
          </p>
        </div>

        <div className="about-section">
          <h2>Technical Skills</h2>

          <ul className="details-list">
            <li>
              <strong>Game Development: </strong>
              Unreal Engine 5, C++, Gameplay Programming
              Fundamentals, Blueprint Visual Scripting
            </li>

            <li>
              <strong>Programming Languages: </strong>
              C++, JavaScript
            </li>

            <li>
              <strong>Web Technologies: </strong>
              HTML5, CSS, JavaScript, React
            </li>

            <li>
              <strong>Development Tools: </strong>
              Git/Version Control, Visual Studio,
              Debugging Tools
            </li>

            <li>
              <strong>Creative Production: </strong>
              Video Editing, Photography,
              Content Writing, Project Direction
            </li>

            <li>
              <strong>Core Competencies: </strong>
              Object-Oriented Programming,
              Data Structures & Algorithms,
              Problem-Solving, Visual Storytelling
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Targeting Roles</h2>

          <div className="roles-list">
            <span>Gameplay Programmer</span>

            <span>3D Artist (Props/Env)</span>

            <span>Developer (C++/AIML)</span>
          </div>
        </div>

        <div className="about-section">
          <h2>Education</h2>

          <ul className="details-list">
            <li>
              <strong>HSC: </strong>
              Central Board of Secondary Education
              (2021)
            </li>

            <li>
              <strong>B.Tech (CSE): </strong>
              Gurugobind Singh Indraprastha
              University (2025)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

      case "development":
  return (
    <div className="projects-layout">

      {/* LEFT VERTICAL NAV */}

      <aside className="projects-sidebar">
        <button
  className={`project-nav-item ${
    activeProjectSection === "web" ? "active" : ""
  }`}
  onClick={() => setActiveProjectSection("web")}
>
  <div className="project-nav-icon">🌐</div>
  <span>Web</span>
</button>

<div className="project-nav-line"></div>

<button
  className={`project-nav-item ${
    activeProjectSection === "game" ? "active" : ""
  }`}
  onClick={() => setActiveProjectSection("game")}
>
  <div className="project-nav-icon">🎮</div>
  <span>Game</span>
</button>

<div className="project-nav-line"></div>

<button
  className={`project-nav-item ${
    activeProjectSection === "art" ? "active" : ""
  }`}
  onClick={() => setActiveProjectSection("art")}
>
  <div className="project-nav-icon">🎨</div>
  <span>Art</span>
</button>

<div className="project-nav-line"></div>

<button
  className={`project-nav-item ${
    activeProjectSection === "software" ? "active" : ""
  }`}
  onClick={() => setActiveProjectSection("software")}
>
  <div className="project-nav-icon">⌨</div>
  <span>Software</span>
</button>
      </aside>

      {/* RIGHT CONTENT */}

      <div className="projects-content">
        <div className="content-panel">
            {renderProjectContent()}
        </div>
      </div>
    </div>
  );

      case "video":
        return (
          <div className="content-panel">
            <h2>Video</h2>

            <p>
              Atmosphere-driven editing, cinematic pacing, visual storytelling,
              and emotionally focused digital narratives.
            </p>

            <div className="project-grid">
              <div className="project-card">
                <div className="project-image"></div>

                <div className="project-info">
                  <h3>Cinematic Editing</h3>

                  <p>
                    Story-focused editing with noir-inspired pacing and mood.
                  </p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image"></div>

                <div className="project-info">
                  <h3>Visual Narratives</h3>

                  <p>
                    Combining atmosphere, motion, and sound-driven storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "research":
        return (
          <div className="content-panel">
            <h2>Research</h2>

            <p>
              Investigative workflows, analytical systems, pattern recognition,
              and research-oriented creative exploration.
            </p>

            <div className="project-grid">
              <div className="project-card">
                <div className="project-image"></div>

                <div className="project-info">
                  <h3>Case Analysis</h3>

                  <p>
                    Investigative frameworks focused on digital research and
                    analytical exploration.
                  </p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image"></div>

                <div className="project-info">
                  <h3>Research Systems</h3>

                  <p>
                    Organizing information and uncovering hidden connections
                    across complex narratives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <section className="hero-section">
        <img
          src={HeroBanner}
          alt="Hero Banner"
          className="hero-image"
        />

        <div className="overlay"></div>
        <div className="vignette"></div>

        <div className="hero-content">
          <h1 className="name">Hardik Singh</h1>

          <div className="underline"></div>

          <p className="tagline">
            Creative technical generalist focused on{" "}
            <span>interactive storytelling</span> and{" "}
            <span>systems</span>.
          </p>
        </div>
      </section>

        <section className="navigation-section">
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${
                        activeTab === tab.id ? "active" : ""
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                        >
                <span className="tab-icon">
                    {tab.icon}
                </span>

                <span className="tab-label">
                    {tab.label}
                </span>
                    </button>
                ))}
            </div>
        </section>

      <section className="content-section">
        <div className="content-container">{renderContent()}</div>
      </section>
    </div>
  );
}

export default App;