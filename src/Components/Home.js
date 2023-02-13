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
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
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
