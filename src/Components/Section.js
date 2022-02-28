import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImage,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Container bgImage={backgroundImage}>
      <ItemText className="animate">
        <h1 className="h">{title}</h1>
        <Fade bottom>
          <p>{description}</p>
        </Fade>
      </ItemText>
      <Buttons>
        <Fade bottom>
          <ButtonGroup className="animate">
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  @media (min-width: 800px) {
    h1 {
      animation: slideInOut 7s linear infinite;
    }

    @keyframes slideInOut {
      from {
        transform: translateX(400%);
      }

      to {
        transform: translateX(-400%);
      }
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.875em;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  width: 256px;
  height: 40px;
  color: #fff;
  background: rgba(23, 26, 32, 0.8);
  border-radius: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;
  margin: 0.5em;

  @media (max-width: 600) {
    width: 200px;
    height: 30px;
    font-size: 0.5rem;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
`;

const DownArrow = styled.img`
  margin-top: 1.25em;
  height: 2.5em;
  animation: animateDown 0.5s infinite;
`;

const Buttons = styled.div``;
