import React, { Component } from 'react';
import HeaderGoodreads from './components/Appbar/Header'
import Books from './containers/Books/Books'

class App extends Component {

  state = {
    searchString: "Science",
    search: true
  }
// as by default i want to show books for science field so search is set to true
  formHeader(params) {
    this.setState({
      searchString: params,
      search: true
    })
  }

  render() {
    return (
      <div className="App">
        <HeaderGoodreads callback={this.formHeader.bind(this)} />
        {this.state.search ? (
          <Books searchString={this.state.searchString} />
        ) : "Please enter search keyword"}
      </div>
    );
  }
}

export default App;