import React from "react"
import aboutBG from "../assets/about-bg-final.png"
import "./About.css"

const experiences = [
  { period: "2024–Present", title: "Full Stack Developer", company: "Black & Veatch, USA" },
  { period: "2021–2022",  title: "Full Stack Developer", company: "Capgemini, India" },
  { period: "2020–2021",  title: "Back-End Developer",  company: "Reliance Jio Platforms, India" },
]

const projects = [
  { name: "AI Teach Platform",     link: "https://github.com/vvnandhan" },
  { name: "3D Portfolio",          link: "https://github.com/vvnandhan" },
  { name: "NGO Management System", link: "https://github.com/muhammad123saleem/NGO_Management"   },
]

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      style={{ backgroundImage: `url(${aboutBG})` }}
    >
      <div className="about-inner">
        {/* LEFT HALF */}
        <div className="left-half">
          <h2 className="section-title">Experience</h2>
          <div className="experience-wrapper">
            <div className="timeline-col">
              {experiences.map((exp, i) => (
                <div key={i} className="timeline-event">
                  <div className="timeline-dot" />
                  <div className="timeline-time">{exp.period}</div>
                </div>
              ))}
            </div>
            <div className="details-col">
              {experiences.map((exp, i) => (
                <div key={i} className="details-card">
                  <div className="card-title">{exp.title}</div>
                  <div className="card-company">{exp.company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER DIVIDER */}
        <div className="center-divider" />

        {/* RIGHT HALF */}
        <div className="right-half">
          <h2 className="section-title">Projects</h2>
          <div className="projects-wrapper">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                {p.name}
              </a>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="github-link">
            <a
              href="https://github.com/vvnandhan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="github-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.303-5.467-1.335-5.467-5.931 0-1.311.469-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.241 2.873.119 3.176.77.84 1.233 1.91 1.233 3.221 0 4.609-2.807 5.625-5.479 5.921.43.371.813 1.104.813 2.222v3.293c0 .322.218.694.825.576C20.565 22.095 24 17.597 24 12.297 24 5.67 18.627.297 12 .297z"
                />
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
