import styled from 'styled-components';

type Props = {
  title: string;
  repoURL: string;
  pagesURL: string;
  image: string;
  desc: string;
};
const Card = ({title, repoURL, pagesURL, image, desc}: Props) => (
  <StyledCard>
    <div className="imageContainer">
      <img className="image" src={image} alt={title} />
    </div>
    <div className = 'body'>
      <div className = 'title'>{title}</div>
      <div className = 'desc'>{desc}</div>
      <div className = 'links'>
        <Button onClick = {()=>window.open(pagesURL)}>Demo</Button>
        <Button onClick = {()=>window.open(repoURL)}>Repo</Button>
      </div>
    </div>
  </StyledCard>
);
const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 16px;
  background-color: transparent;
  font-size: 20px;
  margin: 1px;
  //border: 2px solid black;
  &:hover{
    background-color: #827655;
  }

`

const StyledCard = styled.div`
  height: 400px;
  padding: 5px;
  margin: 5px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #c2b280;
  border-radius: 8px;
  .image {
    width: 100%;
  }
  .imageContainer{
    width:100%;
    font-size: 0px;
  }
  .body{
    display: flex;
    flex-grow:1;
    flex-direction: column;
    margin: 0px 20px;
    align-items: center;
    justify-content: space-between;
  }
  .title{
    font-size: 25px;
  }
`;

export default Card;
