import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './GameCreation.css';


const GameCreation = () => {
    const jumbotronStyle = {
        backgroundColor: '#f0f5ff',
        padding: '4rem 2rem',
        marginBottom: '2rem',
        borderRadius: '0.3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      };
      
  const [timeFrame, setTimeFrame] = useState('6 months');
  const [invitationLink, setInvitationLink] = useState('');

  const createGame = () => {
    // Generate a unique game ID (you can replace this with a server-generated ID later)
    const gameId = Math.random().toString(36).substr(2, 9);

    // Create the invitation link
    const link = `${window.location.origin}/join/${gameId}?timeFrame=${timeFrame}`;
    setInvitationLink(link);

    // TODO: Implement the server-side logic for creating the game and storing the settings
  };

  return (
    <Container className = "game-creation">
    <Container style ={jumbotronStyle}>
      <h2>Create Game</h2>
      <Form>
        <Form.Group controlId="timeFrame">
          <Form.Label>Time Frame</Form.Label>
          <Form.Control
            as="select"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
          >
            <option>1 month</option>
            <option>6 months</option>
            <option>All time</option>
          </Form.Control>
        </Form.Group>
        <Button onClick={createGame}>Create Game</Button>
      </Form>
      {invitationLink && (
        <>
          <h3>Invitation Link</h3>
          <p>{invitationLink}</p>
        </>
      )}
    </Container>
    </Container>
  );
};

export default GameCreation;
