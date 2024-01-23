import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Logo from './logo.svg';
import {repos} from './repos';
import './App.css';
import Card from './components/card';

function App() {
  return (
    <StyledDiv>
      <div className="header">Adam Bridgers</div>
      <div className="sep"></div>
      <div className="subHeader">Projects</div>
      <div className="deck">
        {repos.map((repo) => (
          <Card
            title={repo.title}
            repoURL={repo.repoURL}
            pagesURL={repo.pagesURL}
            image={repo.image}
            desc={repo.description}
          />
        ))}
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  min-height: 100vh;
  min-width: 330px;
  padding-bottom: 50px;
  .header {
    font-size: 30px;
    padding: 20px 0px;
    color: white;
    text-align: center;
  }
  .subHeader {
    font-size: 25px;
    color: white;
    text-align: center;
    margin: 40px 0px;
  }
  .sep {
    border: 2px solid grey;
  }
  .deck {
    display: flex;
    flex-flow: row wrap;
    row-gap: 50px;
    width: 90%;
    margin: auto;
    align-items: center;
    justify-content: space-around;
  }
`;

export default App;
