import React, { useRef, useState } from "react";
import "../CSS/Patient.css";
import "../App.css";
import { NFTStorage } from "nft.storage";

function Patient() {
 
  const [metaDataURL, setMetaDataURl] = useState();

  const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFhNWNiQTlFYkQwRTcxZWE4NTA0Zjk5NGE0MkNBOUE3MWRlQTkwZTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MTU3NjQ1MTE4MCwibmFtZSI6Ikluc3RpdHV0ZSBNYW5hZ2VtZW50In0.s4o-sf9pRDr7oZq-zTDiedhNm49JW_AKGibtGOCg9VY";

  var name = '';
  var walletAdd = '';
  var adharNo = ''; 
  var bloodG = '';
  var nomineeName = '';
  var nomineeMoNo = '';
  var document = '';
  var gender = '';
  const nameRef = useRef('');
  const walletRef = useRef('');
  const adharRef = useRef('');
  const bloodRef = useRef('');
  const nomineNRef = useRef('');
  const nomineMRef = useRef('');
  const genderRef = useRef('');
  const documentRef = useRef(null);


  const registerUser = async () => {
    console.log( "From the register",name)
    console.log(walletAdd)
  }

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

  const uploadDetailsToIPFS = async (inputFile) => {
    // uploadFile should be passed here.
    const nftStorage = new NFTStorage({ token: API_KEY });

    try {
      const metaData = await nftStorage.store({
        name: name,
        WalletAddress: walletAdd,
        aadharNo: adharNo,
        image: uploadFile, // Banner image for the Project
      });

      MetaDataURL = metaData.url;
      console.log(metaData.url);
      console.log(metaData);
      return metaData;
    } catch (error) {
      alert(error);
    }
  };
 
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
           
            <span className="gender-title">
              Gender
            </span>
            <div className="category">
            <input type="radio" value="Male" name="gender"  onChange={handleGender}/> Male
        <input type="radio" value="Female" name="gender" onChange={handleGender}/> Female
        <input type="radio" value="Other" name="gender" onChange={handleGender}/> Other
            </div>
          
           
          <div className="button">
            <input type="button" value="Register" onClick={handleRegister}>
              
            </input>
          </div>
        </form>

        <button onClick={registerUser}>registerUser</button>
      </div>
    </>
  );
}

export default Patient;
