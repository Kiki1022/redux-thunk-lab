import React, { Component } from 'react';

class App extends Component {   
  
  componentDidMount() {
      this.fetchCats()
  }


  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
      </div>
    );
  }
}

export default App

