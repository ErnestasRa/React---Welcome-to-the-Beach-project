import React from 'react';
import './styles/App.scss';
import Header from './components/header'
import UpperSection from './components/upper-section';
import MiddleSection from './components/middle-section';
import LowerSection from './components/lower-section';
import Container from './components/container';

const App:React.FC = () => {
  return (
    <>
      <Container>
      <Header />
      <UpperSection />
      <MiddleSection />
      <LowerSection />
      </Container> 
    </>
  )
}

export default App;
