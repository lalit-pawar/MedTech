import React from "react";
import "../CSS/Doctors.css";
import "../App.css";

function Find_Doctors() {
  return (
    <>
      <section className="doctor_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>Our Doctors</h2>
            <p class="col-md-10 mx-auto px-0">
                Get Consulted from the best doctors in the world.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="/d1.jpg " alt="doctor-image" />
                </div>
                <div className="detail-box">
                  <h5>Elina Josh</h5>
                  <h6 className="">Doctor</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="/d2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Adam View</h5>
                  <h6 className="">Doctor</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="/d3.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Mia Mike</h5>
                  <h6 className="">Doctor</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">View All</a>
        </div>
        </div>
      </section>
    </>
  );
}

export default Find_Doctors;
