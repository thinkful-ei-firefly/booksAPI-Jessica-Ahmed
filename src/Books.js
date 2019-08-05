import React from 'react';
import Book from './Book';


function Books(props) {
    
    const books = props.bookdata;

    if (props.bookdata.length >0) {
    
        const booksHtml = books.map(book => {
            
            let price = 'Not Found';
            if (book.saleInfo.saleability === 'NOT_FOR_SALE') {
            price = 'Not For Sale';    
            } else if (book.saleInfo.saleability === 'FREE') {
                price = 'Free';        
            } else if (book.saleInfo.saleability === 'FOR_SALE') {
                price = `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`;        
            } 

            let thumbnail = 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg';
            if (book.volumeInfo.imageLinks) {
                thumbnail = book.volumeInfo.imageLinks.thumbnail;
            }

            let authors = 'Unknown';
            if (book.volumeInfo.authors) {
                authors = book.volumeInfo.authors.join(', ');
            }

            let description = 'None';
            if (book.volumeInfo.description) {
                description = book.volumeInfo.description;
            }
            
            return <Book 
            title = {book.volumeInfo.title}
            authors = {authors}
            price = {price}
            description = {description}
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