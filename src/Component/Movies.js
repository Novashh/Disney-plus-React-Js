import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        <Wrap>
          <img src="/images/burrow.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/garfield.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/incredebles.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/incredebles2.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/bao.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/flacon.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/mona.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/micky.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/raya.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/simpsons.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/soul.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/tangled.jpg" alt=""></img>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin-top: 30px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  margin-top: 20px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(240, 240, 240, 0.1);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border: 2px solid rgba(240, 240, 240, 0.9);
  }
`;
