import React from "react";
import "../CSS/Doctors.css";
import "../App.css";

 
  function Find_Doctors() {
   
  return (
     <>
    <section className="doctor_section layout_padding">
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

    
      <footer class="site-footer section-padding" id="contact">
           
                <div class="row">

                    <div class="col-lg-5 me-auto col-12">
                        <h5 class="mb-lg-4 mb-3">Opening Hours</h5>

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex">
                                Sunday : Closed
                            </li>

                            <li class="list-group-item d-flex">
                                Monday, Tuesday - Firday
                                <span>8:00 AM - 3:30 PM</span>
                            </li>

                            <li class="list-group-item d-flex">
                                Saturday
                                <span>10:30 AM - 5:30 PM</span>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-6 col-12 my-4 my-lg-0">
                        <h5 class="mb-lg-4 mb-3">Our Clinic</h5>

                        <p><a href="mailto:hello@MedTech.co">hello@MedTech.co</a>
                        </p>

                        <p>123 Digital Art Street, San Diego, CA 92123</p>

                    </div>
                </div>
            </footer>
        </div>
  </section>

    </>
  )

}

export default Find_Doctors