import React from 'react';


function Books(props) {
    
    //pull out the following properties
    //authors, title, price, description, thumbnail, id
    //pass each set down to Book and render the resulting mapped list
    console.log(props);
    const books = props.bookdata;

    if (props.bookdata.length >0) {
    const book = books[0];
    console.log(book);
    let title = book.volumeInfo.title;
    let authors = book.volumeInfo.authors.join(', ');
    
    let price = book.saleInfo;
    console.log(price);
    let description;
    let thumbnail;
    let id;

    }

    

  return (
    <div></div>
  );
}

export default Books;