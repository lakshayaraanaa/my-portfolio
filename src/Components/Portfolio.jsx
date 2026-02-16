import React, { useState, useEffect } from 'react';
import Profile from "../assets/home.png";


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: #40454c;
          color: #fff;
        }

        a {
          color: #fff;
          text-decoration: none;
        }

        .navbar {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          padding: 25px 9%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          visibility: hidden;
          opacity: 0;
          animation: show-content 1.5s linear forwards;
          animation-delay: 1.2s;
          background-color: #40454c;
          backdrop-filter: blur(5px);
        }

        @keyframes show-content {
          100% {
            visibility: visible;
            opacity: 1;
          }
        }

        .navbar .logo {
          font-size: 30px;
          font-weight: 700;
        }

        .navbar ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar ul li {
          margin-left: 35px;
        }

        .navbar ul li a {
          font-size: 20px;
          font-weight: 500;
          transition: .5s;
          color: #fff;
        }

        .navbar ul li:hover a,
        .navbar ul li.active a {
          color: #7cf03d;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 9%;
        }

        section {
          padding: 80px 0;
          min-height: auto;
        }

        .section-title {
          font-size: 45px;
          text-align: center;
          margin-bottom: 50px;
          color: #7cf03d;
        }

        .home {
          display: flex;
          align-items: center;
          gap: 50px;
          min-height: 100vh;
          padding: 60px 9% 0;
          color: #fff;
          visibility: hidden;
          opacity: 0;
          animation: show-content 1.5s linear forwards;
          animation-delay: 1.6s;
        }

        .home-info h1 {
          font-size: 55px;
        }

        .home-info h2 {
          display: inline-block;
          font-size: 32px;
          margin-top: 10px;
        }

        .home-info h2 span {
          position: relative;
          display: inline-block;
          color: transparent;
          -webkit-text-stroke: .7px #7cf03d;
          animation: display-text 16s infinite;
          animation-delay: calc(-4s * var(--i));
        }

        @keyframes display-text {
          0%, 25% {
            opacity: 1;
          }
          26%, 100% {
            opacity: 0;
          }
        }

        .home-info h2 span::before {
          content: attr(data-text);
          position: absolute;
          width: 0;
          border-right: 2px solid #7cf03d;
          color: #7cf03d;
          white-space: nowrap;
          overflow: hidden;
          animation: fill-text 4s linear infinite;
        }

        @keyframes fill-text {
          10%, 100% {
            width: 0;
          }
          70%, 90% {
            width: 100%;
          }
        }

        .home-info p {
          font-size: 16px;
          margin: 20px 0 25px;
        }

        .home-info .btn-sci {
          display: flex;
          align-items: center;
        }

        .btn {
          display: inline-block;
          padding: 10px 30px;
          background: #7cf03d;
          border: 2px solid #7cf03d;
          border-radius: 40px;
          box-shadow: 0 0 10px #7cf03d;
          font-size: 16px;
          color: #1f242d;
          font-weight: 600;
          transition: .5s;
          cursor: pointer;
        }

        .btn:hover {
          background: transparent;
          color: #7cf03d;
          box-shadow: none;
        }

        .home-info .btn-sci .sci {
          margin-left: 20px;
        }

        .home-info .btn-sci .sci a {
          display: inline-flex;
          padding: 8px;
          border: 2px solid #7cf03d;
          border-radius: 50%;
          font-size: 20px;
          color: #7cf03d;
          margin: 0 8px;
          transition: .5s;
        }

        .home-info .btn-sci .sci a:hover {
          background: #7cf03d;
          color: #1f242d;
          box-shadow: 0 0 10px #7cf03d;
        }

        .home-img .img-box {
          position: relative;
          width: 32vw;
          height: 32vw;
          border-radius: 50%;
          padding: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .home-img .img-box::before,
        .home-img .img-box::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          background: conic-gradient(transparent, transparent, transparent, #7cf03d);
          transform: rotate(0deg);
          animation: rotate-border 10s linear infinite;
        }

        @keyframes rotate-border {
          100% {
            transform: rotate(360deg);
          }
        }

        .home-img .img-box .img-item {
          position: relative;
          width: 100%;
          height: 100%;
          background: black;
          border-radius: 50%;
          border: .1px solid #1f242d;
          display: flex;
          justify-content: center;
          z-index: 1;
          overflow: hidden;
        }

        .home-img .img-box .img-item img {
          position: absolute;
          top: -30px;
          display: block;
          width: 91%;
          object-fit: cover;
          mix-blend-mode: lighten;
        }

        .bars-animation {
          position: fixed;
          width: 100%;
          height: 100%;
          display: flex;
          z-index: 999;
          pointer-events: none;
        }

        .bars-animation .bar {
          width: 100%;
          height: 100%;
          transform: translateY(-100%);
          animation: show-bars .5s ease-in-out forwards;
          animation-delay: calc(.1s * var(--i));
        }

        @keyframes show-bars {
          100% {
            transform: translateY(0%);
          }
        }

        .about {
          background: rgb(64, 69, 77);
        }

        .about-content {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .about-text h3 {
          font-size: 28px;
          color: #7cf03d;
          margin-bottom: 20px;
        }

        .about-text p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .skill-category h4 {
          color: #7cf03d;
          font-size: 18px;
          margin-bottom: 15px;
        }

        .skill-category ul {
          list-style: none;
          padding: 0;
        }

        .skill-category ul li {
          padding: 5px 0;
          font-size: 14px;
          color: #ccc;
        }

        .projects {
          background: rgb(64, 69, 77);
        }

        .project-card {
          background: #1f242d;
          padding: 40px;
          border-radius: 15px;
          border: 2px solid #333;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: #7cf03d;
        }

        .project-info h3 {
          font-size: 24px;
          color: #7cf03d;
          margin-bottom: 10px;
        }

        .project-status {
          color: #ff6b6b;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .project-description {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .project-features h4 {
          color: #7cf03d;
          margin-bottom: 15px;
        }

        .project-features ul {
          list-style: none;
          margin-bottom: 25px;
          padding: 0;
        }

        .project-features ul li {
          padding: 8px 0;
          position: relative;
          padding-left: 20px;
        }

        .project-features ul li::before {
          content: "▶";
          color: #7cf03d;
          position: absolute;
          left: 0;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-tag {
          background: #7cf03d;
          color: rgb(64, 69, 77);
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .experience {
          background: rgb(64, 69, 77);
        }

        .experience-item {
          background: #1f242d;
          padding: 30px;
          border-radius: 15px;
          border-left: 4px solid #7cf03d;
        }

        .experience-header {
          margin-bottom: 20px;
        }

        .experience-header h3 {
          font-size: 22px;
          color: #7cf03d;
          margin-bottom: 5px;
        }

        .company {
          font-size: 18px;
          color: #fff;
          font-weight: 600;
        }

        .duration {
          color: #ccc;
          font-size: 14px;
          float: right;
        }

        .experience-details {
          list-style: none;
          padding: 0;
        }

        .experience-details li {
          padding: 8px 0;
          position: relative;
          padding-left: 20px;
        }

        .experience-details li::before {
          content: "•";
          color: #7cf03d;
          position: absolute;
          left: 0;
          font-size: 20px;
        }

        .education {
          background: rgb(64, 69, 77);
        }

        .education-item {
          text-align: center;
          background: #1f242d;
          padding: 40px;
          border-radius: 15px;
        }

        .education-item h3 {
          font-size: 24px;
          color: #7cf03d;
          margin-bottom: 15px;
        }

        .institution {
          font-size: 18px;
          color: #ccc;
        }

        .contact {
          background: rgb(64, 69, 77);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .contact-item i {
          font-size: 24px;
          color: #7cf03d;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(124, 240, 61, 0.1);
          border-radius: 50%;
        }

        .contact-item h4 {
          color: #7cf03d;
          margin-bottom: 5px;
        }

        .contact-form {
          background: #1f242d;
          padding: 40px;
          border-radius: 15px;
        }

        .form-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 15px;
          background: rgb(64, 69, 77);
          border: 2px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #7cf03d;
        }

        .contact-form textarea {
          resize: vertical;
          margin-bottom: 20px;
          grid-column: 1 / -1;
        }

        .footer {
          background: rgba(31, 36, 45, 0.85);
          padding: 30px 0;
          text-align: center;
          border-top: 1px solid #333;
        }

        .footer .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-social {
          display: flex;
          gap: 15px;
        }

        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #1f242d;
          border-radius: 50%;
          color: #7cf03d;
          transition: all 0.3s ease;
        }

        .footer-social a:hover {
          background: #7cf03d;
          color: rgb(64, 69, 77);
        }

        .mobile-menu-toggle {
          display: none;
          font-size: 24px;
          color: #7cf03d;
          cursor: pointer;
        }

        @media (max-width: 1200px) {
          .container {
            padding: 0 5%;
          }
          .home {
            padding: 60px 5% 0;
          }
          .navbar {
            padding: 25px 5%;
          }
        }

        @media (max-width: 991px) {
          .home {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }
          .home-img .img-box {
            width: 40vw;
            height: 40vw;
          }
          .about-content {
            flex-direction: column;
            text-align: center;
          }
          .contact-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }
          .navbar ul {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(31, 36, 45, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 20px 0;
            transform: translateY(${mobileMenuOpen ? '0' : '-150%'});
            opacity: ${mobileMenuOpen ? '1' : '0'};
            visibility: ${mobileMenuOpen ? 'visible' : 'hidden'};
            transition: all 0.3s ease;
          }
          .navbar ul li {
            margin: 10px 0;
            text-align: center;
          }
          .home-info h1 {
            font-size: 40px;
          }
          .home-info h2 {
            font-size: 24px;
          }
          .section-title {
            font-size: 35px;
          }
          .home-img .img-box {
            width: 60vw;
            height: 60vw;
          }
          .form-group {
            grid-template-columns: 1fr;
          }
          .footer .container {
            flex-direction: column;
            gap: 20px;
          }
          .project-card {
            padding: 25px;
          }
          .experience-item {
            padding: 20px;
          }
          .duration {
            float: none;
            display: block;
            margin-top: 5px;
          }
        }

        @media (max-width: 480px) {
          .home-info h1 {
            font-size: 32px;
          }
          .home-info h2 {
            font-size: 20px;
          }
          .section-title {
            font-size: 28px;
          }
          .home-img .img-box {
            width: 70vw;
            height: 70vw;
          }
          .btn {
            padding: 8px 20px;
            font-size: 14px;
          }
          .home-info .btn-sci .sci a {
            padding: 6px;
            font-size: 18px;
            margin: 0 5px;
          }
          .contact-form {
            padding: 25px;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

      <nav className="navbar">
        <a href="#home" className="logo">Portfolio</a>
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''}><a href="#home" onClick={handleNavClick}>Home</a></li>
          <li className={activeSection === 'about' ? 'active' : ''}><a href="#about" onClick={handleNavClick}>About</a></li>
          <li className={activeSection === 'projects' ? 'active' : ''}><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li className={activeSection === 'experience' ? 'active' : ''}><a href="#experience" onClick={handleNavClick}>Experience</a></li>
          <li className={activeSection === 'education' ? 'active' : ''}><a href="#education" onClick={handleNavClick}>Education</a></li>
          <li className={activeSection === 'contact' ? 'active' : ''}><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
        </div>
      </nav>

      <div className="bars-animation">
        {[6, 5, 4, 3, 2, 1].map(i => (
          <div key={i} className="bar" style={{ '--i': i }}></div>
        ))}
      </div>

      <section className="home" id="home">
        <div className="home-info">
          <h1>Lakshayaraanaa P</h1>

          <h2>
            I'm a &nbsp;
            <span
              style={{ display: "inline", "--i": 4 }}
              data-text="React Developer"
            >
              React Developer
            </span>
            <span
              style={{ display: "inline", "--i": 2 }}
              data-text="Full Stack Developer"
            >
              Full Stack Developer
            </span>
          </h2>

          <p>I am a passionate Full-Stack Developer specializing in React.js for frontend and Node.js with MongoDB for backend development. I enjoy building responsive, user-friendly web applications with clean UI and scalable backend architecture. I focus on writing clean code, following best practices, and continuously learning modern web technologies.</p>
          <div className="btn-sci">
            <a href="src\assets\Lakshaya_Rana_CV.pdf" className="btn" download>Download CV</a>
            <div className="sci">
              <a href="https://github.com/lakshayaraanaa" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
              <a href="https://www.linkedin.com/in/lakshayaraanaa-p-3a0b78313/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
              <a href="mailto:lakshayaraanaap@gmail.com"><i className='bx bxl-gmail'></i></a>
              <a href="tel:+916381913027"><i className='bx bxs-phone-call'></i></a>
            </div>
          </div>
        </div>
        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img src={Profile} alt="Lakshayaraanaa P - React Developer" />
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>React Developer</h3>
              <p>Hi I’m a React Developer passionate about building modern, responsive, and user-friendly web applications. I specialize in creating reusable components, managing application state, and integrating APIs to deliver clean and scalable solutions. I enjoy turning ideas into real-world products using React and modern JavaScript</p>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Languages</h4>
                  <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Frameworks & Tools</h4>
                  <ul>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>React Router</li>
                    <li>VS Code</li>
                    <li>Git & GitHub</li>
                    <li>NPM</li>
                    <li>Nodemon</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Databases</h4>
                  <ul>
                    <li>MongoDB</li>
                    <li>MongoDB Atlas</li>
                    <li>Mongoose</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Specialties</h4>
                  <ul>
                    <li>Full-Stack Web Application Development (MEAN Stack)</li>
                    <li>RESTful API Design & Development</li>
                    <li>MongoDB Database Design & Optimization</li>
                    <li>Server-Side Development with Node.js & Express.js</li>
                    <li>Authentication & Authorization (JWT, Role-Based Access)</li>
                    <li>Frontend–Backend Integration</li>
                    <li>API Testing & Debugging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Project</h2>
          <div className="project-card">
            <div className="project-info">
              <h3>🛒 Buy by Best – Social Community Commerce Platform</h3>
              <p className="project-status">Ongoing Project</p>
              <p className="project-description">Buy by Best is a social community–driven commerce platform designed to help users make informed and trust-based purchasing decisions. The application enables users to share real product experiences, post reviews, rate products, and engage in discussions with other community members before buying.</p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>User-generated product reviews and ratings</li>
                  <li>Community discussions and recommendations</li>
                  <li>Interactive and responsive UI built with React</li>
                  <li>Secure and scalable data handling using MongoDB</li>
                  <li>Real-time engagement to support smarter purchase decisions</li>
                </ul>
              </div>
              <div className="project-tech">
                <span className="tech-tag">Frontend: React.js</span>
                <span className="tech-tag">Backend: Node.js, Express.js</span>
                <span className="tech-tag">Database: MongoDB</span>
                <span className="tech-tag">Tools: REST APIs, Git, Postman</span>

              </div>
            </div>
            <br/> <br/>
             <div className="project-info">
              <h3>🎓 Reconnectify – Alumni Association Platform</h3>
              {/* <p className="project-status">Ongoing Project</p> */}
              <p className="project-description">Reconnectify is a web-based alumni association platform created to strengthen long-term relationships between alumni and educational institutions. The platform allows alumni to build personal profiles, share career updates, post professional opportunities, and participate in institutional events.</p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Alumni profile creation and profile management</li>
                  <li>Career updates, posts, and opportunity sharing</li>
                  <li>Event participation and announcements</li>
                  <li>Interactive and responsive UI using React</li>
                  <li>Scalable data storage and user management with MongoDB</li>
                </ul>
              </div>
              <div className="project-tech">
                <span className="tech-tag">Frontend: React.js</span>
                <span className="tech-tag">Backend: Node.js, Express.js</span>
                <span className="tech-tag">Database: MongoDB</span>
                <span className="tech-tag">Tools: REST APIs, Git, Postman</span>

              </div>
            </div>

             <br/> <br/>
             <div className="project-info">
              <h3>📸 Instagram Clone – Social Media Platform  </h3>
              {/* <p className="project-status">Ongoing Project</p> */}
              <p className="project-description">Instagram Clone is a social media web application designed to replicate the core features of Instagram, enabling users to connect, share content, and interact in a modern social environment. The platform allows users to create profiles, upload posts, like and comment on content, and follow other users.</p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>User authentication and profile management</li>
                  <li>Image and post upload with captions</li>
                  <li>Like, comment, and follow/unfollow functionality</li>
                  <li>Dynamic feed and real-time interaction</li>
                  <li>Responsive UI built with React</li>
                  <li>Secure and scalable data storage using MongoDB</li>
                </ul>
              </div>
              <div className="project-tech">
                <span className="tech-tag">Frontend: React.js</span>
                <span className="tech-tag">Backend: Node.js, Express.js</span>
                <span className="tech-tag">Database: MongoDB</span>
                <span className="tech-tag">Tools: REST APIs, Git, Postman</span>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Full Stack(MEAN) Developer</h3>
              <span className="company">Gateway Software Solutions</span>
              <span className="duration">2025 – Present</span>
            </div>
            <ul className="experience-details"> 
              <li>Develop responsive, interactive UIs using React.js with reusable functional components and hooks  </li>
              <li>Implement client-side routing, state management, and seamless backend API integration with asynchronous data handling</li>
              <li>Contributed to end-to-end development cycles including design, testing, and deployment</li>
              <li>Ensure cross-browser compatibility, performance optimization, and clean, maintainable UI architecture</li>
              <li>Design and develop secure RESTful APIs, handling server-side logic, validation, and robust error management</li>
              <li>Implement authentication & authorization using JWT and middleware, ensuring secure API access and request handling</li>
              <li>Design and manage MongoDB schemas and collections, performing CRUD operations with Mongoose while optimizing queries, handling data relationships, and ensuring data consistency and security</li>
            </ul>
            <br/><br/>
             <div className="experience-header">
              <h3>Process Associate</h3>
              <span className="company">Infinx Healthcare</span>
              <span className="duration">2024 – 2025</span>
            </div>
             <ul className="experience-details"> 
              <li>Handle medical billing, claims processing, and payment posting accurately</li>
              <li>Verify patient demographics, insurance eligibility, and coverage details</li>
              <li>Process prior authorizations, charge entry, and claim submissions</li>
              <li>Maintain HIPAA compliance and ensure data confidentiality</li>
              <li>Update and manage EHR/EMR systems with accurate patient and claim data</li>
              <li>Prepare daily reports and meet productivity benchmarks</li>
            </ul>

          </div>
        </div>
      </section>
      
      
      <section className="education" id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <h3>Bachelor of Degree – Computer Science and Engineering</h3>
            <p className="institution">NPR Arts And Science College-Dindigul</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className='bx bxs-phone'></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 6381913027</p>
                </div>
              </div>
              <div className="contact-item">
                <i className='bx bxs-envelope'></i>
                <div>
                  <h4>Email</h4>
                  <p>lakshayaraanaap@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className='bx bxs-location-plus'></i>
                <div>
                  <h4>Location</h4>
                  <p>Madurai, Tamil Nadu</p>
                </div>
              </div>
            </div>
            {/* <div className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit" className="btn">Send Message</button>
            </div> */}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Lakshayaraana P. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://github.com/lakshayaraanaa" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
            <a href="https://www.linkedin.com/in/lakshayaraanaa-p-3a0b78313/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
            <a href="mailto:srigunaseelan2004@gmail.com"><i className='bx bxl-gmail'></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}