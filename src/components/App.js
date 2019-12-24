import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Nav from './Nav';
import ContentArea from './ContentArea';

const StyledApp = styled.div`
  .Header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  }

  .Nav {
    position: fixed;
    top: 75px;
    left: 0;
    z-index: 1;
    width: 30rem;
    height: 100%;
    background-color: #fff;
  }

  .ContentArea {
    margin-left: 30rem;
    margin-top: 75px;
    padding: 3.5rem;
    min-height: calc(100vh - 80px);
  }
`;

const App = () => {
  return (
    <StyledApp>
      <div className="Header">
        <Header />
      </div>
      <div className="Nav">
        <Nav />
      </div>
      <div className="ContentArea">
        <ContentArea />
      </div>
    </StyledApp>
  );
};

export default App;
