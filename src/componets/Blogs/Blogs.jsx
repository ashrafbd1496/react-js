import React, { useState } from 'react';
import "./Blogs.css";

const Blogs = () => {
    const [heading, setHeading] = useState('I am from Blogs component');
  const Changeheading=()=> {
    setHeading((prevHeading)=>
    prevHeading === 'I am from Blogs component' ? 
        'Blog Heading Changed!' : 'I am from Blogs component');
}

  return (
    <div>
      <h3 id="blog_heading">{heading}</h3>
      <button onClick={Changeheading} className="btn">
        Change Heading
      </button>
    </div>
  );
};

export default Blogs;
