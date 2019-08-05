import React from 'react';
import Book from './Book';


function Books(props) {
    
    const books = props.bookdata;

    if (props.bookdata.length >0) {
    
        const booksHtml = books.map(book => {
            console.log(book);
            let price;
            if (book.saleInfo.saleability === 'NOT_FOR_SALE') {
            price = 'Not For Sale';    
            } else if (book.saleInfo.saleability === 'FREE') {
                price = 'Free';        
            } else if (book.saleInfo.saleability === 'FOR_SALE') {
                price = `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`;        
            } else {
                price = 'Not Found';
            }
            let thumbnail;
            if (book.volumeInfo.imageLinks) {
                thumbnail = book.volumeInfo.imageLinks.thumbnail;
            } else {
                thumbnail = 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg';
            }
            
            return <Book 
            title = {book.volumeInfo.title}
            authors = {book.volumeInfo.authors}
            price = {price}
            description = {book.volumeInfo.description}
            thumbnail = {thumbnail}
            key = {book.id}
            />

        })

    return (
        <div className="results">{booksHtml}</div>
      );
    }

    

  return (
    <div></div>
  );
}

export default Books;