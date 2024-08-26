import React, { useContext } from "react";
import CustomButton from "../components/Button";
import { SiteInfoContext } from "../context";



const Home = () => {

  
  const siteInfo = useContext(SiteInfoContext);

  return (
    <>
      <section id="about">
        <div className="row">
          {/* TOP CARDS */}
          <div className="top ">
            <div className="container">
              <div className="step">
                <div className="number">1</div>
                <h3>Free In-home Estimate</h3>
                <p>
                  We talk to you about your project and take necessary
                  measurements.
                </p>
              </div>
              <div className="step">
                <div className="number">2</div>
                <h3>Select Your Stone</h3>
                <p>
                  You choose the stone and a comprehensive estimate is provided.
                </p>
              </div>
              <div className="step">
                <div className="number">3</div>
                <h3>Stone is Ordered</h3>
                <p>
                  The stone is ordered and sent to fabricator. Homeowner orders
                  necessary appliances.
                </p>
              </div>
              <div className="step">
                <div className="number">4</div>
                <h3>Install</h3>
                <p>
                  We demo and install. The result is a clean and beautiful space
                  you will love.
                </p>
              </div>
            </div>
          </div>

          <div className="bot d-flex">
            {/* Bot right */}
            <div className="image">
              <img
                src={"/img/about/image.jpg"}
                alt="Modern kitchen with white cabinets and marble countertops"
              />
            </div>

            {/*Bot left */}
            <div className="left">
              <div className="txt">
                <p className="sub-heading">KNOW ABOUT US</p>
                <div className="heading">
                  West Valley Phoenix Custom Cabinet & Countertop Installation
                </div>
                <div className="details">
                  At Arizona Interior Construction, we take great pride in
                  providing the highest quality workmanship for our customers.
                  With over 15 years in the industry, we have the skills,
                  knowledge, and experience to transform the countertops and
                  cabinets in your kitchen, bathrooms, laundry room, office,
                  workshop, and outdoor living space. Contact us today to
                  receive your free in-home estimate. We’re proudly serving the
                  entire Phoenix Metro area and all of Arizona!
                </div>
              </div>
              <div className="buttons">
                <CustomButton
                  text="GET A QUOTE"
                  maxWidth={"219px"}
                  minHeight={"57px"}
                 
                />
                <div className="btn-right">
                  <img
                    src={"/img/icons/phone-btn.png"}
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
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ====================================================*/}
      <section id="faq">
        <div className="row d-flex">
          <div className="txt">
            <div className="faq-container">
              <h2 className="sub-heading">FAQ's</h2>
              <h1 className="heading">Frequently Asked Questions</h1>
              <div className="faq-list">
                <details>
                  <summary>
                    How much does it cost to install a kitchen countertop?
                  </summary>
                  <p>Answer content here...</p>
                </details>
                <details>
                  <summary>
                    What are the most popular materials for kitchen countertops?
                  </summary>
                  <p>Answer content here...</p>
                </details>
                <details>
                  <summary>
                    How long does it typically take to install a kitchen
                    countertop?
                  </summary>
                  <p>Answer content here...</p>
                </details>
                <details>
                  <summary>
                    What factors should I consider when choosing a countertop
                    material?
                  </summary>
                  <p>Answer content here...</p>
                </details>
                <details>
                  <summary>
                    Do I need to hire a professional for countertop installation
                    or can I do it myself?
                  </summary>
                  <p>Answer content here...</p>
                </details>
              </div>

              <div className="buttons">
                <CustomButton
                  text="View All"
                  maxWidth={"219px"}
                  minHeight={"57px"}
                />
                <div className="btn-right">
                  <img
                    src={"/img/icons/phone-btn.png"}
                    alt="email icon"
                  />
                  <div className="btn-details">
                    <p className="detail-1">Call Us Now</p>
                    <p className="detail-2">{siteInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className="bot">
                <div className="logo">
                  <img
                    src={"/img/logo.png"}
                    alt="Arizona Interior Construction Logo"
                  />
                </div>
                <div className="review-card">
                  {/* <div class="navigation">← Previous Next →</div> */}
                  <div className="d-flex user-rating">
                    <div className="stars">★★★★★</div>
                    <div className="reviewer">- PATRICK SMITH</div>
                  </div>

                  <p className="review-text">
                    "These guys were amazing! From demolition of the old
                    counters to the installation everything went perfectly.
                    <span className="db">
                      They cleaned up everything and the new granite tops could
                      not look any better."
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="image">
            <img
              src={"/img/faq/image.jpg"}
              alt="Modern kitchen with white cabinets and marble countertops"
            />
          </div>
        </div>
        {/* responsive */}
        <div className="bot-2">
          <div className="logo">
            <img
              src={"/img/logo.png"}
              alt="Arizona Interior Construction Logo"
            />
          </div>
          <div className="review-card">
            {/* <div class="navigation">← Previous Next →</div> */}
            <div className="d-flex user-rating">
              <div className="stars">★★★★★</div>
              <div className="reviewer">- PATRICK SMITH</div>
            </div>

            <p className="review-text">
              "These guys were amazing! From demolition of the old counters to
              the installation everything went perfectly.
              <span className="db">
                They cleaned up everything and the new granite tops could not
                look any better."
              </span>
            </p>
          </div>
        </div>
      </section>

      {/*  SERVICES ================================================================*/}
      <section id="services">
        <div className="row">
          <div className="txt">
            <h2 className="sub-heading">OUR SERVICE OFFERING</h2>
            <h1 className="heading">
              Explore Our Services & Discover How We
              <span class="db"> Can <span>Transform Your Dream Project Into Reality</span></span>
             
            </h1>
            <p className="details">
              We take great pride in providing the highest quality workmanship
              for our customers. With over 15 years in the industry, we have the
              skills, knowledge, and experience
            </p>
            <div className="buttons">
              <CustomButton
                text="MORE SERVICES"
                maxWidth={"219px"}
                minHeight={"57px"}
              />
              <div className="btn-right">
                <img
                  src="/img/icons/phone-btn.png"
                  alt="email icon"
                />
                <div className="btn-details">
                  <p className="detail-1">Call Us Now</p>
                  <p className="detail-2">{siteInfo.phone}</p>
                </div>
              </div>
            </div>
            <div className="cards-container">
              <div className="card">
                <img
                  src="/img/services/image1.jpg"
                  alt="Kitchen Remodeling"
                />
                <CustomButton
                  text="MORE SERVICES"
                  className="card-button"
                  maxWidth={"250px"}
                  minHeight={"69px"}
                />
                {/* <div class="card-label">Kitchen Remodeling</div> */}
              </div>
              <div className="card">
                <img
                  src="/img/services/image2.jpg"
                  alt="Bathroom Remodeling"
                />
                <CustomButton
                  text="Bathroom Remodeling"
                  className="card-button"
                  maxWidth={"250px"}
                  minHeight={"69px"}
                />
              </div>
              <div className="card">
                <img
                  src="/img/services/image3.jpg"
                  alt="Repair Needs"
                />
                <CustomButton
                  text="Repair Needs"
                  className="card-button"
                  maxWidth={"250px"}
                  minHeight={"69px"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


     
     {/* GALLERY */}
{/* GALLERY */}
<section id="gallery">
  <div className="top d-flex">
    <div className="logo">
      <img src="/img/logo.png" alt="Arizona Interior Construction Logo"/>
    </div>
    <div className="txt">
      <p className="sub-heading">SOME RECENT WORKS</p>
      <h1 className="heading">Ideas And Visions Turn Into Reality</h1>
      <p className="details">Our experience and skills together with your ideas and vision will turn any space into your REAL HOME.</p>
    </div>
  </div>

  <div className="img-gallery">
    <div className="gallery-container">
      <img src="/img/gallery/image1.jpg" className="edge" alt="Kitchen Design 1"/>
      <img src="/img/gallery/image2.jpg" className="mid" alt="Interior Design 2"/>
      <img src="/img/gallery/image3.jpg" className="edge" alt="Living Room Design 3"/>
    </div>
  </div>

  <section className="bot">
    <p className="bot-sub-heading">
      ARIZONA INTERIOR
    </p>
    <h2 className="bot-heading">Arizona Interior is Here For You To Help!</h2>
    <CustomButton
      text="Get a Quote"
      className="gallery-button"
      maxWidth={'219px'}
    />
  </section>
</section>
     
    </>
  );
};

export default Home;
