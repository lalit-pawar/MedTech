import React from "react";
import "../CSS/Home.css";
import "../App.css";

function Home() {
  return (
    <>
       <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7">
                  <div class="detail-box">
                    <h1>
                    We Are Here For Your Care 
                    </h1>
                    <h2>Welcome</h2>
                    <p>
                    The Future of Healthcare is just front of you.
                    The securest way to consult.
                    Do not worry,We believe in your privacy.Get a personalized health Prescription with just one click.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                      </a>
                    </div>

                    <div className="doctor-img" >
                      <img src="doctor.jpg"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        
      </div>

    </section>
    </>
  );
}

export default Home;
