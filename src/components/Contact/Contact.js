import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="err-container">
      <h1>Let's Connect and Revolutionize E-commerce</h1>
      <h2>
        Reach out to Project Admin at{" "}
        <Link
          to="https://www.linkedin.com/in/manit-paliwal-571847230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
        >
          LinkedIn
        </Link>{" "}
        and{" "}
        <Link to="mailto:manit.paliwal.ug21@nsut.ac.in" target="_blank">
          manit.paliwal.ug21@nsut.ac.in
        </Link>
      </h2>
    </div>
  );
};

export default Contact;
