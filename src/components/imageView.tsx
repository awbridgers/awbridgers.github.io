import styled from 'styled-components';
import {FaX} from 'react-icons/fa6';

type Props = {
  image: string;
  back: () => void;
};

const ImageView = ({image, back}: Props) => {
  return (
    <Styled onClick = {(e)=>e.stopPropagation()}>
      <div className="exit">
        <FaX color={'white'} size={30} onClick = {back} />
      </div>
      <div className="imageContainer">
        <img className="image" src={image} alt={''} />
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  position: relative;
  width: 65%;
  z-index: 2;
  .exit {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    cursor: pointer
  }
  .image {
    width: 100%;
  }
`;

export default ImageView;
