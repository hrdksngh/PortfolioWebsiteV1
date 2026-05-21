import "./PI.css";

function PI() {
  return (
    <>
      {/* HEADER */}

      <div className="project-category-header">

        <h2>
          INVESTIGATIVE WORK
        </h2>

        <p>
          Research-driven problem solving,
          situational analysis, behavioral
          observation, and guidance-oriented
          support focused on helping people
          navigate difficult circumstances
          ethically and strategically.
        </p>

      </div>

      <div className="pi-content-wrapper">

      {/* MAIN LAYOUT */}

      <div className="pi-layout">

        {/* LEFT SIDE */}

        <div className="pi-left">

          {/* WHAT I DO */}

          <section className="pi-section">

            <h3>
              What I Do
            </h3>

            <div className="pi-section-line"></div>

            <p>
              I work at the intersection of
              investigative research, analytical
              thinking, and real-world problem
              solving. My experience includes
              surveillance and counter-surveillance
              work, situational assessment,
              behavioral analysis, and helping
              individuals navigate high-pressure
              personal or professional situations
              through legal and ethical approaches.
            </p>

            <p>
              Alongside investigative work, I've
              also worked in guidance-oriented
              roles focused on helping people think
              clearly, evaluate their options, and
              make practical decisions independently
              rather than relying on external
              intervention.
            </p>

            <p>
              My approach is centered around:
            </p>

            <ul className="pi-bullet-list">

              <li>observation</li>

              <li>structured analysis</li>

              <li>discretion</li>

              <li>strategic thinking</li>

              <li>ethical problem solving</li>

            </ul>

          </section>

          {/* CONTACT + AREAS */}

          <div className="pi-bottom-grid">

            {/* CONTACT FORM */}

            <div className="pi-contact-section">

              <h3>
                Describe Your Situation
              </h3>

              <div className="pi-section-line"></div>

              <p className="pi-contact-description">
                If you believe I may be able to help,
                provide a concise overview of your
                situation below. If the matter aligns
                with my experience or capabilities,
                I'll reach back with further
                communication.
              </p>

              <form className="pi-form">

                <div className="pi-form-top">

                  <input
                    type="text"
                    placeholder="Name"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                  />

                </div>

                <input
                  type="text"
                  placeholder="Subject"
                />

                <textarea
                  rows="6"
                  placeholder="Describe Your Situation

Briefly explain the situation, what kind of help or guidance you are seeking, and any relevant context you believe is important."
                ></textarea>

                <button type="submit">
                  ✈ Submit Inquiry
                </button>

              </form>

            </div>

            {/* AREAS OF FOCUS */}

            <div className="pi-focus-section">

              <h3>
                Areas of Focus
              </h3>

              <div className="pi-section-line"></div>

              <div className="focus-card">

                <div className="focus-icon">
                  ⌕
                </div>

                <div>

                  <h4>
                    Situational Analysis
                  </h4>

                  <p>
                    Understanding complex
                    interpersonal or environmental
                    situations through structured
                    observation and pattern
                    recognition.
                  </p>

                </div>

              </div>

              <div className="focus-card">

                <div className="focus-icon">
                  ▣
                </div>

                <div>

                  <h4>
                    Research & Investigation
                  </h4>

                  <p>
                    Open-source research,
                    behavioral analysis,
                    information gathering, and
                    investigative workflows
                    conducted within ethical and
                    legal boundaries.
                  </p>

                </div>

              </div>

              <div className="focus-card">

                <div className="focus-icon">
                  ◉
                </div>

                <div>

                  <h4>
                    Counter-Surveillance Awareness
                  </h4>

                  <p>
                    Helping individuals recognize
                    manipulative patterns, social
                    pressure tactics, or unhealthy
                    external influence in personal
                    or professional environments.
                  </p>

                </div>

              </div>

              <div className="focus-card">

                <div className="focus-icon">
                  ⌘
                </div>

                <div>

                  <h4>
                    Guidance & Strategic Support
                  </h4>

                  <p>
                    Helping people organize their
                    thinking, evaluate decisions
                    clearly, and approach difficult
                    situations with practical
                    direction and emotional
                    stability.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* NOTE */}

          <div className="pi-warning-box">

            <div className="warning-icon">
              🛡
            </div>

            <div>

              <h4>
                Important Note
              </h4>

              <p>
                I do not engage in illegal activity,
                harassment, intimidation,
                unauthorized access, or unethical
                surveillance. Any assistance,
                consultation, or investigative work
                is conducted within ethical and
                legal boundaries.
              </p>

            </div>

          </div>

        </div>
        </div>

      </div>
    </>
  );
}

export default PI;