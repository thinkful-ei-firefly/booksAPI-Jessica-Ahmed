import React from 'react';


function Book(props) {
    //authors, title, price, description, thumbnail, id
  return (
    <div>
        <h2>{props.title}</h2>
        <img src={props.thumbnail} alt="the book cover"/>
        <p>Authors: {props.authors}</p>
        <p>Price: {props.price}</p>

        <p>Description: {props.description}</p>
      
    </div>
  );
}

export default Book;