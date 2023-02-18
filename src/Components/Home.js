import React from "react";
import "../CSS/Home.css";
import "../App.css";

function Home() {
  return (
    <>
      {" "}
      <div className="mainContainer">
        <div className="description">
          <h1>We Are Here For Your Care</h1>
          <p style={{ color: "#0c3a8a" }}>
            Experience the future of healthcare today. Our personalized health
            prescription service is just one click away, offering you a secure
            and private consultation. You can trust our commitment to your
            privacy. Take the first step towards a healthier you and consult
            with ease.
          </p>
          <div className="rbtn">Read More</div>
        </div>
        <div className="docpic"></div>
      </div>
    </>
  );
}

export default Home;
