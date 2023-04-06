import React from "react";
import img1 from "../assets/client-logos/hiranandani.jpg";
import img2 from "../assets/client-logos/vodafone.jpg";
import img3 from "../assets/client-logos/cadd.jpg";
import img4 from "../assets/client-logos/hdfc-realty.jpg";
import img5 from "../assets/client-logos/sbi-card.jpg";
import img6 from "../assets/client-logos/deepali-designs.jpg";
import img7 from "../assets/client-logos/gangar-eyenation.jpg";
import img8 from "../assets/client-logos/kyc.jpg";
import img9 from "../assets/client-logos/idea.jpg";
import img10 from "../assets/client-logos/vacs.jpg";
import img11 from "../assets/client-logos/ajmera.jpg";
import img12 from "../assets/client-logos/arkade.jpg";
import img13 from "../assets/client-logos/citi-bank.jpg";
import img14 from "../assets/client-logos/nmims.jpg";
import img15 from "../assets/client-logos/upaca.jpg";
import img16 from "../assets/client-logos/western-union-money-transfer.jpg";
import img17 from "../assets/client-logos/vegsutra.jpg";
import img18 from "../assets/client-logos/kenia.jpg";
import img19 from "../assets/client-logos/nritya-shakti.jpg";
import img20 from "../assets/client-logos/nritya-shakti.jpg";
import img21 from "../assets/client-logos/db-realty.jpg";
import img22 from "../assets/client-logos/met.jpg";
import img23 from "../assets/client-logos/dream-cruises.jpg";
import img24 from "../assets/client-logos/rivali-park.jpg";
import "./Clients.css";

const Clients = () => {
  return (
    <>
      <div class="section clients" id="clients">
        <div class="container">
          {/* <div class="small-header">Happy Clients</div> */}
          <div class="inner-container">
            <div
              class="main-header"
              style={{ marginLeft: "3rem", marginBottom: "1rem" }}
            >
              <h1>Our Trusted Clients</h1>
            </div>
            <div class="client-logos">
              <div class="client-logos-inner">
                <div class="logo-col">
                  <img src={img1} alt="Hiranandani" />
                </div>
                <div class="logo-col">
                  <img src={img2} alt="Vodafone" />
                </div>
                <div class="logo-col">
                  <img src={img3} alt="Cadd Center" />
                </div>
                <div class="logo-col">
                  <img src={img4} alt="HDFC Realty" />
                </div>
                <div class="logo-col">
                  <img src={img5} alt="SBI" />
                </div>
                <div class="logo-col">
                  <img src={img6} alt="Deepali Designs" />
                </div>
                <div class="logo-col">
                  <img src={img7} alt="Gangar Eyenation" />
                </div>
                <div class="logo-col">
                  <img src={img8} alt="KYC Events" />
                </div>
                <div class="logo-col">
                  <img src={img9} alt="Idea" />
                </div>
                <div class="logo-col">
                  <img src={img10} alt="VACS" />
                </div>
                <div class="logo-col">
                  <img src={img11} alt="Ajmera" />
                </div>
                <div class="logo-col">
                  <img src={img12} alt="Arkade" />
                </div>
                <div class="logo-col">
                  <img src={img13} alt="Citi Bank" />
                </div>
                <div class="logo-col">
                  <img src={img14} alt="NMIMS" />
                </div>
                <div class="logo-col">
                  <img src={img15} alt="UPACA" />
                </div>
                <div class="logo-col">
                  <img src={img16} alt="Western Union Money Transfer" />
                </div>
                <div class="logo-col">
                  <img src={img17} alt="Vegsutra" />
                </div>
                <div class="logo-col">
                  <img src={img18} alt="Kenia" />
                </div>
                <div class="logo-col">
                  <img src={img19} alt="Nritya Shakti" />
                </div>
                <div class="logo-col">
                  <img src={img20} alt="DB Realty" />
                </div>
                <div class="logo-col">
                  <img src={img21} alt="MET" />
                </div>
                <div class="logo-col">
                  <img src={img22} alt="Dream Cruises" />
                </div>
                <div class="logo-col">
                  <img src={img23} alt="Rivali Park" />
                </div>
                <div class="logo-col">
                  <img src={img24} alt="Lithan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
