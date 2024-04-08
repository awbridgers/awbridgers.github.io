import React, {useState} from 'react';
import styled from 'styled-components';
import {repos} from './repos';
import './App.css';
import Card from './components/card';
import ImageView from './components/imageView';

function App() {
  const [showImage, setShowImage] = useState<string | null>(null);
  return (
    <>
      {showImage && (
        <StyledImage onClick  ={()=>setShowImage(null)}>
          <ImageView image={showImage} back={() => setShowImage(null)} />
        </StyledImage>
      )}
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
              onClick={() => setShowImage(repo.image)}
            />
          ))}
        </div>
      </StyledDiv>
    </>
  );
}
const StyledDiv = styled.div`
  min-height: 100vh;
  min-width: 330px;
  padding-bottom: 50px;
  position: relative;
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

const StyledImage = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export default App;
