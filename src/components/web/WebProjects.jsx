import { useState } from "react";
import "./WebProjects.css";

import PortWebPrev1 from "./PortWebPrev1.png";
import PortWebPrev2 from "./PortWebPrev2.png";
import PortWebPrev3 from "./PortWebPrev3.png";
import PortWebPrev4 from "./PortWebPrev4.png";

import FundFoundPrev1 from "./FundFoundPrev1.png";
import FundFoundPrev2 from "./FundFoundPrev2.png";
import FundFoundPrev3 from "./FundFoundPrev3.png";
import FundFoundPrev4 from "./FundFoundPrev4.png";

import MediClearFauxPrev1 from "./MediClearFauxPrev1.png";
import MediClearFauxPrev2 from "./MediClearFauxPrev2.png";
import MediClearFauxPrev3 from "./MediClearFauxPrev3.png";
import MediClearFauxPrev4 from "./MediClearFauxPrev4.png";
import MediClearFauxPrev5 from "./MediClearFauxPrev5.png";
import MediClearFauxPrev6 from "./MediClearFauxPrev6.png";

import AmazonClonePrev1 from "./AmazonClonePrev1.png";
import AmazonClonePrev2 from "./AmazonClonePrev2.png";
import AmazonClonePrev3 from "./AmazonClonePrev3.png";
import AmazonClonePrev4 from "./AmazonClonePrev4.png";

import GitHubLogo from "../../assets/github-logo.png";

