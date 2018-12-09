import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderGoodreads from './components/Appbar/Header'
import Books from './containers/Books/Books'
import Bookdetails from './containers/Books/Bookdetails'
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
            <Route path="/bookdetails/:id" component={Bookdetails} />
            <Route path="/" exact render={(props) => <Books {...props} searchString={this.state.searchString} /> } 
            />
            <Route path="*" component={()=>(<div className='pd10'>404 NOT FOUND</div>)} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;