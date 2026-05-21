import { useState } from "react";
import "./Artworks.css";

import MusicRoom3DPrev1 from "./MusicRoom3DPrev1.png";
import MusicRoom3DPrev2 from "./MusicRoom3DPrev2.png";
import MusicRoom3DPrev3 from "./MusicRoom3DPrev3.jpg";

import Desk3DPrev1 from "./Desk3DPrev1.png";
import Desk3DPrev2 from "./Desk3DPrev2.jpg";
import Desk3DPrev3 from "./Desk3DPrev3.jpg";

function Artworks() {
  const artworkImages = [MusicRoom3DPrev1, MusicRoom3DPrev2, MusicRoom3DPrev3];
  const deskImages = [Desk3DPrev1, Desk3DPrev2, Desk3DPrev3];

  const [activeArtwork, setActiveArtwork] = useState(MusicRoom3DPrev1);
  const [deskArtwork, setDeskArtwork] = useState(Desk3DPrev1);

  return (
    <>
      <div className="project-category-header">
        <h2>ARTWORK</h2>

        <p>
          Stylized 3D environments, hard-surface modeling practice, and gameplay sprite development.
        </p>
      </div>

      {/* ARTWORK CARD 1 */}
    <div className="full-card">

      <div className="artwork-showcase-card">

        {/* LEFT SIDE */}

        <div className="artwork-left">

          <div className="artwork-text-content">

            <h3>
              Music Studio Environment
            </h3>

            <p className="artwork-type">
              <span>Type:</span> Stylized Interior Diorama
            </p>

            <p className="artwork-software">
              <span>Software:</span> Autodesk Maya, Arnold Renderer
            </p>

          </div>

          <div className="artwork-main-image">

            <img
              src={activeArtwork}
              alt="Music Studio Environment"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="artwork-thumbnail-column">

          {artworkImages.map((image, index) => (
            <button
              key={index}
              className={`artwork-thumbnail ${
                activeArtwork === image
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveArtwork(image)}
            >

              <img
                src={image}
                alt={`Artwork Preview ${index + 1}`}
              />

            </button>
          ))}

        </div>

      </div>

      {/* Experimental */}

<div className="artwork-info-cards">

  {/* DESCRIPTION CARD */}

  <div className="artwork-info-card artwork-info-description">

    <div className="artwork-card-title">

      <span className="artwork-card-icon">
        ☐
      </span>

      <h4>Description</h4>

    </div>

    <div className="artwork-card-divider"></div>

    <p>
      A moody music studio environment created
      to explore atmosphere-driven lighting
      and prop storytelling. The scene conveys
      personality and function through carefully
      placed musical instruments.
    </p>

  </div>

  {/* SKILLS CARD */}

  <div className="artwork-info-card artwork-info-skills">

    <div className="artwork-card-title">

      <span className="artwork-card-icon">
        ☆
      </span>

      <h4>Skills Demonstrated</h4>

    </div>

    <div className="artwork-card-divider"></div>

    <ul>
      <li>Environment Storytelling</li>
      <li>Prop Placement</li>
      <li>Mood & Atmosphere</li>
    </ul>

  </div>

  {/* SOFTWARE CARD */}

</div>
</div>

{/* ARTWORK CARD 2 */}

    <div className="full-card">
      <div className="artwork-showcase-card">

        {/* LEFT SIDE */}

        <div className="artwork-left">

          <div className="artwork-text-content">

            <h3>
              Modern Desk
            </h3>

            <p className="artwork-type">
              <span>Type:</span> 3D Environment / Prop Study
            </p>

            <p className="artwork-software">
              <span>Software:</span> Autodesk Maya, Arnold Renderer
            </p>

          </div>

          <div className="artwork-main-image">

            <img
              src={deskArtwork}
              alt="Music Studio Environment"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="artwork-thumbnail-column">

          {deskImages.map((image, index) => (
            <button
              key={index}
              className={`artwork-thumbnail ${
                deskArtwork === image
                  ? "active"
                  : ""
              }`}
              onClick={() => setDeskArtwork(image)}
            >

              <img
                src={image}
                alt={`Artwork Preview ${index + 1}`}
              />

            </button>
          ))}

        </div>

      </div>

      {/* Experimental */}

<div className="artwork-info-cards">

  {/* DESCRIPTION CARD */}

  <div className="artwork-info-card artwork-info-description">

    <div className="artwork-card-title">

      <span className="artwork-card-icon">
        ☐
      </span>

      <h4>Description</h4>

    </div>

    <div className="artwork-card-divider"></div>

    <p>
      A realistic desk environment created to 
      study hard-surface modeling and material 
      definition. The scene focuses on believable 
      proportions, clean topology, and accurate 
      surface response across wood, metal, and 
      plastic materials. 
    </p>

  </div>

  {/* SKILLS CARD */}

  <div className="artwork-info-card artwork-info-skills">

    <div className="artwork-card-title">

      <span className="artwork-card-icon">
        ☆
      </span>

      <h4>Skills Demonstrated</h4>

    </div>

    <div className="artwork-card-divider"></div>

    <ul>
      <li>3D Modeling</li>
      <li>Material Creation</li>
      <li>Environment Composition</li>
    </ul>

  </div>

  {/* SOFTWARE CARD */}

</div>
</div>
    </>
  );
}

export default Artworks;