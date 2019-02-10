import React from 'react';
import GlobalStyle from './styles/global';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Player from './Components/Player';

import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </>
);

export default App;
