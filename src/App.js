import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import pexel from './assets/pexel.jpg';

const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default App;

const Container = styled.div`
  height: 100vh;
  background-image: url({pexel});
`;
