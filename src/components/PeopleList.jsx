import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import ProfileCard from './ProfileCard';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

const PeopleList = ({ people, methods, page }) =>
  <div>
    <Form>
      <Button variant="outline-primary" onClick={() => methods.fetchData()}>
        <FontAwesomeIcon icon={faSyncAlt} />
      </Button>
      <Form.Row>
        {people.map((person, index) =>
          <Col lg="4" key={index}>
            <Link to={`/person/${index}`}>
              <ProfileCard {...person} />
            </Link>
          </Col>
        )}
      </Form.Row>
    </Form>
    <Pagination>
      <Pagination.Prev onClick={methods.prevPage} disabled={page === 1} />
      <Pagination.Next onClick={methods.nextPage} />
    </Pagination>
  </div>
  ;

export default PeopleList;