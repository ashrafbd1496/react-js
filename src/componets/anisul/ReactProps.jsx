import React from "react";
import Card from "./Card";
import "./style.css";

const ReactProps = () => {
  return (
    <div className="card-container">
      <Card
        CardTitle="Card Title 1"
        CardDesc="desc -1 we destructured properties CardTitle, CardDesc from props object directly"
        CardImage="/public/card-img-1.png"
      />
      <Card
        CardTitle="Card Title 2"
        CardDesc="desc -2 we can catch those properties using props"
        CardImage="/public/card-img-2.png"
      />
      <Card
        CardTitle="Card Title 2"
        CardDesc="desc -3 const {CardTitle, CardDesc} = props;"  CardImage="/public/card-img-1.png"
      />
    </div>
  );
};

export default ReactProps;
