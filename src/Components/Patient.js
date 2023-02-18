import React, { useRef } from "react";
import "../CSS/Patient.css";
import "../App.css";

function Patient() {
 
  var name = '';
  var walletAdd = '';
  var adharNo = ''; 
  var bloodG = '';
  var nomineeName = '';
  var nomineeMoNo = '';
  var document = '';
  const nameRef = useRef('');
  const walletRef = useRef('');
  const adharRef = useRef('');
  const bloodRef = useRef('');
  const nomineNRef = useRef('');
  const nomineMRef = useRef('');
  const genderRef = useRef('');
  const documentRef = useRef(null);

 function handleRegister(){
      name = nameRef.current.value;
      walletAdd = walletRef.current.value;
      adharNo = adharRef.current.value;
      bloodG = bloodRef.current.value;
      nomineeName = nomineNRef.current.value;
      nomineeMoNo = nomineMRef.current.value;
      document = documentRef.current.files[0];
      console.log(name);
  }
 
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
                ref = {nameRef}
              ></input>
 
            </div>
            <div className="input-box">
              <span className="details">Wallet Address</span>
              <input
                type="text"
                placeholder="Enter Your Wallet Address "
                required
                ref = {walletRef}
              ></input>
            </div>
            <div className="input-box">
              <span className="details"> Aadhar No </span>
              <input
                type="text"
                placeholder="Enter Your Aadhar No "
                required
                ref = {adharRef}
              ></input>
            </div>
            <div className="input-box">
              <span className="details"> Blood group </span>
              <input
                type="text"
                placeholder="Enter Your Blood Group"
                required
                ref = {bloodRef}
              ></input>
            </div>
            <div className="input-box">
            <span className="details">Nominee Name </span>
            <input type="text" placeholder="Enter Nominee Name " required ref = {nomineNRef}>
            </input>
          </div>
          <div className="input-box">
            <span className="details"> Nominee Mobile No</span>
            <input type="text" placeholder="Enter Nominee Mobile No" required ref = {nomineMRef}>
            </input>
          </div>
          <div className="input-box">
            <span className="details"> Submit Medical documents </span>
            <input type="file" placeholder=" choose files " required ref = {documentRef}>
             
            </input>
           
          </div>
          </div>
          <div  className="Gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            
            <span className="gender-title">
              Gender
            </span>
            <div className="category">
            <input type="radio" value="Male" name="gender"  /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
            </div>
          
          </div>
          <div className="button">
            <input type="Submit" value="Register" onClick={handleRegister}>
              
            </input>
          </div>
        </form>
      </div>
    </>
  );
}

export default Patient;
