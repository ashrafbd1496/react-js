import React from "react";
import "./style.css";

const Card = (props) => {
  //we can catch those attributes using props
  //console.log(props);
  return (
    <div>
      <div className="card">
        <img
          src="/public/card-img-1.png"
          alt="Card Image"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">{props.CardTitle}</h2>
          <p className="card-description">
           {props.CardDesc}
          </p>
          <a href="#" className="card-button">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
