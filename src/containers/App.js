import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchField from '../components/SearchField';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      robots: [],
      searchValue: '',
      tempArray: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    const { robots } = this.state;
    const inputValue = event.target.value;
    const filterRobotsArray = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    this.setState({
      tempArray: filterRobotsArray,
    });
  };

  render() {
    const { robots, tempArray } = this.state;
    return !robots.length ? (
      <h1 style={{ textAlign: 'center' }}>Loading...</h1>
    ) : (
      <div className="container">
        <h1>Robofriends</h1>
        <SearchField searchChange={this.onSearchChange} />
        <hr />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={tempArray.length > 0 ? tempArray : robots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
