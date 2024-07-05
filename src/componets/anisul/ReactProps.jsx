import React from "react";
import Card from "./Card";
import "./style.css";
import Data from "./data.json";

const ReactProps = () => {
  //console.log(Data);

  return (
    <div className="card-container">
      {Data.map((item, index) => (
        <Card
          key={index}
          CardTitle={item.title}
          CardDesc={item.desc}
          CardImage={item.image}
        />
      ))}
    </div>
  );
};

export default ReactProps;
