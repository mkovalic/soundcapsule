//import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './JoinGame.css';

const JoinGame = () => {
  const { gameId } = useParams();
  const timeFrame = new URLSearchParams(window.location.search).get('timeFrame');

  const joinGame = () => {
    // TODO: Implement the server-side logic for joining the game
  };

  return (
    <Container className="join-game">
      <Container style={jumbotronStyle}>
        <h2>Join Game</h2>
        <p>Game ID: {gameId}</p>
        <p>Time Frame: {timeFrame}</p>
        <Form>
          <Button onClick={joinGame}>Join Game</Button>
        </Form>
      </Container>
    </Container>
  );
};

const jumbotronStyle = {
  backgroundColor: '#f0f5ff',
  padding: '4rem 2rem',
  marginBottom: '2rem',
  borderRadius: '0.3rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

export default JoinGame;
