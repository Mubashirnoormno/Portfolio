import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a results-driven full-stack developer and creative professional with over <strong>4 years of experience</strong> building scalable web applications, digital systems, and high-end multimedia content. 
          I independently designed a complete <strong>Digital Stadium Entry System</strong> presented to the <strong>Pakistan Cricket Board (PCB)</strong>, and produced highly evocative voiceovers for a <strong>3M+ subscriber YouTube channel.</strong> 
          I bring ideas to life through robust engineering and compelling storytelling, taking pride in taking complex projects from concept to deployment with highly measurable outcomes.
        </p>
        <div className="about-skills">
          <span className="skill-tag">Digital Systems Architecture</span>
          <span className="skill-tag">High-Performance Web Apps</span>
          <span className="skill-tag">E-Commerce Infrastructure</span>
          <span className="skill-tag">Interactive UI/UX</span>
          <span className="skill-tag">Multimedia Content Strategy</span>
          <span className="skill-tag">Professional Voiceovers</span>
        </div>
        
        {/* Dynamic Professional Call-to-Action */}
        <div className="about-cta" style={{ marginTop: "40px" }}>
          <a 
            href="/Mubashir's Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-button"
            data-cursor="pointer"
          >
            Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
