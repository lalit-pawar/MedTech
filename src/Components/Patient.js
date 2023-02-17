import React from "react";
import "../CSS/Patient.css";
import "../App.css";

function Patient() {
  return (
    <>
    <h1>Patient</h1>
      <div className="forminput">
        <div className="title">Registration</div>
        <form action="#">
          <div className="Userdetails">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                type="text"
                placeholder="Enter Your Name "
                required
              ></input>
            </div>
            <div className="input-box">
              <span className="details">Wallet Address</span>
              <input
                type="text"
                placeholder="Enter Your Wallet Address "
                required
              ></input>
            </div>
            <div className="input-box">
              <span className="details"> Aadhar No </span>
              <input
                type="text"
                placeholder="Enter Your Aadhar No "
                required
              ></input>
            </div>
            <div className="input-box">
              <span className="details"> Blood group </span>
              <input
                type="text"
                placeholder="Enter Your Blood Group"
                required
              ></input>
            </div>
            <div className="input-box">
            <span className="details">Nominee Name </span>
            <input type="text" placeholder="Enter Nominee Name " required>
            </input>
          </div>
          <div className="input-box">
            <span className="details"> Nominee Mobile No</span>
            <input type="text" placeholder="Enter Nominee Mobile No" required>
            </input>
          </div>
          <div className="input-box">
            <span className="details"> Submit Medical documents </span>
            <input type="file" placeholder=" choose files " required>
             
            </input>
           
          </div>
          </div>
          <div className="Gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            
            <span className="gender-title">
              Gender
            </span>
            <div className="category">
              <label for="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label for="dot-2">
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
              <label for="dot-3">
                <span className="dot three"></span>
                <span className="gender">Other</span>
              </label>
            </div>
          
          </div>
          <div className="button">
            <input type="Submit" value="Register">
              
            </input>
          </div>
        </form>
      </div>
    </>
  );
}

export default Patient;
