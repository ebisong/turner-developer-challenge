import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const {
  REACT_APP_SERVER_URL,
} = process.env;

class DetailsPage extends Component {
  state = {
    titles: []
  };

  async componentDidMount() {
    const titles = await this.searchTitles({ name: 'Four Brothers'});
    this.setState({
      titles
    });
    console.log(this.state.titles);
  }

  searchTitles = async ({ name }) => {
    return axios.get(`${REACT_APP_SERVER_URL}/titles/${name}`);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default DetailsPage;
