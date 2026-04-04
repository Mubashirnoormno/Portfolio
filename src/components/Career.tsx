import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          Professional <span>Journey</span>
          <br /> & Experience
        </h2>
        
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Systems Architect</h4>
                <h5>Independent Consultancy / PCB</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Single-handedly engineered, designed, and launched a complete real-time Digital Stadium Entry & Ticket Verification System. Successfully presented the production-ready architecture directly to the Pakistan Cricket Board (PCB).
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Web Developer</h4>
                <h5>Xpert IT Solutions</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Ranked 1st among 65 competing web platforms at Xpert IT Solutions for outstanding technical code quality and UI/UX design. Architected, developed, and deployed 5+ scalable, full-stack e-commerce platforms handling live transactions.
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Voiceover Artist</h4>
                <h5>Towards Eternity</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Provided primary studio-grade voiceover talent for a rapidly scaling YouTube channel that successfully reached 3+ Million global subscribers. Produced and delivered highly evocative cinematic Urdu voiceovers.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Multimedia Producer</h4>
                <h5>Premium Freelance Services (Upwork)</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Started my freelance journey by providing top-tier video editing and multimedia direction to international clients on Upwork. Successfully directed high-end promotional videos and professional marketing campaigns.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Career;
