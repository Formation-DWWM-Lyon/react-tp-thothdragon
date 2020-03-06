import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PeopleList = ({ people, fetchData }) =>

  <div>
    <Button onClick={fetchData}>
      Actualiser
    </Button>
    <ListGroup>
      {people.results.map((person, index) =>
        <ListGroup.Item>
          {/* <Link to={`/${data.info.page}/profile`}> */}
          {person.name.title} {person.name.first} {person.name.last}
          {/* </Link> */}
        </ListGroup.Item>
      )}
    </ListGroup>
  </div>
  ;

export default PeopleList;