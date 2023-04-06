import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Social.css";

const Social = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: "999",
      }}
    >
      <a
        href="https://www.instagram.com"
        style={{ color: "#C13584", margin: "10px 0" }}
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.linkedin.com"
        style={{ color: "#0077B5", margin: "10px 0" }}
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.facebook.com"
        style={{ color: "#3B5998", margin: "10px 0" }}
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default Social;
