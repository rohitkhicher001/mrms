import React from "react";
import "./homepage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Mainpage from "../api/mainpage";
import Navbar from "../navbar/navbar";
import "./dist/css/style.css";

import logoLight from "./dist/images/logo-light.svg";
import logoDark from "./dist/images/logo-dark.svg";
import hil from "./dist/images/header-illustration-light.svg";
import hid from "./dist/images/header-illustration-dark.svg";
import hmi from "./dist/images/hero-media-illustration-light.svg";
import hmii from "./dist/images/hero-media-illustration-dark.svg"
import hml from "./dist/images/hero-media-light.svg"

const Homepage = ({ setLoginUser }) => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <Navbar />

      <div class="body-wrap boxed-container">
        <header class="site-header">
          <div class="container">
            <div class="site-header-inner">
              {/* <div class="brand header-brand">
                <h1 class="m-0">
                  <a href="#">
                    <img
                      class="header-logo-image asset-light"
                      src={logoLight}
                      alt="Logo"
                    />
                    <img
                      class="header-logo-image asset-dark"
                      src={logoDark}
                      alt="Logo"
                    />
                  </a>
                </h1>
              </div> */}
            </div>
          </div>
        </header>

        <main>
          <section class="hero">
            <div class="container">
              <div class="hero-inner">
                <div class="hero-copy">
                  <h1 class="hero-title mt-0">What we offer to you</h1>
                  <p class="hero-paragraph">
                    Secure environment to store your and your family's data, documents and regular reminders for vaccines.
                  </p>
                  {/* <div class="hero-cta">
                    <a class="button button-primary" href="#">
                      Buy it now
                    </a>
                    <div class="lights-toggle">
                      <input
                        id="lights-toggle"
                        type="checkbox"
                        name="lights-toggle"
                        class="switch"
                        checked="checked"
                      />
                      <label for="lights-toggle" class="text-xs">
                        <span>
                          Turn me <span class="label-text">dark</span>
                        </span>
                      </label>
                    </div>
                  </div> */}
                </div>
                
              </div>
            </div>
          </section>

          <section class="features section">
            <div class="container">
              <div class="features-inner section-inner has-bottom-divider">
                <div class="features-header text-center">
                  <div class="container-sm">
                    <h2 class="section-title mt-0">How to proceed</h2>
                    <p class="section-paragraph">
                      Create a profile, enter your and your family details, submit your documents, enter your previous medications and whenever you visit a doctor, just show your details and documents.
                    </p>
                    <div class="features-image">
                      <img
                        class="features-illustration asset-dark"
                        src="dist/images/features-illustration-dark.svg"
                        alt="Feature illustration"
                      />
                      <img
                        class="features-box asset-dark"
                        src="dist/images/features-box-dark.svg"
                        alt="Feature box"
                      />
                      <img
                        class="features-illustration asset-dark"
                        src="dist/images/features-illustration-top-dark.svg"
                        alt="Feature illustration top"
                      />
                      <img
                        class="features-illustration asset-light"
                        src="dist/images/features-illustration-light.svg"
                        alt="Feature illustration"
                      />
                      <img
                        class="features-box asset-light"
                        src="dist/images/features-box-light.svg"
                        alt="Feature box"
                      />
                      <img
                        class="features-illustration asset-light"
                        src="dist/images/features-illustration-top-light.svg"
                        alt="Feature illustration top"
                      />
                    </div>
                  </div>
                </div>
                <div class="features-wrap">
                  <div class="feature is-revealing">
                    <div class="feature-inner">
                      <div class="feature-icon">
                        <img
                          class="asset-light"
                          src="dist/images/feature-01-light.svg"
                          alt="Feature 01"
                        />
                        <img
                          class="asset-dark"
                          src="dist/images/feature-01-dark.svg"
                          alt="Feature 01"
                        />
                      </div>
                      <div class="feature-content">
                        <h3 class="feature-title mt-0">Medical Record</h3>
                        <p class="text-sm mb-0">
                          Enter your previous injuries/diseases/allergies/medications in my record section. Download your record in form of csv/pdf. Easily find/search/sort by name/description/hospital name etc.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="feature is-revealing">
                    <div class="feature-inner">
                      <div class="feature-icon">
                        <img
                          class="asset-light"
                          src="dist/images/feature-02-light.svg"
                          alt="Feature 02"
                        />
                        <img
                          class="asset-dark"
                          src="dist/images/feature-02-dark.svg"
                          alt="Feature 02"
                        />
                      </div>
                      <div class="feature-content">
                        <h3 class="feature-title mt-0">Documents</h3>
                        <p class="text-sm mb-0">
                          Store your documents with title and no need to carry them everywhere. No fear to lose your documents or damage by creasing or weather. Secure environment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="feature is-revealing">
                    <div class="feature-inner">
                      <div class="feature-icon">
                        <img
                          class="asset-light"
                          src="dist/images/feature-03-light.svg"
                          alt="Feature 03"
                        />
                        <img
                          class="asset-dark"
                          src="dist/images/feature-03-dark.svg"
                          alt="Feature 03"
                        />
                      </div>
                      <div class="feature-content">
                        <h3 class="feature-title mt-0">Get notified</h3>
                        <p class="text-sm mb-0">
                          Fill your details in profile section and keep it updated. Based on the information you provide us we'll notify you. Keep your profile updated to avoid any unnecessary notifications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="cta section">
            <div class="container-sm">
              <div class="cta-inner section-inner">
                <div class="cta-header text-center">
                  <h2 class="section-title mt-0">Contact Us</h2>
                  <p class="section-paragraph">
                    Write us a message if you are facing any issue in the website or any feedback you like to give to us. Stay safe stay healthy.
                  </p>
                  <div class="cta-cta">
                  <div  class="btn btn-primary btn-lg btn-block w-100" onClick={()=>navigate("/profile")}>Get started</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="news">
        <Mainpage />
      </div>
      <button class="button-67" onClick={() => setLoginUser({})}>
        Logout
      </button>
    </div>
  );
};

export default Homepage;
