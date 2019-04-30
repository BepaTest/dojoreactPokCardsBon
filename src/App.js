import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  getSearch = (value) => {
    this.setState({ search : value })
  }

  render() {
    const { search } = this.state
    return (
      <div className='App'>
      <Search getSearch={this.getSearch}/>
      <Gallery search={search}/>
      </div >
     );
  }
}

export default App;

