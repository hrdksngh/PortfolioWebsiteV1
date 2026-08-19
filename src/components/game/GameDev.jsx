import "./GameDev.css";

import AyuyuHero from "./AyuyuHero.png";

import AyuyuCore1 from "./AyuyuCore1.png";
import AyuyuCore2 from "./AyuyuCore2.png";
import AyuyuCore3 from "./AyuyuCore3.png";
import AyuyuCore4 from "./AyuyuCore4.png";
import AyuyuCore5 from "./AyuyuCore5.png";
import AyuyuCore6 from "./AyuyuCore6.png";

import AyuyuKey1 from "./AyuyuKey1.png";
import AyuyuKey2 from "./AyuyuKey2.png";
import AyuyuKey3 from "./AyuyuKey3.png";
import AyuyuKey4 from "./AyuyuKey4.png";
import AyuyuKey5 from "./AyuyuKey5.png";
import AyuyuKey6 from "./AyuyuKey6.png";

import AyuyuEnemy1 from "./AyuyuEnemy1.png";
import AyuyuEnemy2 from "./AyuyuEnemy2.png";
import AyuyuEnemy3 from "./AyuyuEnemy3.png";
import AyuyuEnemy4 from "./AyuyuEnemy4.png";
import AyuyuEnemy5 from "./AyuyuEnemy5.png";

import UnrealLogo from "./UnrealLogo.png";
import Paper2DLogo from "./Paper2DLogo.png";
import BlueprintLogo from "./BlueprintLogo.png";
import PixelArtLogo from "./PixelArtLogo.png";
import GamePadLogo from "./GamePadLogo.png";

import AyuyuPortfolioTakeAway from "./AyuyuPortfolioTakeAway.png";

const keySystems = [
  {
    icon: AyuyuKey1,
    iconClass: "system-img-character",
    title: (
        <>
            Responsive
            <br />
            Character Controller
        </>
    ),
    text: "Smooth and precise movement with momentum, slide, and variable jumps.",
  },
  {
    icon: AyuyuKey2,
    iconClass: "system-img-hala",
    title: (
        <>
            Halo Mode
            <br />
            Power-Up
        </>
    ),
    text: "Grants temporary power and enables charged projectile attacks.",
  },
  {
    icon: AyuyuKey3,
    iconClass: "system-img-enemy",
    title: (
        <>
            Modular Enemy
            <br />
            Architecture
        </>
    ),
    text: "Patrol, stage reactive, and moved/yo-yoing behavior modules.",
  },
  {
    icon: AyuyuKey4,
    iconClass: "system-img-level",
    title: (
        <>
            Reusable Level
            <br />
            Objects
        </>
    ),
    text: "Hazards, collectibles, platforms, and props that are easy to reuse.",
  },
  {
    icon: AyuyuKey5,
    iconClass: "system-img-platform",
    title: (
        <>
            Moving Platform
            <br />
            System
        </>
    ),
    text: "Vertical, horizontal, and path-based platforms with ping-pong logic.",
  },
  {
    icon: AyuyuKey6,
    iconClass: "system-img-projectile",
    title: (
        <>
            Enemy Projectile
            <br />
            System
        </>
    ),
    text: "Projectile framework with arc and chase logic plus filtered collision.",
  },
];

const enemyTypes = [
  { icon: AyuyuEnemy1, name: "Bats", desc: "Glide swoop flight" },
  { icon: AyuyuEnemy2, name: "Frogs", desc: "Leap attack" },
  { icon: AyuyuEnemy3, name: "Spiders", desc: "Patrol and swing" },
  { icon: AyuyuEnemy4, name: "Rats", desc: "Ground patrol" },
  { icon: AyuyuEnemy5, name: "Fly Enemies", desc: "Turret / Splitter / Random" },
];

const tools = [
  "Unreal Engine 5",
  "Paper2D",
  "Blueprint Visual Scripting",
  "Pixel-art Sprite & Flipbook Workflow",
  "Enhanced Input System",
];

