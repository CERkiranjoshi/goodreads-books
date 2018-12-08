import React, { Component } from 'react';
import HeaderGoodreads from './components/Appbar/Header'
import Books from './containers/Books/Books'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderGoodreads/>
        <Books/>
      </div>
    );
  }
}

export default App;