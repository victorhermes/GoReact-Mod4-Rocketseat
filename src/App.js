import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import './config/reactotron';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Player from './Components/Player';
import { Wrapper, Container, Content } from './styles/components';
import store from './store';
import Routes from './routes';

const App = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  </>
);

export default App;
