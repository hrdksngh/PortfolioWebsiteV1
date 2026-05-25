{/*My Mobile View: 444x869*/}
import { useState } from "react";
import "./App.css";
import {FaUser, FaCode, FaVideo, FaSearch, FaUserAlt, FaBullseye, FaGraduationCap,} from "react-icons/fa";

import HeroBanner from "./assets/HeroBanner.png";
import PortfolioBackground from "./assets/PortfolioBackground.png";
import ProfileImage from "./assets/X1.png";
import LinkedInLogo from "./assets/linkedin-logo.png";
import GitHubLogo from "./assets/github-logo.png";

import WebProjects from "./components/web/WebProjects";
import GameDev from "./components/game/GameDev";
import Artworks from "./components/art/Artworks";
import Software from "./components/software/Software";

import Video from "./components/video/Video";
import PI from "./components/pi/PI";

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
        return <WebProjects />;

    case "game":
      return <GameDev />;

    case "art":
      return <Artworks />;

    case "software":
      return <Software />;

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
        <div className="about-section roles-mobile-mid">
            <h2 className="section-heading">
                <FaBullseye className="section-heading-icon" />
                Targeting Roles
            </h2>

          <div className="roles-list">
            <span>Gameplay Programmer</span>

            <span>3D Artist (Props/Env)</span>

            <span>Developer (C++/AIML)</span>
          </div>
        </div>

        <div className="about-section education-mobile-mid">

  <h2 className="section-heading">
    <FaGraduationCap className="section-heading-icon education-icon" />
    Education
  </h2>

  <div className="education-timeline">

    {/* ITEM 1 */}

    <div className="timeline-item">

    <div className="timeline-icon">
        <FaGraduationCap />
    </div>

    <div className="timeline-dot"></div>
    <div className="timeline-line"></div>

    <div className="timeline-content">

        <div className="timeline-top">
            <h3>HSC</h3>
            <p>Central Board of Secondary Education</p>
        </div>

        <span className="timeline-year">2021</span>

    </div>

</div>

    {/* ITEM 2 */}

    <div className="timeline-item">

    <div className="timeline-icon">
        <FaGraduationCap />
    </div>

    <div className="timeline-dot"></div>
    <div className="timeline-line"></div>

    <div className="timeline-content">

        <div className="timeline-top">
            <h3>B.Tech (CSE)</h3>
            <p>Gurugobind Singh Indraprastha University</p>
        </div>

        <span className="timeline-year">2025</span>

    </div>

</div>

  </div>

</div>

      </div>

      {/* RIGHT SIDE */}

      <div className="about-right">
        <div className="about-section">
          <h2 className="section-heading">
            <FaUserAlt className="section-heading-icon" />
            Profile Summary
          </h2>

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
  <h2 className="skills-heading">
    <FaCode className="skills-heading-icon" />
    Technical Skills
  </h2>

  <div className="skills-grid">

    <div className="skill-card">
      <div className="skill-icon purple">📦</div>

      <div className="skill-content">
        <h3>Game Development</h3>

        <p>
          Unreal Engine 5, C++,
          Gameplay Programming
        </p>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-icon blue">C++</div>

      <div className="skill-content">
        <h3>Programming Languages</h3>

        <p>
          C++, JavaScript
        </p>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-icon green">🌐</div>

      <div className="skill-content">
        <h3>Web Technologies</h3>

        <p>
          HTML5, CSS, JavaScript,
          React
        </p>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-icon yellow">🔧</div>

      <div className="skill-content">
        <h3>Development Tools</h3>

        <p>
          Git/Version Control,
          Visual Studio,
          Debugging Tools
        </p>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-icon purple">🎬</div>

      <div className="skill-content">
        <h3>Creative Production</h3>

        <p>
          Video Editing,
          Photography,
          Content Writing,
          Project Direction
        </p>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-icon red">🧠</div>

      <div className="skill-content">
        <h3>Core Competencies</h3>

        <p>
          OOP, Data Structures &
          Algorithms, Problem Solving,
          Visual Storytelling
        </p>
      </div>
    </div>

  </div>
</div>

        <div className="about-section roles-desktop">
            <h2 className="section-heading">
                <FaBullseye className="section-heading-icon" />
                Targeting Roles
            </h2>

          <div className="roles-list">
            <span>Gameplay Programmer</span>

            <span>3D Artist (Props/Env)</span>

            <span>Developer (C++/AIML)</span>
          </div>
        </div>


        <div className="about-section education-desktop">
  <h2 className="section-heading">
    <FaGraduationCap className="section-heading-icon education-icon" />
    Education
  </h2>

  <div className="education-grid">

    {/* HSC */}

    <div className="education-card">

      <div className="education-top">

        <div className="education-left">

          <div className="education-icon-box">
            🎓
          </div>

          <div className="education-content">
            <h3>HSC</h3>

            <p>
              Central Board of Secondary Education
            </p>
          </div>

        </div>

        <div className="education-year">
          2021
        </div>

      </div>

      <div className="education-line"></div>

    </div>

    {/* BTECH */}

    <div className="education-card">

      <div className="education-top">

        <div className="education-left">

          <div className="education-icon-box">
            🏛
          </div>

          <div className="education-content">
            <h3>B.Tech (CSE)</h3>

            <p>
              Gurugobind Singh Indraprastha University
            </p>
          </div>

        </div>

        <div className="education-year">
          2025
        </div>

      </div>

      <div className="education-line"></div>

    </div>

  </div>
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

      case "video": return <Video />;

      case "research": return <PI />;

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










      <div className="mobile-bottom-nav">

  <button
    className={`mobile-nav-item ${
      activeTab === "about" ? "active" : ""
    }`}
    onClick={() => setActiveTab("about")}
  >
    <FaUser />
    <span>About</span>
  </button>

  <button
    className={`mobile-nav-item ${
      activeTab === "development" ? "active" : ""
    }`}
    onClick={() => setActiveTab("development")}
  >
    <FaCode />
    <span>Projects</span>
  </button>

  <button
    className={`mobile-nav-item ${
      activeTab === "video" ? "active" : ""
    }`}
    onClick={() => setActiveTab("video")}
  >
    <FaVideo />
    <span>Editing</span>
  </button>

  <button
    className={`mobile-nav-item ${
      activeTab === "research" ? "active" : ""
    }`}
    onClick={() => setActiveTab("research")}
  >
    <FaSearch />
    <span>Investigative Work</span>
  </button>

</div>
    </div>
  );
}

export default App;