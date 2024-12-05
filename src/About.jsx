import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">About Daily Verse</h1>
      <p className="about-description">
        Welcome to <strong>Daily Verse</strong>, your companion for daily inspiration and spiritual growth. 
        Our app delivers a carefully selected Bible verse every day to uplift and guide you.
      </p>
      <section className="about-features">
        <h2 className="features-title">Features</h2>
        <ul className="features-list">
          <li>📖 Daily Bible Verses</li>
          <li>📷 QR Code Scanning for Verses</li>
          <li>📱 Mobile-friendly Design</li>
        </ul>
      </section>
      <blockquote className="about-quote">
        "For the word of God is alive and active. Sharper than any double-edged sword." - Hebrews 4:12
      </blockquote>
    </div>
  );
};

export default About;

