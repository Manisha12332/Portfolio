import React, { useState } from "react";
import projectImg from "../assets/images/Project1.png";
import projectImg2 from "../assets/images/Project2.png";
import projectImg3 from "../assets/images/Project3.png";
import projectImg4 from "../assets/images/Project4.png";
import projectImg5 from "../assets/images/Project5.png";
import "./CSS/HeroSection.css";


// Project data
const projectData = {
  1: {
    image: projectImg,
    title: "OurMicroLife – E-Commerce Platform",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
    details:
      "OurMicroLife is a full-featured e-commerce web application designed to provide a smooth and user-friendly online shopping experience. The platform allows users to browse products across multiple categories, search and filter items efficiently, manage their cart, and access essential features such as wishlist, login, and order tracking.        I worked primarily on the frontend development, focusing on building responsive, clean, and intuitive user interfaces using HTML5, CSS3, JavaScript, and React.js. The UI was designed to ensure easy navigation, fast performance, and a seamless experience across devices. I implemented reusable React components, dynamic product listings, and interactive elements to enhance usability.  The frontend was integrated with backend services built using Node.js and MongoDB, enabling real-time product data, user authentication, and cart functionality. This project demonstrates my ability to convert business requirements into a scalable, modern, and visually appealing e-commerce interface.   ",
       link: "https://ourmicrolife.com",
  },
  2: {
    image: projectImg2,
    title: "Labotemp – Laboratory Equipment Website",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP"],
    details:
      "Labotemp is a laboratory-focused e-commerce website designed to provide a structured and reliable platform for browsing and sourcing laboratory and medical equipment. The website exclusively features laboratory-related products, including diagnostic instruments, testing devices, and essential lab accessories used by healthcare professionals, clinics, and laboratories. I worked on the frontend development of the website, where I was responsible for creating responsive, user-friendly, and visually clean interfaces using HTML5, CSS3, Bootstrap, and JavaScript. The layout was designed to ensure easy navigation, clear product categorization, and a professional healthcare-oriented look and feel.  Bootstrap was used to build a fully responsive design compatible across desktop, tablet, and mobile devices. JavaScript was implemented to enhance interactivity, improve user experience, and support dynamic UI behavior such as navigation and product presentation. This project demonstrates my ability to build scalable, responsive frontend interfaces for domain-specific platforms, particularly in the laboratory and healthcare sector, while maintaining usability, performance, and design consistency.",
      link: "https://labotemp.com/",
  },
  3: {
    image: projectImg3,
    title: "MedicalDeals – Laboratory Equipment Website",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP"],
    details:
      "MedicalDeals is a laboratory-focused e-commerce website designed to provide a structured and reliable platform for browsing and sourcing laboratory and medical equipment. The website exclusively features laboratory-related products, including diagnostic instruments, testing devices, and essential lab accessories used by healthcare professionals, clinics, and laboratories. I worked on the frontend development of the website, where I was responsible for creating responsive, user-friendly, and visually clean interfaces using HTML5, CSS3, Bootstrap, and JavaScript. The layout was designed to ensure easy navigation, clear product categorization, and a professional healthcare-oriented look and feel.  Bootstrap was used to build a fully responsive design compatible across desktop, tablet, and mobile devices. JavaScript was implemented to enhance interactivity, improve user experience, and support dynamic UI behavior such as navigation and product presentation. This project demonstrates my ability to build scalable, responsive frontend interfaces for domain-specific platforms, particularly in the laboratory and healthcare sector, while maintaining usability, performance, and design consistency.",
       link: "https://www.medicaldeals.com/",
  },
  4: {
    image: projectImg4,
    title: "BidVenchure – Event & Restaurant Bidding Platform",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js",],
    details:
      "BidVenchure is a web-based bidding platform designed to connect event organizers and restaurants through a competitive, price-based bidding system. The platform allows restaurants and service providers to post their event-related services, while users can compare options and place bids to organize events based on their budget and requirements. The system enables transparent pricing, easy service discovery, and efficient communication between event planners and vendors. Users can browse available services, view pricing details, and participate in bidding to secure the best deals for their events.  I contributed to the development of this platform using HTML, CSS, JavaScript, React.js, and Node.js, focusing on building responsive, interactive user interfaces and ensuring smooth frontend–backend integration. The application is designed to deliver a seamless user experience with dynamic data handling and real-time updates. This project showcases my ability to develop modern, scalable web applications that support real-world business workflows, particularly in the event management and service marketplace domain.",
       link: "https://bidvenchure.com/",
  },
   5: {
    image: projectImg5,
    title: "Medzer – Laboratory Equipment Website",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP"],
    details:
      "Medzer is a laboratory-focused e-commerce website designed to provide a structured and reliable platform for browsing and sourcing laboratory and medical equipment. The website exclusively features laboratory-related products, including diagnostic instruments, testing devices, and essential lab accessories used by healthcare professionals, clinics, and laboratories. I worked on the frontend development of the website, where I was responsible for creating responsive, user-friendly, and visually clean interfaces using HTML5, CSS3, Bootstrap, and JavaScript. The layout was designed to ensure easy navigation, clear product categorization, and a professional healthcare-oriented look and feel.  Bootstrap was used to build a fully responsive design compatible across desktop, tablet, and mobile devices. JavaScript was implemented to enhance interactivity, improve user experience, and support dynamic UI behavior such as navigation and product presentation. This project demonstrates my ability to build scalable, responsive frontend interfaces for domain-specific platforms, particularly in the laboratory and healthcare sector, while maintaining usability, performance, and design consistency.",
       link: "https://www.medzer.com/",
  },
};

const ProjectCard = ({ id }) => {
  const [showDetails, setShowDetails] = useState(false);

  const project = projectData[id]; // ✅ Safe lookup

  if (!project) {
    return null; // just render nothing
  }

  const { image, title, tags, details } = project;

  return (
    <div className="project-card">
      {/* Toggle Button */}
      <button
        className="circle-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide" : "View"} <br /> Details
      </button>

      {!showDetails ? (
        <img src={image} alt={title} className="project-image" />
      ) : (
        <p className="project-details">{details}</p>
      )}

      <div className="project-tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="project-title">{title}</h3>

      {/* Bottom Right Arrow */}
      {/* Bottom Right Arrow */}
<a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="arrow-icon"
>
  ➔
</a>

    </div>
  );
};

export default ProjectCard;
