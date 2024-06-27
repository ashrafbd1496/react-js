import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement("h1", null, "");
// console.dir(element);

export default function Post() {
  const postData = {
    title: "Learn React",
    author: "Ashraf",
    content: "lorem ipsum dollar",
  };
  
  return (
    <div>
      {element} {/* Render the created element */}
      <h1>{postData.title}</h1>
      <div>{postData.content}</div>
    </div>
  );
} // end Post function
