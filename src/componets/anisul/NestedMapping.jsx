import React from "react";
import { FaListAlt } from "react-icons/fa";
import "./style.css";

const users = [
  {
    fullName: "Ashraf",
    age: 32,
    phones: [{ home: "01558917333" }, { office: "01911967727" }],
  },
  {
    fullName: "Sumit",
    age: 30,
    phones: [{ home: "01458955" }, { office: "0215489" }],
  },
];

const NestedMapping = () => {
  return (
    <div>
      <h1>
        <span className="icon">
          <FaListAlt />
        </span>
        Nested List
      </h1>
      {users.map((user, userIndex) => (
        <article key={userIndex}>
          <h3>Full Name: {user.fullName}</h3>
          <p>Age: {user.age}</p>
          {user.phones.map((phone, phoneIndex) => (
            <div key={phoneIndex}>
              {phone.home && <p>Home: {phone.home}</p>}
              {phone.office && <p>Office: {phone.office}</p>}
            </div>
          ))}
        </article>
      ))}
    </div>
  );
};

export default NestedMapping;
