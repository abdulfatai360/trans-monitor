import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  .Header {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  }

  .Nav {
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 1;
    width: 260px;
    height: 100%;
    background-color: #fff;
  }

  .Content {
    margin-left: 260px;
    margin-top: 80px;
    height: 2000px;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <div className="Header">THE HEADER</div>
      <div className="Nav">NAVIGATION</div>
      <div className="Content">MAIN CONTENT</div>
    </StyledApp>
  );
};

export default App;
