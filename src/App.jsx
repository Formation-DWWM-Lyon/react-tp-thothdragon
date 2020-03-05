import React from 'react';
import { Container } from 'react-bootstrap';
import DataContainer from './containers/DataContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id(\d+)" component={DataContainer} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
