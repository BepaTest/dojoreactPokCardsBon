import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleChange = (e) => {
    this.setState({ input : e.target.value })
    const { getSearch } = this.props
    getSearch( e.target.value )
  }

  render() {
    const { input } = this.state
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={input} />
      </div>
    );
  }
}

export default Search;