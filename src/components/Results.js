//import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './Results.css';

const Results = ({ player1, player2 }) => {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    // TODO: Implement play again logic
    navigate('/');
  };

  const renderResultBoxes = (results) => {
    return (
      <div className="result-boxes">
        {results.map((correct, index) => (
          <div key={index} className={`result-box ${correct ? 'correct' : 'incorrect'}`}>
            {correct ? <FaCheck /> : <FaTimes />}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container className="results">
      <h2>Game Results</h2>
      <div>
        <h4>{player1.name}</h4>
        {renderResultBoxes(player1.results)}
        <p>Score: {player1.score}</p>
      </div>
      <div>
        <h4>{player2.name}</h4>
        {renderResultBoxes(player2.results)}
        <p>Score: {player2.score}</p>
      </div>
      <Button onClick={handlePlayAgain}>Play Again</Button>
    </Container>
  );
};

export default Results;
