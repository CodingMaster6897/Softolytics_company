import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div class="footer-links">
        <div class="container">
          <div class="links-title">
            <h2>Useful Links</h2>
          </div>
          <div class="service-links">
            <div class="service-links-inner">
              <div class="service-link-col">
                <a href="websites.aspx">Websites</a>
              </div>
              <div class="service-link-col">
                <a href="graphic-design.aspx">Graphic Design</a>
              </div>
              <div class="service-link-col">
                <a href="mobile-apps.aspx">Mobile Apps</a>
              </div>
              <div class="service-link-col">
                <a href="marketing.aspx">Marketing</a>
              </div>
              <div class="service-link-col">
                <a href="social-media.aspx">Social Media</a>
              </div>
              <div class="service-link-col">
                <a href="e-commerce-solution.aspx">E-Commerce Solution</a>
              </div>
            </div>
          </div>
          <div class="page-links">
            <div class="page-links-inner">
              <div class="page-link-col">
                <a href="Default.aspx">Home</a>
              </div>
              <div class="page-link-col">
                <a href="about.aspx">About</a>
              </div>
              <div class="page-link-col">
                <a href="portfolio.aspx">Portfolio</a>
              </div>
              <div class="page-link-col">
                <a href="clients.aspx">Clients</a>
              </div>
              <div class="page-link-col">
                <a href="contact.aspx">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2022-23 Softolytics private limited | All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
