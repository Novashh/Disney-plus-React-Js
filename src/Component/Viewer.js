import React from "react";
import styled from "styled-components";

function Viewer() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt=""></img>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-pixar.png" alt=""></img>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-marvel.png" alt=""></img>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-starwars.png" alt=""></img>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-national.png" alt=""></img>
      </Wrap>
    </Container>
  );
}

export default Viewer;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 2px solid rgba(240, 240, 240, 0.1);
  box-shadow: 0 0 10px 0px rgba(240, 240, 240, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(240, 240, 240, 0.6);
  }
`;
