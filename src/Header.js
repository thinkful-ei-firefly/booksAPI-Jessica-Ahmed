import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
    
    }

APIKey = 'Your Api Key Here';
BASE_URL = 'https://www.googleapis.com/books/v1/volumes?';

submitFetch = event => {
    event.preventDefault();
    let query = this.refs.query.value;
    let printType = this.refs.printType.value;
    let filter = this.refs.filter.value;
    if (filter) {
        filter = `&filter=${filter}`
    }
    let URL = `${this.BASE_URL}q=${query}${filter}&printType=${printType}&key=${this.APIKey}`

    fetch(URL)
    .then(res => res.json())
    .then(data => this.props.updateResults(data.items))
    
}
    
render() {
  return (
    <header>
      
      <h1>Google Book Search</h1>
      <form onSubmit={this.submitFetch}>
        <li className= "search-contaier">
          <label htmlFor="search">Search:</label>
          <input id="search" placeholder="search for a book" type="text" ref="query" required></input>
          <button type="submit">Search</button>
        </li>
        <li className="filter-bar">
          <label htmlFor="printType">Print Type:</label>
          <select id="printType" ref="printType">
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>
          </select>
          <label htmlFor="filter">Filter:</label>
          <select id="filter" ref="filter">
              <option value="">No Filter</option>
              <option value="ebooks">All Google eBooks</option>
              <option value="free-ebooks">Free eBooks</option>
              <option value="full">Public eBooks</option>
              <option value="paid-ebooks">Paid eBooks</option>
              <option value="partial">Partial eBooks</option>
          </select>
        </li>
      </form>
    </header>
  );
}
}


export default Header;