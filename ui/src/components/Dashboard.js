import React, { Component } from 'react';
import ResultsList from './ResultsList';
import SearchBar from './SearchBar';
import '../App.css';
import axios from 'axios';

const {
  REACT_APP_SERVER_URL,
} = process.env;


class App extends Component {
  state = {
    titles: []
  };

  async search({ name }) {
    const { data: titles } = await this.searchTitles({ name });
    this.setState({ titles });
  }

  searchTitles = async ({ name }) => {
    return axios.get(`${REACT_APP_SERVER_URL}/titles/${name}`);
  };

  render() {
    return (
      <div className="App">
        <SearchBar search={this.search.bind(this)}/>
        <ResultsList titles={this.state.titles}/>
    </div>
  );
  }
}

export default App;
