import React from "react";
import "../CSS/Doctors.css";
import "../App.css";
import * as PushAPI from "@pushprotocol/restapi";
import { Chat } from "@pushprotocol/uiweb";
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

      <Chat
                    // account={account} //user address 
                    account= "0x88Ab2b62ccBD5170AA4D7266C0D5d7D002689fEf" //user address 
                    supportAddress="0xc221979949e0ACc4E1E715FbB232284f7eE412d4" //support address
                    // apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
                    apiKey="vzOQa8Hda3.lD6Yvrij1T4qHrE07Mp7XcE3mRWu8Yl6WAmOzLSfI63xWuGSoNkXsHeBDVvG63Hs"
                        env="staging"
        />
    </>
  );
}

export default Find_Doctors;
