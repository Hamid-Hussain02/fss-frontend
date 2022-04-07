import React from "react";
import BannerImg from "../assets/images/banner-5.jpeg";

const Banner = () => {
  return (
    <div className="">
      {/* Banner */}
      <img src={BannerImg} style={{ width: "100%" }} className="image"></img>
      <div className="overlay text-container">
        <div style={{ margin: "auto", width: "400px" }}>
          <h1
            style={{
              margin: "auto",
              color: "lightseagreen",
              fontSize: "100px",
            }}
          >
            Foody.pk
          </h1>
          <h4 style={{ color: "lightseagreen" }}>
            “You don’t need a silver fork to eat good food.” – Paul Prudhomme
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
