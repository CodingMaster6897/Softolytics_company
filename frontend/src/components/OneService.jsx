import React from "react";
import "./OneService.css";
import img1 from "../assets/web-design-page/1.png";
import img2 from "../assets/web-design-page/2.png";
import img3 from "../assets/web-design-page/3.png";
import img4 from "../assets/web-design-page/4.png";

const OneService = () => {
  return (
    <div>
      <div className="data-main">
        <div className="section small-banner" id="small-banner">
          <h1 className="page-title">WEBSITES</h1>
          <h2 className="page-content-title">
            <span>Responsive&nbsp;Websites</span>{" "}
            <span className="slash">|</span>
            <span>Corporate&nbsp;Websites</span>{" "}
            <span className="slash">|</span>
            <span>E&nbsp;-&nbsp;Commerce&nbsp;Websites</span>
          </h2>
        </div>
        <div className="section inner-service" id="web-design">
          <div className="container">
            <div className="small-header">STUNNING WEBSITE DESIGN</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>Website Design</h1>
                </div>
                <p>
                  Because looks matter and standing out from the crowd is the
                  key element that makes your potential customer choose you over
                  your competitors to do business.
                </p>
                <p>
                  But since we are digital marketing experts and not just web
                  designers we also understand that a stunning website design is
                  just the beginning. Your websites main purpose is to generate
                  results hence at every step we ask ourselves:
                </p>
                <ul>
                  <li>Is your website design well structured ?</li>
                  <li>Is it easy to navigate for users ?</li>
                  <li>
                    Is it responsive to the multi-device world we live in ?
                  </li>
                  <li>Will it convert visitors into customers ?</li>
                </ul>
                <div className="test-btn">
                  <a href="website-design.aspx" className="btn btn-1">
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    Read More
                  </a>
                </div>
              </div>
              <div className="half">
                <div className="inner-service-img">
                  <img src={img4} alt="Web Design" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section inner-service" id="web-development">
          <div className="container">
            <div className="small-header">Crafting Customised Applications</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>Web Development</h1>
                </div>
                <h3>Expertise & Experience</h3>
                <p>
                  Systems developed for you should be able to evolve with time
                  as your business grows . No matter how complex or simple your
                  requirements may be we have the expertise and experience to
                  come up with an appropriate solution.
                </p>
                <h3>PLANNING FOR THE FUTURE</h3>
                <p>
                  Business models can change with times we ensure that your
                  application is easily scalable as you grow. From the very
                  beginning we analyze your requirement , plan and prepare for
                  every future eventuality be it visual design, platforms
                  security and it’s future functionality.
                </p>
                <div className="test-btn">
                  <a href="web-development.aspx" className="btn btn-1">
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    Read More
                  </a>
                </div>
              </div>
              <div className="half">
                <div className="inner-service-img">
                  <img src={img3} alt="Web Development" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section inner-service" id="e-commerce">
          <div className="container">
            <div className="small-header">e-Commerce Solutions</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>e-Commerce Websites</h1>
                </div>
                <p>
                  We have been designing E-commerce web design solutions for
                  brands and businesses which have become icons of success and
                  hence understand very well what motivates people to buy online
                  as well as what owners want from their E-commerce sites.
                </p>
                <p>
                  We can boast of proven expertise in creating secure, reliable
                  and search engine friendly on-line shops.
                </p>
                <p>
                  The experience we have gained working on several web projects
                  helps us create compelling , intuitive websites that appeal to
                  your audience, are easy to use, really show your products in
                  their best light , helping you gain and retain more customers
                  and increase your profits.
                </p>
                <div className="test-btn">
                  <a href="e-commerce-solution.aspx" className="btn btn-1">
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    Read More
                  </a>
                </div>
              </div>
              <div className="half">
                <div className="inner-service-img">
                  <img src={img2} alt="E Commerce" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section inner-service" id="web-maintenance">
          <div className="container">
            <div className="small-header">Maintenance And Support</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>Web Maintenance</h1>
                </div>
                <p>
                  We just don’t design your website and leave you at that. We
                  offer attractive maintenance packages(completely optional) so
                  that we are there to look after your website continually to
                  ensure that it stays up to date and looking great now, in the
                  future and well beyond.
                </p>
                <p>
                  Using our maintenance and support is like having your own
                  in-house team to fine tune your website.
                </p>
                <div className="test-btn">
                  <a href="website-maintanance.aspx" className="btn btn-1">
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    Read More
                  </a>
                </div>
              </div>
              <div className="half">
                <div className="inner-service-img">
                  <img src={img1} alt="Web Maintenance" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneService;
