import "./styles/CreativeGallery.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdClose, MdOpenInNew } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  height: string;
  description: string;
  tools: string[];
  driveLink: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Thumbnails & Graphic Design",
    category: "Graphic Design",
    image: "/images/graphic_design.png",
    height: "tall",
    description: "A collection of eye-catching thumbnails and graphic design projects, created to grab attention and communicate effectively.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    driveLink: "https://drive.google.com/drive/folders/10SaIN9LYu-LFopHQB00PC79_gIKgFzHM?usp=drive_link",
  },
  {
    id: 2,
    title: "Video Editing",
    category: "Post-Production",
    image: "/images/video_editing.png",
    height: "short",
    description: "Professional video editing projects, including pacing, transitions, color grading, and sound design to create engaging content.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    driveLink: "https://drive.google.com/drive/folders/1-fMJzYAuycIO1u4-9yxgQik6RCcjTs46?usp=drive_link",
  },
  {
    id: 3,
    title: "Short Video Editing",
    category: "Reels & Shorts",
    image: "/images/reels_shorts.png",
    height: "wide",
    description: "High-retention short-form content tailored for TikTok, Instagram Reels, and YouTube Shorts. Focused on viral hooks and dynamic editing.",
    tools: ["Premiere Pro", "CapCut", "After Effects"],
    driveLink: "https://drive.google.com/drive/folders/1kK62_GG7r3ajXgpBOaDLpTHlRtQGjLfH?usp=drive_link",
  },
  {
    id: 4,
    title: "Voiceovers (Urdu/Hindi)",
    category: "Audio & Voiceover",
    image: "/images/voiceover.png",
    height: "short",
    description: "Professional and expressive voiceovers in Urdu and Hindi. Delivering clear, engaging, and tonally accurate voice work for various projects.",
    tools: ["Audacity", "Adobe Audition", "Microphone"],
    driveLink: "https://drive.google.com/drive/folders/1sGq3-X2DfHY1amjLPpazSzrT_3O6tZcw?usp=drive_link",
  },
  {
    id: 5,
    title: "Website (Created)",
    category: "Web Development",
    image: "/images/websites.png",
    height: "tall",
    description: "A showcase of websites and digital interfaces I have created, focusing on responsive design, modern UI/UX, and seamless performance.",
    tools: ["React", "HTML/CSS", "JavaScript", "Figma"],
    driveLink: "https://drive.google.com/drive/folders/1RBUdMcZK5AnqohXAC3eOHd7CCb98Va4Z?usp=drive_link",
  },
  {
    id: 6,
    title: "AI Projects",
    category: "Artificial Intelligence",
    image: "/images/ai_projects.png",
    height: "short",
    description: "Exploring the capabilities of AI through various innovative projects. Leveraging modern artificial intelligence tools for creative and practical solutions.",
    tools: ["AI Tools", "Prompt Engineering", "ChatGPT", "Midjourney"],
    driveLink: "https://drive.google.com/drive/folders/1S55at2PAgH5eyGQip_TKYDMgogkPu78Q?usp=drive_link",
  },
];

const CreativeGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!galleryRef.current) return;
    const items = galleryRef.current.querySelectorAll(".gallery-item");

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: (index % 3) * 0.1,
        }
      );
    });
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  const getShortName = (id: number) => {
    const map: Record<number, string> = {1: "GD", 2: "VE", 3: "SC", 4: "VO", 5: "WD", 6: "AI"};
    return map[id] || "";
  };

  return (
    <div className="creative-gallery-section" id="gallery">
      <div className="gallery-container section-container">
        <h2>
          Creative <span>Showcase</span>
        </h2>
        <p className="gallery-subtitle">
          Graphic Design, Video Editing, Voiceovers, Websites & AI Projects
        </p>

        <div className="masonry-grid" ref={galleryRef}>
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item-wrapper">
              <a
                href={item.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-item"
                data-cursor="pointer"
                style={{ textDecoration: "none", display: "block" }}
                onClick={(e) => {
                  // Ensure this click is treated as a direct link open
                  e.stopPropagation();
                }}
              >
                <div className="item-inner">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy" 
                    decoding="async"
                  />
                  
                  {/* Floating Skill Match Circle */}
                  <div className="card-skill-circle" data-full-name={item.title}>
                    {getShortName(item.id)}
                  </div>

                  <div className="item-overlay">
                    <div className="overlay-content">
                      <span className="item-category">{item.category}</span>
                      <h3 className="item-title" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        {item.title} <MdOpenInNew style={{ fontSize: "1.2rem", color: "#5eead4" }} />
                      </h3>
                      <span className="click-hint">Click card to open work</span>
                    </div>
                  </div>
                </div>
              </a>
              
              {/* Optional Info Button for Modal */}
              <button 
                className="info-btn" 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedItem(item);
                }}
                title="View Details"
              >
                i
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Modal Popup */}
        {selectedItem && (
          <div
            className="gallery-modal-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedItem(null);
            }}
            data-cursor="disable"
          >
            <div className="gallery-modal-content">
              <button
                className="modal-close"
                onClick={() => setSelectedItem(null)}
              >
                <MdClose />
              </button>
              
              <div className="modal-body">
                <div className="modal-image-col">
                  <img src={selectedItem.image} alt={selectedItem.title} />
                </div>
                
                <div className="modal-info-col">
                  <span className="modal-category">{selectedItem.category}</span>
                  <h2>{selectedItem.title}</h2>
                  <p className="modal-description">{selectedItem.description}</p>

                  <div className="modal-tools">
                    <h4>Tools & Expertise</h4>
                    <div className="tools-flex">
                      {selectedItem.tools.map((tool, i) => (
                        <span key={i} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className="drive-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(selectedItem.driveLink, "_blank", "noopener,noreferrer");
                    }}
                    style={{ 
                      zIndex: 99999, 
                      position: "relative", 
                      pointerEvents: "auto", 
                      cursor: "pointer",
                      display: "inline-flex",
                      background: "#5eead4",
                      color: "#0a0e17",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: "none",
                      fontWeight: "bold",
                      marginTop: "20px",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span>View My Full Archive in Google Drive</span>
                    <MdOpenInNew />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreativeGallery;
