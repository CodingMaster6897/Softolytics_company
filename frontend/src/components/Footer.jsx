import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mainfoo">
      <div className="footer-links">
        <div className="container cont">
          <div className="links-title">
            <h2>Useful Links</h2>
          </div>
          <div className="service-links">
            <div className="service-links-inner">
              <div className="service-link-col">
                <a href="websites.aspx">ERP</a>
              </div>
              <div className="service-link-col">
                <a href="graphic-design.aspx">Websites</a>
              </div>
              <div className="service-link-col">
                <a href="mobile-apps.aspx">Data analytics</a>
              </div>
              <div className="service-link-col">
                <a href="marketing.aspx">Buisness Process Management</a>
              </div>
              <div className="service-link-col">
                <a href="social-media.aspx">App Development</a>
              </div>
              <div className="service-link-col">
                <a href="e-commerce-solution.aspx">CRM</a>
              </div>
            </div>
          </div>
          <div className="page-links">
            <div className="page-links-inner">
              <div className="page-link-col">
                <Link to="/">Home</Link>
              </div>
              <div className="page-link-col">
                <Link to="/Aboutpage">About</Link>
              </div>
              <div className="page-link-col">
                <Link to="/carrers">Carrers</Link>
              </div>
              <div className="page-link-col">
                <Link to="/service">Services</Link>
              </div>
              <div className="page-link-col">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2021-23 Softolytics private limited | All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
