import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Social.css";

const Social = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (screenWidth <= 900) {
    return null; // If the screen width is less than or equal to 900px, do not render the component
  }

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
        href="https://www.instagram.com/softolytics"
        target="__blank__"
        style={{ color: "#C13584", margin: "10px 0" }}
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.linkedin.com/company/softolytic"
        target="__blank__"
        style={{ color: "#0077B5", margin: "10px 0" }}
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.facebook.com/Softolytics"
        target="__blank__"
        style={{ color: "#3B5998", margin: "10px 0" }}
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default Social;
