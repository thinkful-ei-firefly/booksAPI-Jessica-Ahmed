import React from 'react';
import './Book.css';


function Book(props) {
    
  return (
    <div className='container'>
        
        <h2>{props.title}</h2>
        <img className="thumbnail-img" src={props.thumbnail} alt="the book cover"/>
        <p>Authors: {props.authors}</p>
        <p>Price: {props.price}</p>

        <p>Description: {props.description}</p>
        <a href={props.infoLink}>More Info</a>
    </div>
  );
}

export default Book;