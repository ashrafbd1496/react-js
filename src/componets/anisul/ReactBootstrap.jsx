import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ReactBootstrap = ({ quantities }) => {
  const cards = Array.from({ length: quantities }, (_, index) => index + 1);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {cards.map((card, index) => (
        <Card key={index} style={{ width: '15rem' }}>
          <Card.Img variant="top" src="/card-img-1.png" alt="person" />
          <Card.Body>
            <Card.Title>Card Title {card}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ReactBootstrap;
