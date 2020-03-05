import React from 'react';
import DataContainer from './containers/DataContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Face... Palm !</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id(\d+)" component={DataContainer} />
          <Route exact path="/:id(\d+)/profile" component={DataContainer} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
