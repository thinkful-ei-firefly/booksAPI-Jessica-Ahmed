import React from 'react';
import Header from './Header';
import Books from './Books';

class App extends React.Component {
  
  state = {items: []};

  updateResults = results => {
    this.setState({items: results})
  }

  render() {
    return (
      <main className='App'>
        <Header updateResults={this.updateResults}/>
        <Books bookdata={this.state.items}/>        
      </main>
    );

  }
  
}

export default App;