const moreProjects = [
  {
    number: "01",
    title: "Responsive Gameplay HUD & Session End UI System",
    linkLabel: "Link",
    link: "https://github.com/hrdksngh/UE5ResponsiveHUDEndScreenn",
    description:
      "Event-driven responsive HUD with health, cargo, animated currency, timer, resolution-aware layouts and keyboard-navigable end-screen flow.",
  },
  {
    number: "02",
    title: "Persistent Options & Input Remapping System",
    linkLabel: "Part of Super Ayuyu",
    link: "https://hrdksngh.itch.io/super-ayuyu-demo",
    description:
      "Runtime display settings, persistent keyboard remapping, SaveGame-backed preferences, reset/apply workflow and reusable debug-collision controls.",
  },
  {
    number: "03",
    title: "Android Calculator",
    linkLabel: "Link",
    link: "https://github.com/hrdksngh/AndroidCalculatorr",
    description:
      "Android calculator developed as a compact C++ and UI implementation project inside Unreal Engine.",
  },
  {
    number: "04",
    title: "Bounce Tales 3D clone",
    description:
      "Physics-driven 3D ball controller with multiple ball modes, jumping, camera controls, grounded detection and reusable movement systems.",
  },
];

function GameDev() {
  return (
    <section className="game-dev-page" aria-labelledby="game-dev-title">
      <div className="project-category-header game-dev-heading">
        <h2 id="game-dev-title">VIDEO GAME DEVELOPMENT</h2>
        <p>
          Exploring 2D platformers, 3D experiences, and UI-driven game systems through Unreal Engine prototypes.
        </p>
      </div>

      <article className="game-feature-card">
        <div className="game-hero-frame">
          <img src={AyuyuHero} alt="Super Ayuyu gameplay screenshot" />
        </div>

        <div className="game-feature-copy">
          <div className="game-title-row">
            <h3>SUPER AYUYU</h3>
            <a
                className="game-status"
                href="https://hrdksngh.itch.io/super-ayuyu-demo"
                target="_blank"
                rel="noopener noreferrer"
            >
                PLAY GAMEPLAY DEMO
            </a>
          </div>

          <p className="game-meta">
            2D Side-Scrolling Platformer Prototype · Unreal Engine 5 · Paper2D ·
            Blueprint Systems · Solo Project
          </p>

          <p>
            Super Ayuyu is a 2D side-scrolling platformer prototype built in
            Unreal Engine 5 using Paper2D and Blueprint scripting. The focus is
            responsive movement, reusable gameplay systems, modular enemy
            behaviors, animated hazards, moving platforms, checkpoints, and Hala
            Mode combat mechanics.
          </p>
        </div>
      </article>

      <div className="game-two-column">
        <section className="game-panel game-role-panel">
          <h4>
            <span className="panel-icon">♟</span>
            Everything I've Done
          </h4>
          <ul>
            <li>Character controller and movement tuning</li>
            <li>Paper2D sprite and flipbook setup</li>
            <li>Blueprint architecture</li>
            <li>Enemy behavior systems</li>
            <li>Projectile and power-up mechanics</li>
            <li>Moving platform systems</li>
            <li>Hazard and checkpoint logic</li>
            <li>Debugging, iteration, and gameplay balancing</li>
          </ul>
        </section>

        <section className="game-panel game-core-panel">
          <h4>
            <span className="panel-icon">🎮</span>
            Core Gameplay
          </h4>
          <p>
            Play as Ayuyu, a pixel-art child hero on a mission across vibrant 2D
            levels. Run, sprint, jump, crouch, slide, collect a Hala power-up,
            and fire a charged projectile to defeat enemies and overcome
            obstacles. Enemies feature clear, reactable patterns and all level
            objects are designed to be reusable and modular.
          </p>
          <div className="game-sprite-strip" aria-label="gameplay system icons">
            {[AyuyuCore1, AyuyuCore2, AyuyuCore3, AyuyuCore4, AyuyuCore5, AyuyuCore6].map(
              (icon, index) => (
                <img src={icon} alt="" key={`${icon}-${index}`} />
              )
            )}
          </div>
        </section>
      </div>

      <div className="section-divider">
        <span>KEY SYSTEMS BUILT</span>
      </div>

      <div className="key-system-grid">
        {keySystems.map((system) => (
          <article className="system-card" key={system.title}>
            <img className={system.iconClass} src={system.icon} alt="" />
            <h5>{system.title}</h5>
            <p>{system.text}</p>
          </article>
        ))}
      </div>

      <div className="section-divider compact">
        <span>ENEMY TYPES</span>
      </div>

      <div className="enemy-grid">
        {enemyTypes.map((enemy) => (
          <article className="enemy-chip" key={enemy.name}>
            <img src={enemy.icon} alt="" />
            <div>
              <strong>{enemy.name}</strong>
              <span>{enemy.desc}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="game-info-grid">
        <section className="game-panel">
          <h4>
            <span className="panel-icon">⚙</span>
            Technical Highlights
          </h4>
          <ul>
            <li>Reusable paired Blueprint structure</li>
            <li>Event-driven behavior selection</li>
            <li>Designer-friendly exposed variables</li>
            <li>Event dispatchers for decoupled interactions</li>
            <li>Owner checks and tag-based projectile filtering</li>
            <li>Paper2D flipbooks for smooth animations</li>
            <li>Clean pixel-art rendering</li>
            <li>Scalable systems for future content</li>
          </ul>
        </section>

        <section className="game-panel">
          <h4>
            <span className="panel-icon">△</span>
            Development Challenges
          </h4>
          <p>
            Keeping Blueprints scalable while maintaining flexibility for many
            enemy types and mechanics. Solved by creating parent classes and
            shared logic, then implementing distinct movement patterns,
            projectile behavior, and event-driven actions that remain reusable
            yet unique.
          </p>
        </section>

        <section className="game-panel">
          <h4>
            <span className="panel-icon">⚑</span>
            Current Status
          </h4>
          <p>
            Complete playable foundation with character movement, hazards,
            checkpoints, power-ups, enemy types, projectile combat, and reusable
            platform systems.
          </p>
        </section>
      </div>

      <div className="game-bottom-grid">
        <section className="game-panel tools-panel">
            <h4>
                <span className="panel-icon">⚒</span>
                Tools Used
            </h4>

            <div className="tools-list">
                <div className="tool-row">
                    <img src={UnrealLogo} alt="Unreal Engine 5 logo" />
                    <span>Unreal Engine 5</span>
                </div>

                <div className="tool-row">
                    <img src={Paper2DLogo} alt="Paper2D logo" />
                    <span>Paper2D</span>
                </div>

                <div className="tool-row">
                    <img src={BlueprintLogo} alt="Blueprint Visual Scripting logo" />
                    <span>Blueprint & Visual Scripting</span>
                </div>

                <div className="tool-row">
                    <img src={PixelArtLogo} alt="Pixel-art Sprite and Flipbook Workflow logo" />
                    <span>Pixel-art Sprite & Flipbook Workflow</span>
                </div>

                <div className="tool-row">
                    <img src={GamePadLogo} alt="Enhanced Input System logo" />
                    <span>Enhanced Input System</span>
                </div>
            </div>
        </section>

        <section className="game-panel portfolio-panel">
          <div>
            <h4>
              <span className="panel-icon">★</span>
              Portfolio Takeaway
            </h4>
            <p>
              Super Ayuyu demonstrates my ability to design gameplay systems in
              Unreal Engine, organize scalable Blueprint architecture, create
              reactive enemy behavior, and build reusable, friendly, scalable
              platformer mechanics ready for future expansion.
            </p>
          </div>
          <img src={AyuyuPortfolioTakeAway} alt="Pixel-art Ayuyu character" />
        </section>
      </div>



      {/* COMPLETELY SEPARATE SECTION STARTS HERE */}
      <section className="more-projects-section">
        <div className="section-divider more-projects-divider">
          <span>MORE GAME DEVELOPMENT PROJECTS</span>
        </div>

        <p className="more-projects-intro">
          Here are more projects, which I will later add properly on my website:
        </p>

        <div className="more-projects-panel">
          {moreProjects.map((project) => (
            <article className="more-project-row" key={project.title}>
              <div className="more-project-number" aria-hidden="true">
                {project.number}
              </div>

              <div className="more-project-content">
                <h4 className="more-project-title">
                  {project.title}
                </h4>

                <p className="more-project-description">
                  {project.link ? (
                    <>
                      <a
                        className="more-project-link"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkLabel}
                      </a>
                      <span className="more-project-separator"> — </span>
                    </>
                  ) : (
                    <span className="more-project-separator">— </span>
                  )}

                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* COMPLETELY SEPARATE SECTION ENDS HERE */}
    </section>
  );
}

export default GameDev;
