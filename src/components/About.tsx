import "./styles/About.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a results-driven Systems Architect and Full-Stack Developer with over <strong>4&nbsp;years of expertise</strong> engineering high-performance digital infrastructures. My career is defined by transforming complex technical concepts into production-ready solutions, most notably my design for the <strong>Pakistan Cricket Board’s (PCB)&nbsp;stadium entry system.</strong>
          <br /><br />
          By combining robust software engineering with a strategic creative background—including high-scale <strong>multimedia production for 3M+ subscribers</strong>—I deliver digital experiences that are as technically sound as they are visually compelling. I take pride in leading complex projects from conceptual architecture to high-fidelity deployment with measurable, high-impact outcomes.
        </p>
        <div className="about-skills">
          <span className="skill-tag">Systems Architecture</span>
          <span className="skill-tag">Full-Stack Development</span>
          <span className="skill-tag">E-Commerce Infrastructure</span>
          <span className="skill-tag">Interactive UI/UX</span>
          <span className="skill-tag">Multimedia Strategy</span>
          <span className="skill-tag">Voiceover Production</span>
        </div>
        
        {/* Restored Original Style Button with Icon */}
        <div className="about-cta">
          <a 
            href="/Mubashir's Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-button-original"
            data-cursor="pointer"
          >
            <HoverLinks text="RESUME" />
            <TbNotes className="resume-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
