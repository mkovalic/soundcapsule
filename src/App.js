//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import GameCreation from './components/GameCreation';
import LandingPage from './components/LandingPage';
import JoinGame from './components/JoinGame';
import Game from './components/Game';
import Results from './components/Results';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<GameCreation />} />
          <Route path="/join/:gameId" element={<JoinGame />} />
          <Route path="/game/:gameId" element={<Game />} />
          <Route path="/results" element={<Results player1={{name: 'Player 1', score: 2, results: [true, false, true]}} player2={{name: 'Player 2', score: 1, results: [false, true, false]}} />} />
          {/* Add more routes as you create new components */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

