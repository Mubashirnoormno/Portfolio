import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Voiceover Artist</h4>
                <h5>Towards Eternity</h5>
              </div>
              <h3>22-23</h3>
            </div>
            <p>
              Delivered professional Urdu voiceovers for educational and motivational videos for a globally recognized 3M+ subscriber YouTube channel.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Aptech Peshawar</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developing the institute's educational websites and delivering full-stack instruction to 20+ students covering PHP, JS, and React.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Independent</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed full-stack e-commerce platforms using PHP, React, Node, and MongoDB. Delivered 10+ WordPress websites with SEO optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital System Engineer</h4>
                <h5>Pakistan Cricket Board (PCB)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed & deployed a complete Stadium Entry System. Built a fan portal for identity verification, an offline-capable Gate Scanner App, and a real-time Admin Attendance Dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
