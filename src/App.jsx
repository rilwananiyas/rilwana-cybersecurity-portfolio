
import React, { useState } from "react";
import "./App.css";

import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Shield,
  Terminal,
  Network,
  Code2,
  Cloud,
  FileDown,
  ExternalLink,
  CheckCircle2,
  Bug,
  Activity,
  BookOpen,
  MapPin
} from "lucide-react";

/* =========================================
   PROFILE INFORMATION
========================================= */

const profile = {
  name: "Rilwana Niyas",
  role: "Cybersecurity & Networking Enthusiast",
  location: "Colombo, Sri Lanka",
  email: "mnfrilwana@gmail.com",

  // Profile image: public/images/rilwana.png
  photo: `${import.meta.env.BASE_URL}images/rilwana.png`,

  // CV file: public/CV(2).pdf
  cv: `${import.meta.env.BASE_URL}riluCV.pdf`,

  linkedin: "https://www.linkedin.com/in/rilwana-niyas-02025735b",
  github: "https://github.com/rilwananiyas",
  tryhackme: "https://tryhackme.com/p/mnfrilwana"
};

/* =========================================
   TECHNICAL SKILLS
========================================= */

const skills = [
  {
    icon: Shield,
    title: "Cybersecurity",
    items: [
      "Vulnerability Assessment & Penetration Testing",
      "Web Application Security",
      "OWASP Top 10 Fundamentals",
      "Reconnaissance & Enumeration",
      "Security Fundamentals"
    ]
  },
  {
    icon: Terminal,
    title: "Security Tools & Systems",
    items: [
      "Kali Linux",
      "Nmap",
      "Burp Suite",
      "Gobuster",
      "Linux CLI",
      "Windows CMD & PowerShell",
      "Bash Basics"
    ]
  },
  {
    icon: Network,
    title: "Networking",
    items: [
      "TCP/IP",
      "VLAN, VTP & STP",
      "Network Troubleshooting",
      "Wireshark",
      "Cisco Packet Tracer"
    ]
  },
  {
    icon: Code2,
    title: "Programming & Development",
    items: [
      "Python, Java, C, C#",
      "JavaScript, HTML5 & CSS3",
      "React.js, Node.js & Express.js",
      "REST APIs",
      "MongoDB & MySQL"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Development Tools",
    items: [
      "AWS Fundamentals",
      "VirtualBox",
      "Git & GitHub",
      "VS Code",
      "Postman",
      "MongoDB Compass"
    ]
  }
];

/* =========================================
   PROJECTS
========================================= */

const projects = [
  {
    number: "01",
    type: "SECURITY MONITORING · WEB APPLICATION",
    title: "SecurePulse — Security Monitoring System",
    description:
      "Developed a security-focused web application with secure authentication, role-based access control and security monitoring functionality. The project demonstrates full-stack development with an emphasis on application security.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bcrypt.js"
    ],
    icon: Activity,
    featured: true,
    note: "Security-focused web application project."
  },
  {
    number: "02",
    type: "VULNERABILITY ASSESSMENT · HANDS-ON LAB",
    title: "Metasploitable 2 — VAPT Lab",
    description:
      "Conducted a practical vulnerability assessment in an isolated virtual environment using Kali Linux and Metasploitable 2. Identified the vsFTPd 2.3.4 backdoor vulnerability and examined its security impact.",
    tags: [
      "Kali Linux",
      "Nmap",
      "Metasploitable 2",
      "VirtualBox",
      "CVE-2011-2523"
    ],
    icon: Bug,
    featured: true,
    note: "Identified vsFTPd 2.3.4 backdoor on TCP port 21."
  },
  {
    number: "03",
    type: "FULL-STACK DEVELOPMENT · E-COMMERCE",
    title: "AI Interior Shop",
    description:
      "Developed an AI-powered furniture e-commerce platform with customer, owner and administrator functionality. Includes product management, authentication, order processing and AI-based interior-related features.",
    tags: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    icon: Code2,
    note: "MERN stack e-commerce application."
  },
  {
    number: "04",
    type: "FULL-STACK DEVELOPMENT · MARKETPLACE",
    title: "Food Saver — Food Marketplace",
    description:
      "Developed a marketplace application designed to connect food providers and customers, with food listings, shopping cart functionality and order management.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    icon: Code2
  },
  {
    number: "05",
    type: "IOT · EMBEDDED SYSTEMS",
    title: "Smart Pet Feeding System",
    description:
      "Designed an automated pet feeding system concept using sensors and scheduled food dispensing to support convenient and controlled pet feeding.",
    tags: [
      "Microcontrollers",
      "Sensors",
      "Embedded C/C++",
      "IoT"
    ],
    icon: Terminal
  }
];

