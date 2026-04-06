import { PropsWithChildren, useState, useEffect } from "react";
import "./styles/Landing.css";

const ROLES = [
  "Systems Architect",
  "Full-Stack Engineer",
  "UI/UX Engineer",
  "Reputation Manager",
  "Voiceover Artist",
  "Brand Strategist"
];

const Landing = ({ children }: PropsWithChildren) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000); // changes every 2 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          {children}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MUBASHIR
              <br />
              <span>NOOR</span>
            </h1>
          </div>
          <div className="landing-info" style={{ minHeight: "100px" }}>
            <h3>I am a</h3>
            <h2 className="landing-info-h2" style={{ marginTop: "10px", paddingBottom: "10px" }}>
              <div key={roleIndex} style={{ color: "var(--accentColor)", animation: "fadeInOut 2s forwards" }}>
                {ROLES[roleIndex]}
              </div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
