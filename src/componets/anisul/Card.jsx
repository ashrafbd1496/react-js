import React from "react";
import "./style.css";

const Card = ({ CardTitle, CardDesc, CardImage }) => {
  //we destructured properties CardTitle, CardDesc from props object directly
  //we can catch those properties using props
  //console.log(props);
  // const {CardTitle, CardDesc} = props;
  /**
   * if the property is an arrray like
   * const name = ['dog', 'cat'];
   * we can write it like  const [dog, cat] = name;
   */
  return (
    <div>
      <div className="card">
        <img src={CardImage} alt="Card Image" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{CardTitle}</h2>
          {/* <h2 className="card-title">{props.CardTitle}</h2> */}
          <p className="card-description">{CardDesc}</p>
          <a href="#" className="card-button">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
