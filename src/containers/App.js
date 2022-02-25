import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchField from '../components/SearchField';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots';

function App() {
  const [robots, setRobots] = useState([]);
  const [tempArray, setTempArray] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => setRobots(users));
  }, []); // [] will allow useEffect to run only once in render UI other vise app will render keep on

  const onSearchChange = (event) => {
    const inputValue = event.target.value;
    const filterRobotsArray = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setTempArray(filterRobotsArray);
  };

  return !robots.length ? (
    <h1 style={{ textAlign: 'center' }}>Loading...</h1>
  ) : (
    <div className="container">
      <h1>Robofriends</h1>
      <SearchField searchChange={onSearchChange} />
      <hr />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={tempArray.length > 0 ? tempArray : robots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
