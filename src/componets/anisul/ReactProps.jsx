import React from 'react';
import Card from './Card';
import './style.css';

const ReactProps = () => {
  return (
    <div className='card-container'>
        <Card CardTitle="Card Title 1" CardDesc = "desc -1 Lorem ipsum dollar"/>
        <Card CardTitle="Card Title 2" CardDesc = "desc -2 Lorem ipsum dollar"/>
        <Card CardTitle="Card Title 2" CardDesc = "desc -3 Lorem ipsum dollar"/>
    </div>
  )
}

export default ReactProps
