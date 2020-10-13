import React from 'react';
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import styled from 'styled-components'
import './App.css';

const BodyConttent = styled.div`
  &>*, ::after, ::before {
    box-sizing: inherit;
  }
`;

function App() {
  return (
      <BodyConttent>
        <Header />
        <Section/>
      </BodyConttent>
  );
}

export default App;
