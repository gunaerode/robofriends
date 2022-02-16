import React from 'react';
import Card from './Card';
import './Card.css';

export default function CardList({ robots }) {
  const cardsArray = robots.map((item, index) => {
    return (
      <Card key={item.id} id={item.id} name={item.name} email={item.email} />
    );
  });
  return <div className="wrapper">{cardsArray}</div>;
}
