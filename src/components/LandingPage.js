//import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../LandingPage.css';

const LandingPage = () => {
  const jumbotronStyle = {
    backgroundColor: '#f0f5ff',
    padding: '4rem 2rem',
    marginBottom: '2rem',
    borderRadius: '0.3rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    marginTop: '1.5rem',
  };

  return (
    <Container className="landing-page">
      <Container style={jumbotronStyle}>
        <h1>SoundCapsule</h1>
        <p>
          Associate a memory or situation with a song and have your friend guess
          which song you were thinking of!
        </p>
        <p>
          <Link to="/create">
            <Button variant="primary" style={buttonStyle}>Create Game</Button>
          </Link>
        </p>
      </Container>
    </Container>
  );
};

export default LandingPage;
