import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { SiteInfoContext } from "../context";
import CustomButton from "./Button";

const Header = () => {
  const siteInfo = useContext(SiteInfoContext);

  return (
    <section id="header">
      {/* TOP */}
      <div className="upper">
        <div className="content ">
          <div className="left">
            <div className="phone">
              <img src="../../public/img/icons/phone.png" alt="Phone Icon" />
              <p>{siteInfo.phone}</p>
            </div>
            <div className="email">
              <img src="../../public/img/icons/email.png" alt="email icon" />
              <p>{siteInfo.email}</p>
            </div>
          </div>
          <div className="right">
            <p>
              Specializing in Granite, Quartz Countertops, and Backsplash.
              Kitchen and Bath Remodels & Cabinets.
            </p>
          </div>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="top">
        <div className="row">
          <div className="content">
            {/* LOGO */}
            <Link to="/#page-top">
              <img src="../../public/img/logo.png" alt="Logo" className="nav-logo"/>
            </Link>
            {/* navbar */}
            <div className="left">
              <nav className="navbar">
                <a href="#" id="pull">
                  MENU
                </a>
                <ul>
                  <li className="navbar-item">
                    <NavLink
                      to="/"
                      className={({ isActive }) => 
                        isActive ? "navbar-link active" : "navbar-link"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="navbar-item">
                    <NavLink
                      to="/about#content"
                      className={({ isActive }) => 
                        isActive ? "navbar-link active" : "navbar-link"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="navbar-item">
                    <NavLink
                      to="/gallery#content"
                      className={({ isActive }) => 
                        isActive ? "navbar-link active" : "navbar-link"
                      }
                    >
                      Gallery
                    </NavLink>
                  </li>
                  <li className="navbar-item">
                    <NavLink
                      to="/services#content"
                      className={({ isActive }) => 
                        isActive ? "navbar-link active" : "navbar-link"
                      }
                    >
                      Design
                    </NavLink>
                  </li>
                  <li className="navbar-item">
                    <NavLink
                      to="/contact#content"
                      className={({ isActive }) => 
                        isActive ? "navbar-link active" : "navbar-link"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
              {/* Button */}
              <CustomButton
                text="Request Service"
                link="/contact#content"
                className="nav-btn"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BANNER */}
      <div className="bot banner">
        <div className="row">
          <div className="txt">
           <Link to="/#page-top" >
              <img src="../../public/img/logo.png" alt="Logo" className="mobile mobile-logo" />
            </Link>
            <p className="sub-heading">AT ARIZONA INTERIOR CONSTRUCTION</p>
            <h1 className="heading">
              We Take Great Pride in Providing
              <span className="db"> The Highest Quality Workmanship</span>
            </h1>
            <p className="details">
              With over 15 years in the industry, we have the skills, knowledge,
              and experience to transform the countertops and cabinets in your
              kitchen, bathrooms, laundry room, office, workshop, and outdoor
              living space.
            </p>
          </div>
          <div className="buttons">
            <CustomButton
              text="FREE ESTIMATE"
              maxWidth={"219px"}
              minHeight={"57px"}
            />
            <div className="btn-right">
              <img
                src="../../public/img/icons/phone-btn.png"
                alt="email icon"
              />
              <div className="btn-details">
                <p className="detail-1">Call Us Now</p>
                <p className="detail-2">{siteInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
