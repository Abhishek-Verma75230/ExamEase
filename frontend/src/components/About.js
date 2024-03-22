import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About</h1>
        <p style={{ fontSize: "20px", padding: "auto", display: "block" }}>
          Welcome to ExamEase, your trusted partner in exam success! We're
          dedicated to helping you conquer your exams with confidence. Our
          platform offers a carefully curated collection of high-quality study
          materials, including previous year questions, comprehensive notes, and
          study guides, to streamline your preparation journey. What sets us
          apart is our commitment to providing a user-friendly experience and
          expert guidance. Simply select your year and engineering department,
          then explore organized subjects by semester. Easily access question
          papers and relevant notes to prepare effectively. Got questions or
          feedback? Reach out to our supportive team anytime. Thank you for
          choosing ExamEase as your study companion. Let's unlock your academic
          potential and succeed together!
        </p>
      </div>
    </div>
  );
};

export default About;