/* =========================================
   TRAINING & EXPERIENCE
========================================= */

const training = [
  [
    "IqraSec Academy",
    "Cybersecurity Intern",
    "Virtual Internship"
  ],
  [
    "Codomax Digital Solutions",
    "AWS Cloud & DevOps Intern",
    "Virtual Internship"
  ],
  [
    "Deloitte Australia",
    "Cybersecurity Job Simulation",
    "Forage"
  ],
  [
    "DevTown",
    "Vulnerability Scanning & Exploitation Bootcamp",
    "5-Day Bootcamp"
  ],
  [
    "SLIIT",
    "AI & Machine Learning Course",
    "Learning Course"
  ]
];

/* =========================================
   CERTIFICATIONS
========================================= */

const certifications = [
  [
    "Deloitte Australia",
    "Cybersecurity Job Simulation"
  ],
  [
    "DevTown",
    "Vulnerability Scanning & Exploitation Bootcamp"
  ],
  [
    "TryHackMe",
    "Cybersecurity Training & Practical Learning"
  ],
  [
    "SLIIT",
    "AI & Machine Learning Learning Course"
  ]
];

/* =========================================
   REUSABLE SECTION HEADING
========================================= */

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </div>
  );
}

/* =========================================
   MAIN APP
========================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact"
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">

      <div className="top-line" />

      {/* =====================================
          HEADER / NAVIGATION
      ===================================== */}

      <header className="header">

        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <Shield size={18} />
          </span>

          RN<span className="brand-dot">.</span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>

          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          {/* HEADER CV DOWNLOAD */}

          <a
            className="nav-cta"
            href={profile.cv}
            download="Rilwana_Niyas_CV.pdf"
          >
            <FileDown size={15} />
            Download CV
          </a>

        </nav>

      </header>

      <main>

        {/* =====================================
            HERO SECTION
        ===================================== */}

        <section className="hero" id="home">

          <div className="hero-grid" />

          <div className="hero-content">

            <div className="availability">
              <span className="pulse" />
              OPEN TO CYBERSECURITY / IT INTERNSHIP OPPORTUNITIES
            </div>

            <p className="mono intro">
              HELLO, I'M
            </p>

            <h1>
              Rilwana
              <br />
              <span>Niyas.</span>
            </h1>

            <h2 className="hero-role">
              {profile.role}
            </h2>

            <p className="hero-copy">
              I’m an ICT undergraduate focused on cybersecurity,
              networking and building secure digital solutions.
              I enjoy hands-on security labs, understanding how
              systems work, and continuously developing practical skills.
            </p>

            <div className="hero-actions">

              <a
                className="button button-primary"
                href="#projects"
              >
                Explore my work
                <ArrowUpRight size={17} />
              </a>

              {/* HERO CV DOWNLOAD */}

              <a
                className="button button-ghost"
                href={profile.cv}
                download="Rilwana_Niyas_CV.pdf"
              >
                Download CV
                <FileDown size={16} />
              </a>

            </div>

            <div className="hero-meta">

              <span>
                <MapPin size={14} />
                {profile.location}
              </span>

              <span className="meta-sep">/</span>

              <span className="mono">
                BICT (Hons) · NETWORKING
              </span>

            </div>

          </div>

          {/* PROFILE PHOTO */}

          <div className="hero-aside">

            <div
              className="hero-photo-glow"
              aria-hidden="true"
            />

            <div className="hero-photo-frame">

              <img
                src={profile.photo}
                alt="Rilwana Niyas"
                className="hero-profile-photo"
                onError={(event) => {
                  event.currentTarget.style.display = "none";

                  const fallback =
                    event.currentTarget.nextElementSibling;

                  if (fallback) {
                    fallback.style.display = "grid";
                  }
                }}
              />

              <div
                className="hero-photo-fallback"
                role="img"
                aria-label="Profile photo not found"
              >
                <Shield size={44} />

                <span>PROFILE PHOTO</span>

                <small>public/images/rilwana.png</small>
              </div>

              <div
                className="hero-photo-shade"
                aria-hidden="true"
              />

            </div>

            <div className="floating-tag tag-top">
              <span className="tag-dot" />
              SECURITY MINDED
            </div>

            <div className="floating-tag tag-bottom mono">
              LEARN. ANALYZE. SECURE.
            </div>

            <div className="hero-index mono">
              PORTFOLIO / 2026
            </div>

          </div>

          <a href="#about" className="scroll-cue">
            <ArrowDown size={15} />
            SCROLL TO EXPLORE
          </a>

        </section>

        {/* =====================================
            ABOUT SECTION
        ===================================== */}

        <section
          className="section about-section"
          id="about"
        >

          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="Curious by nature. Security by focus."
            text="A little about my background, interests and direction."
          />

          <div className="about-grid">

            <div className="about-copy">

              <p className="lead">
                I am an undergraduate pursuing a Bachelor of Information
                and Communication Technology (Honours) at the University
                of Sri Jayewardenepura, specializing in Networking.
              </p>

              <p>
                My interests include security operations, vulnerability
                assessment, network security and secure application
                development. Through academic work, practical labs and
                training, I am building a foundation to grow in cybersecurity.
              </p>

              <p>
                I am currently looking for an opportunity where I can
                learn from experienced professionals, contribute to a
                security team and strengthen my hands-on skills.
              </p>

              <div className="about-links">

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  GitHub
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={profile.tryhackme}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Terminal size={16} />
                  TryHackMe
                  <ArrowUpRight size={13} />
                </a>

              </div>

            </div>

            <div className="focus-card">

              <span className="mono card-label">
                CURRENT FOCUS
              </span>

              <div className="focus-item">
                <Shield />

                <div>
                  <b>Cybersecurity</b>
                  <span>
                    Security fundamentals · VAPT · Web security
                  </span>
                </div>
              </div>

              <div className="focus-item">
                <Activity />

                <div>
                  <b>Security Operations</b>
                  <span>
                    Learning SIEM · Alert triage · Incident response
                  </span>
                </div>
              </div>

              <div className="focus-item">
                <Network />

                <div>
                  <b>Networking</b>
                  <span>
                    TCP/IP · Network protocols · Troubleshooting
                  </span>
                </div>
              </div>

              <div className="focus-foot mono">
                ALWAYS LEARNING / ALWAYS IMPROVING
              </div>

            </div>

          </div>

        </section>

        {/* =====================================
            SKILLS SECTION
        ===================================== */}

        <section
          className="section skills-section"
          id="skills"
        >

          <SectionHeading
            eyebrow="02 / TECHNICAL CAPABILITIES"
            title="Skills & technologies"
            text="Tools and concepts I have studied or worked with. Skill depth varies by area."
          />

          <div className="skills-grid">

            {skills.map(({ icon: Icon, title, items }, i) => (

              <article
                className="skill-card"
                key={title}
              >

                <div className="skill-card-top">

                  <span className="skill-icon">
                    <Icon size={20} />
                  </span>

                  <span className="mono skill-no">
                    0{i + 1}
                  </span>

                </div>

                <h3>{title}</h3>

                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

              </article>

            ))}

          </div>

          <div className="learning-strip">

            <BookOpen size={18} />

            <div>
              <b>Currently developing</b>

              <span>
                SIEM fundamentals, log analysis, phishing investigation,
                incident triage and MITRE ATT&CK concepts.
              </span>
            </div>

          </div>

        </section>

        {/* =====================================
            PROJECTS SECTION
        ===================================== */}

        <section
          className="section projects-section"
          id="projects"
        >

          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title="Projects & practical labs"
            text="A selection of academic, development and hands-on cybersecurity work."
          />

          <div className="projects-grid">

            {projects.map((project) => {

              const Icon = project.icon;

              return (
                <article
                  className={`project-card ${
                    project.featured ? "project-featured" : ""
                  }`}
                  key={project.number}
                >

                  <div className="project-top">

                    <span className="mono project-number">
                      {project.number} / 05
                    </span>

                    <p className="mono project-type">
                      {project.type}
                    </p>

                  </div>

                  <div className="project-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tags">

                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}

                  </div>

                  {project.note && (
                    <p className="project-note">
                      {project.note}
                    </p>
                  )}

                </article>
              );

            })}

          </div>

          <p className="disclaimer mono">
            PROJECT DETAILS ARE PRESENTED FOR PORTFOLIO PURPOSES.
            TECHNICAL SCOPE SHOULD MATCH THE WORK COMPLETED.
          </p>

        </section>

        {/* =====================================
            EXPERIENCE SECTION
        ===================================== */}

        <section
          className="section experience-section"
          id="experience"
        >

          <SectionHeading
            eyebrow="04 / PROFESSIONAL DEVELOPMENT"
            title="Experience & training"
            text="Internships, simulations and structured learning experiences."
          />

          <div className="timeline">

            {training.map(([company, role, detail], i) => (

              <div
                className="timeline-item"
                key={company}
              >

                <div className="timeline-marker">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="timeline-content">

                  <span className="mono timeline-detail">
                    {detail}
                  </span>

                  <h3>{role}</h3>

                  <p>{company}</p>

                </div>

                <span className="timeline-arrow">
                  <ArrowUpRight size={18} />
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================
            EDUCATION SECTION
        ===================================== */}

        <section
          className="section education-section"
          id="education"
        >

          <SectionHeading
            eyebrow="05 / EDUCATION & CREDENTIALS"
            title="Learning foundation"
            text="Academic background, courses and achievements."
          />

          <div className="education-grid">

            <div className="education-card">

              <span className="mono card-label">
                2024 — PRESENT
              </span>

              <h3>
                Bachelor of Information & Communication Technology (Honours)
              </h3>

              <p>
                University of Sri Jayewardenepura · Faculty of Technology
              </p>

              <span className="specialization">
                Specialization: Networking
              </span>

            </div>

            <div className="education-card">

              <span className="mono card-label">
                2020 — 2022
              </span>

              <h3>G.C.E. Advanced Level</h3>

              <p>Technology Stream</p>

              <div className="results">

                <div>
                  <b>3A's</b>
                  <span>Results</span>
                </div>

                <div>
                  <b>29</b>
                  <span>Island Rank</span>
                </div>

                <div>
                  <b>2.46</b>
                  <span>Z-score</span>
                </div>

              </div>

            </div>

          </div>

          {/* CERTIFICATIONS */}

          <div className="credentials">

            <h3>Certifications & learning</h3>

            <div className="credential-grid">

              {certifications.map(([org, name]) => (

                <div
                  className="credential"
                  key={`${org}-${name}`}
                >

                  <CheckCircle2 size={17} />

                  <div>
                    <b>{name}</b>
                    <span>{org}</span>
                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* ACHIEVEMENTS */}

          <div className="achievements">

            <h3>Activities & achievements</h3>

            <div className="achievement-list">

              <span>
                Finance Crew Member
                <b>Cryptix 2.0 · USJ ICTS Society</b>
              </span>

              <span>
                Hackathon Participant
                <b>Hutch IgniteX</b>
              </span>

              <span>
                CTF Participant
                <b>SLIIT</b>
              </span>

              <span>
                Best Live Reporter – Tamil
                <b>Allusion'25 · Interuniversity</b>
              </span>

            </div>

          </div>

        </section>

        {/* =====================================
            CONTACT SECTION
        ===================================== */}

        <section
          className="contact-section"
          id="contact"
        >

          <div className="contact-glow" />

          <div className="contact-inner">

            <span className="eyebrow">
              06 / LET'S CONNECT
            </span>

            <h2>
              Let's make systems
              <br />
              <span>more secure.</span>
            </h2>

            <p>
              I'm interested in cybersecurity and IT internship
              opportunities, learning from security teams and contributing
              with curiosity and commitment.
            </p>

            <a
              className="button button-primary contact-button"
              href={`mailto:${profile.email}?subject=Internship%20Opportunity`}
            >
              <Mail size={17} />
              Get in touch
              <ArrowUpRight size={17} />
            </a>

            <div className="contact-details">

              <a href={`mailto:${profile.email}`}>
                {profile.email}
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ExternalLink size={13} />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ExternalLink size={13} />
              </a>

              <a
                href={profile.tryhackme}
                target="_blank"
                rel="noreferrer"
              >
                TryHackMe
                <ExternalLink size={13} />
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="footer">

        <a className="brand" href="#home">

          <span className="brand-mark">
            <Shield size={16} />
          </span>

          RN<span className="brand-dot">.</span>

        </a>

        <span className="mono">
          DESIGNED & BUILT BY RILWANA NIYAS · 2026
        </span>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>

      </footer>

    </div>
  );
}

export default App;
