import React from "react";
import "./Contact.css";
import profilePic from "../assets/profile.jpg";
import resumePdf from "../assets/Vayu_Nandhan_Resume.pdf";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        {/* LEFT COLUMN */}
        <div className="contact-left">
          <img src={profilePic} alt="Vayu Nandhan" className="profile-pic" />
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-text">
            I’d love to hear from you—whether it’s a project idea, job opportunity, or just a hello.
          </p>
          <a
            href={resumePdf}
            download="Vayu_Nandhan_Resume.pdf"
            className="btn download-btn"
          >
            Download Resume
          </a>
        </div>

        {/* RIGHT COLUMN */}
        <div className="contact-right">
          <form
            action="https://formspree.io/f/xpwrjegp"
            method="POST"
            className="contact-form"
          >
            {/* honeypot field */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message…"
                required
              />
            </label>

            <button type="submit" className="btn send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
