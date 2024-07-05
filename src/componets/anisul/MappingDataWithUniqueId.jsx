import React from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const lists = [
  {
    id: uuidv4(),
    title: "Title 01",
    desc: "This is description 1",
    image: "/public/card-img-1.png",
  },
  {
    id: uuidv4(),
    title: "Title 02",
    desc: "This is description 2",
    image: "/public/card-img-2.png",
  },
  {
    id: uuidv4(),
    title: "Title 03",
    desc: "This is description 3",
    image: "/public/card-img-1.png",
  },
];

const List = () => {
  return (
    <div className="card-container">
      {lists.map((item) => {
        //destructured the item
        const { id, title, desc, image } = item;
        //console.log(id); // এখানে id কনসোলে দেখানো হবে
        return (
          <div key={id} className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{desc}</p>
            <img src={image} alt={title} className="card-image" />
          </div>
        );
      })}
    </div>
  );
 
};

export default List;
