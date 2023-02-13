import React from "react";
import "../CSS/Doctors.css";
import "../App.css";

 
  function Find_Doctors() {
   
  return (
     <>
    <section class="doctor_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our Doctors
        </h2>
        <p class="col-md-10 mx-auto px-0">
          Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="/d1.jpg " alt="doctor-image" />
            </div>
            <div className="detail-box">
              <div className="social_box">
                <a href="facebook.png">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <h5>
                Elina Josh
              </h5>
              <h6 className="">
                Doctor
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="/d2.jpg" alt="" />
            </div>
            <div className="detail-box">
              <div className="social_box">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <h5>
                Adam View
              </h5>
              <h6 className="">
                Doctor
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="/d3.jpg" alt="" />
            </div>
            <div className="detail-box">
              <div className="social_box">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <h5>
                Mia Mike
              </h5>
              <h6 className="">
                Doctor
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          View All
        </a>
      </div>

    
  <footer class="footer_section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 footer_col">
          <div class="footer_contact">
            <h4>
              Reach at..
            </h4>
            <div class="contact_link_box">
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  MedTech@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 footer_col">
          <div class="footer_detail">
            <h4>
              About
            </h4>
            <p>
              unde dicta facilis minima veniam corporis laudantium alias tenetur eveniet illum reprehenderit fugit a delectus officiis blanditiis ea.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-2 mx-auto footer_col">
          <div class="footer_link_box">
            <h4>
              Links
            </h4>
            <div class="footer_links">
              <a class="" href="index.html">
                Home
              </a>
              <a class="" href="about.html">
                About
              </a>
             
              <a class="active" href="Patients.html">
                Patients
              </a>
             
            </div>
          </div>
        </div>
       
      </div>
     </div>
  </footer>

    </div>
  </section>
    </>
  )

}

export default Find_Doctors