import React, { Component } from 'react';
import { Route, Switch , Redirect } from 'react-router-dom';
import HeaderGoodreads from './components/Appbar/Header'
import Books from './containers/Books/Books';
import Bookdetails from './containers/Books/Bookdetails';
import Layout from './hoc/Layout/Layout';

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
      <div>
        <Layout>
          <HeaderGoodreads callback={this.formHeader.bind(this)} />
          <Switch>
            <Route path="/books" exact render={(props) => <Books {...props} searchString={this.state.searchString} /> } 
            />
            <Route path="/books/:search" exact  render={(props) => <Books {...props} searchString={this.state.searchString} /> } 
            />
            <Route path='/booksdetails/:id' exact component={Bookdetails} />
            <Redirect from="/" exact to="/books" />
            <Route render={() => <h1 className='pd10'>Not found</h1>}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;