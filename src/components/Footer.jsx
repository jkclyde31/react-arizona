import React, { useContext } from "react";
import { SiteInfoContext } from "../context";
import { Link } from "react-router-dom";

const Footer = ({ view }) => {
  const siteInfo = useContext(SiteInfoContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div id="footer">
        <div className="sub-footer">
          {!["contact"].includes(view) && (
            <div id="contact">
              <div className="row">
                <div className="content">
                  <div className="top">
                    <p className="sub-heading">KEEP IN TOUCH</p>
                    <h2 className="heading">Contact Form</h2>
                    <p className="details">
                      We will be glad to answer your questions, feel free to ask a piece of information or a quotation.
                      <span className="db">We are looking forward to work with you.</span>
                    </p>
                  </div>
                  <form action="sendContactForm" method="post" className="sends-email ctc-form">
                    <div className="flex-form">
                      <label>
                        <input type="text" name="name" placeholder="Name" />
                      </label>
                      <label>
                        <input type="text" name="email" placeholder="Email" />
                      </label>
                      <label>
                        <input type="text" name="phone" placeholder="Phone" />
                      </label>
                    </div>
                    <textarea name="message" cols="100" rows="100" placeholder="Message" />
                    <div className="flex label-and-captcha">
                      <div className="consent">
                        <label>
                          <input type="checkbox" name="consent" className="consentBox" />
                          I hereby consent to having this website store my submitted information so that they can respond to my inquiry.
                        </label>
                        <label>
                          <input type="checkbox" name="consent" className="consentBox" />
                          I hereby confirm that I have read and understood this website’s Privacy Policy.
                        </label>
                        {siteInfo.policy_link && (
                          <label>
                            <input type="checkbox" name="termsConditions" className="termsBox" />
                            I hereby confirm that I have read and understood this website's{" "}
                            <a href={siteInfo.policy_link} target="_blank" rel="noopener noreferrer">
                              Privacy Policy.
                            </a>
                          </label>
                        )}
                      </div>
                      <div className="g-recaptcha"></div>

                      <button type="submit" className="btn hvr-pop">
                        SUBMIT FORM
                      </button>
                    </div>

                    <div className="logo">
                      <img src="/img/logo.png" alt="Arizona Interior Construction Logo" />
                    </div>
                    <div className="socmed">
                      <img src="/img/footer/socmed/fb.png" alt="Facebook Logo" />
                      <img src="/img/footer/socmed/x.png" alt="X / Twitter Logo" />
                      <img src="/img/footer/socmed/ig.png" alt="Instagram Logo" />
                      <img src="/img/footer/socmed/yt.png" alt="YouTube Logo" />
                      <img src="/img/footer/socmed/in.png" alt="LinkedIn Logo" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          <div className="footer-info">
            <a href={`mailto:${siteInfo.email}`}>
              <div className="info-item hvr-pop">
                <img src="/img/footer/ctc-icons/email.png" alt="Email Icon" />
                <div className="txt">
                  <strong className="db">MAIL</strong>
                  <p>
                    arizonainteriorconstruction
                    <span className="db"> @gmail.com</span>
                  </p>
                </div>
              </div>
            </a>

            <a href={`tel:${siteInfo.phone}`}>
              <div className="info-item hvr-pop">
                <img src="/img/footer/ctc-icons/phone.png" alt="Phone Icon" />
                <div className="txt">
                  <strong>PHONE</strong>
                  <p className="big">{siteInfo.phone}</p>
                </div>
              </div>
            </a>

            <a href={`tel:${siteInfo.phone}`}>
              <div className="info-item hvr-pop">
                <img src="/img/footer/ctc-icons/loc.png" alt="Location Icon" />
                <div className="txt">
                  <strong>LOCATION</strong>
                  <p className="big">
                    Litchfield Park, AZ,
                    <span className="db"> United States, Arizona</span>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="bot">
            <ul>
              <li className={view === "home" ? "active-menu" : ""}>
                <Link to="/">HOME</Link>
              </li>
              <li className={view === "about" ? "active-menu" : ""}>
                <Link to="/about#content">ABOUT</Link>
              </li>
              <li className={view === "gallery" ? "active-menu" : ""}>
                <Link to="/gallery#content">GALLERY</Link>
              </li>
              <li className={view === "services" ? "active-menu" : ""}>
                <Link to="/services#content">DESIGN</Link>
              </li>
              <li className={view === "contact" ? "active-menu" : ""}>
                <Link to="/contact#content">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="main">
          <p className="copy">
            &copy; {currentYear} {siteInfo.company_name}. All Rights Reserved.
            {siteInfo.policy_link && (
              <>
                <a href={siteInfo.policy_link}>Privacy Policy</a>.
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
