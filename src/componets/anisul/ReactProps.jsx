import React from 'react';
import Card from './Card';
import './style.css';

const ReactProps = () => {
  return (
    <div className='card-container'>
        <Card CardTitle="Card Title" CardDesc = "Lorem ipsum dollar"/>
        <Card CardTitle="Card Title" CardDesc = "Lorem ipsum dollar"/>
        <Card CardTitle="Card Title" CardDesc = "Lorem ipsum dollar"/>
    </div>
  )
}

export default ReactProps
