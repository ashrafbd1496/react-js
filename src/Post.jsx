import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement("h1", null, "");
// console.dir(element);

export default function Post() {
  const postData = {
    title: "React Tuto",
    author: "Ashraf",
    content: "Test React",
  };
  
  return (
    <div>
      {element} {/* Render the created element */}
      <h1>{postData.title}</h1>
      <div>{postData.content}</div>
    </div>
  );
} // end Post function
