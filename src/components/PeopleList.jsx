import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import ProfileCard from './ProfileCard';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const PeopleList = ({ people, fetchData }) =>
  <Form>
    <Button variant="outline-primary" onClick={fetchData}>
      <FontAwesomeIcon icon={faSyncAlt} />
    </Button>
    <Form.Row>
      {people.results.map((person, index) =>
        <Col key={index}>
          {/* <Link to={`/${data.info.page}/profile`}> */}
          {/* {person.name.title} {person.name.first} {person.name.last} */}
          <ProfileCard {...person} />
          {/* </Link> */}
        </Col>
      )}
    </Form.Row>
  </Form>
  ;

export default PeopleList;