function WebProjects() {
	const [activeFeaturedImage1, setActiveFeaturedImage1] = useState(PortWebPrev1);
	const [activeFeaturedImage2, setActiveFeaturedImage2] = useState(FundFoundPrev1);
	const [activeFeaturedImage3, setActiveFeaturedImage3] = useState(AmazonClonePrev1);

	const featuredImagesPort = [PortWebPrev1, PortWebPrev2, PortWebPrev3, PortWebPrev4];
	const featuredImagesFund = [FundFoundPrev1, FundFoundPrev2, FundFoundPrev3, FundFoundPrev4];
	const mediClearImages = [MediClearFauxPrev1, MediClearFauxPrev2, MediClearFauxPrev3, MediClearFauxPrev4, MediClearFauxPrev5, MediClearFauxPrev6];
	const featuredImagesAmazon = [AmazonClonePrev1, AmazonClonePrev2, AmazonClonePrev3, AmazonClonePrev4];
	const [activeMediClearIndex, setActiveMediClearIndex] = useState(0);

	return (
	<>
      <div className="project-category-header">
        <h2>WEB DEVELOPMENT</h2>

        <p>
          Frontend systems, cinematic interfaces,
          responsive layouts, and immersive UI design.
        </p>
      </div>

      {/* Portfolio Website card begins here */}

      <div className="featured-project-card">

        {/* LEFT SIDE */}

        <div className="featured-project-left">

          <div className="featured-main-image">
            <img
                src={activeFeaturedImage1}
                alt="Portfolio Project"
            />
          </div>

          <div className="featured-thumbnail-row">

            {featuredImagesPort.map((image, index) => (
                <button
                    key={index}
                    className={`featured-thumbnail ${activeFeaturedImage1 === image ? "active" : ""}`}
                    onClick={() => setActiveFeaturedImage1(image)}
                >
                <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                />
                </button>
            ))}

            </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="featured-project-right">

          <p className="featured-label">
            ✦ FEATURED PROJECT
          </p>

          <h3>
            Portfilio Website V1
          </h3>

          <p className="featured-description">
            Personal portfolio interface designed
            to merge cinematic visual storytelling
            with modern frontend architecture.
            Built to showcase multidisciplinary
            creative and technical work through an
            immersive dark-themed UI system.
          </p>

          <div className="featured-tags">

            <span>React</span>
            <span>CSS</span>
            <span>Responsive UI</span>
            <span>Animation</span>
            <span>Portfolio System</span>

          </div>

          <div className="featured-divider"></div>

          <div className="featured-features">

            <h4>KEY FEATURES</h4>

            <ul>
              <li>Cinematic UI design</li>
              <li>Responsive layout system</li>
              <li>Modular project navigation</li>
              <li>Interactive category switching</li>
            </ul>

          </div>

          <div className="featured-buttons">

            <a
              href="https://github.com/hrdksngh"
              target="_blank"
              rel="noreferrer"
              className="live-demo-button"
            >
              Live ↗
            </a>

            <a
              href="https://github.com/hrdksngh"
              target="_blank"
              rel="noreferrer"
              className="github-project-button"
            >
              <img
                src={GitHubLogo}
                alt="GitHub"
              />

              GitHub
            </a>

          </div>

        </div>

       </div>

       {/* Funding Founders card begins here */}

       <div className="featured-project-card featured-project-card-green">

        <div className="featured-project-left">

          <div className="featured-main-image">
            <img
                src={activeFeaturedImage2}
                alt="Portfolio Project"
            />
          </div>

          <div className="featured-thumbnail-row">

            {featuredImagesFund.map((image, index) => (
                <button
                    key={index}
                    className={`featured-thumbnail ${activeFeaturedImage2 === image ? "active" : ""}`}
                    onClick={() => setActiveFeaturedImage2(image)}
                >
                <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                />
                </button>
            ))}

            </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="featured-project-right">

          <p className="featured-label">
            ✦ CLIENT PROJECT
          </p>

          <h3>
            FundingFounders.in
          </h3>

          <p className="featured-description">
            Professional event and networking platform
            developed for founders, investors, and
            startup communities. Designed to deliver a
            clean, responsive experience focused on event
            visibility, mentor discovery, founder
            networking, and structured information flow
          </p>

          <div className="featured-tags">

            <span>React</span>
            <span>Front-End Development</span>
            <span>Responsive Design</span>
            <span>UI/UX</span>
            <span>Landing Pages</span>

          </div>

          <div className="featured-divider"></div>

          <div className="featured-features">

            <h4>KEY FEATURES</h4>

            <ul>
              <li>Responsive multi-section layout</li>
              <li>Clean information hierarchy</li>
              <li>Event-focused landing page structure</li>
              <li>Mobile-friendly interface design</li>
            </ul>

          </div>

          <div className="featured-buttons">

            <a
              href="https://github.com/hrdksngh"
              target="_blank"
              rel="noreferrer"
              className="live-demo-button"
            >
              Live ↗
            </a>

            <a
              href="https://github.com/hrdksngh"
              target="_blank"
              rel="noreferrer"
              className="github-project-button"
            >
              <img
                src={GitHubLogo}
                alt="GitHub"
              />

              GitHub
            </a>

          </div>

        </div>

       
      </div>

      {/*MVP MediClear beings here*/}


<div className="featured-project-card mediclear-card">

  {/* LEFT SIDE CONTENT */}

  <div className="mediclear-left">

    <p className="featured-label mediclear-label">
      ✦ CLIENT MVP APPLICATION
    </p>

    <h3 className="mediclear-title">
      MediClear
    </h3>

    <p className="featured-description">
      Healthcare-focused MVP application designed to
      simplify post-discharge medication
      management and improve patient understanding
      of care instructions.
    </p>

    <div className="featured-tags">

      <span>React</span>
      <span>Frontend</span>
      <span>UI/UX</span>
      <span>Responsive Design</span>
      <span>Application Flow</span>

    </div>

    <div className="featured-divider"></div>

    <div className="featured-features mediclear-features">

      <h4>KEY FEATURES</h4>

      <ul>
        <li>Medication tracking interface</li>
        <li>Structured daily care plans</li>
        <li>Upload-based prescription workflow</li>
        <li>Accessibility-focused mobile UI</li>
        <li>Guided support system</li>
      </ul>

    </div>

    <div className="featured-buttons">

      <a
        href="#"
        className="live-demo-button mediclear-button"
      >
        Prototype ↗
      </a>

      <a
        href="#"
        className="github-project-button"
      >
        <img
          src={GitHubLogo}
          alt="GitHub"
        />

        GitHub
      </a>

    </div>

  </div>

  {/* RIGHT SIDE PHONE CAROUSEL */}

  <div className="mediclear-right">

  <button
    className="carousel-arrow left"
    onClick={() =>
      setActiveMediClearIndex(
        (prev) =>
          (prev - 1 + mediClearImages.length) %
          mediClearImages.length
      )
    }
  >
    ←
  </button>

  <div className="phone-carousel">

    {mediClearImages.map((image, index) => {

      const position =
        (index - activeMediClearIndex + mediClearImages.length) %
        mediClearImages.length;

      let className = "phone-hidden";

      if (position === 0) className = "phone-center";
      else if (position === 1) className = "phone-right-1";
      else if (position === 2) className = "phone-right-2";
      else if (position === mediClearImages.length - 1)
        className = "phone-left-1";
      else if (position === mediClearImages.length - 2)
        className = "phone-left-2";

      return (
        <div
          key={index}
          className={`phone-card ${className}`}
        >
          <img
            src={image}
            alt={`Screen ${index + 1}`}
          />
        </div>
      );
    })}

  </div>

  <button
    className="carousel-arrow right"
    onClick={() =>
      setActiveMediClearIndex(
        (prev) =>
          (prev + 1) %
          mediClearImages.length
      )
    }
  >
    →
  </button>

</div>

</div>

{/* Amazon clone begins here */}

<div className="featured-project-card featured-project-card-amazon">

        <div className="featured-project-left">

          <div className="featured-main-image">
            <img
                src={activeFeaturedImage3}
                alt="Portfolio Project"
            />
          </div>

          <div className="featured-thumbnail-row">

            {featuredImagesAmazon.map((image, index) => (
                <button
                    key={index}
                    className={`featured-thumbnail ${activeFeaturedImage3 === image ? "active" : ""}`}
                    onClick={() => setActiveFeaturedImage3(image)}
                >
                <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                />
                </button>
            ))}

            </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="featured-project-right">

          <p className="featured-label">
            ✦ FOUNDATIONAL PROJECT
          </p>

          <h3>
            Amazon UI Clone
          </h3>

          <p className="featured-description">
            Early frontend development project created to
            study layout structuring, component positioning,
            and large-scale e-commerce interface replication
            using pure HTML and CSS. Built as a foundational
            exercise during the initial stages of frontend
            learning.
          </p>

          <div className="featured-tags">

            <span>HTML</span>
            <span>CSS</span>
            <span>Frontend Fundamentals</span>
            <span>UI Replication</span>

          </div>

          <div className="featured-divider"></div>

          <div className="featured-features">

            <h4>KEY FEATURES</h4>

            <ul>
              <li>Navigation and product grid structuring</li>
              <li>CSS-based interface styling</li>
              <li>Static desktop-focused design</li>
              <li>Foundational frontend implementatio</li>
            </ul>

          </div>

          <div className="featured-buttons">

            <a
              href="https://github.com/hrdksngh"
              target="_blank"
              rel="noreferrer"
              className="github-project-button"
            >
              <img
                src={GitHubLogo}
                alt="GitHub"
              />

              GitHub
            </a>

          </div>

        </div>

       
      </div>
      {/*Last card was above */}
    </>
	)
}

export default WebProjects;