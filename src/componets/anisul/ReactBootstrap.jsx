import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ReactBootstrap = () => {
  return (
    <Card style={{width:' 15rem'}}>
      <Card.Img variant="top"  src="/card-img-1.png"  alt="person"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default ReactBootstrap;
