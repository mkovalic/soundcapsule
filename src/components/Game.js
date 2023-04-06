import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Game.css';

const Game = () => {
  const [phase, setPhase] = useState('writing');
  
  const renderWritingPhase = () => {
    // TODO: Implement the writing phase
    return (
      <div>
        <h2>Writing Phase</h2>
        {/* Writing phase content */}
      </div>
    );
  };

  const renderGuessingPhase = () => {
    // TODO: Implement the guessing phase
    return (
      <div>
        <h2>Guessing Phase</h2>
        {/* Guessing phase content */}
      </div>
    );
  };

  return (
    <Container className="game">
      {phase === 'writing' ? renderWritingPhase() : renderGuessingPhase()}
    </Container>
  );
};

export default Game;
