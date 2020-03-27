import React from 'react';
import './Home.css';
import GameList from '../GameList/GameList';
import 'materialize-css/dist/css/materialize.min.css';

const Home = () => {
  return (
    <>
      <div className="App blue lighten-2">
        <h2>Welcome to Checkpoint 2</h2>
        <hr />
      </div>      
      <GameList />
    </>
  );
}

export default Home;
