import React from 'react';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { ListGroup } from 'react-bootstrap';
// import LinkContainer from '../containers/LinkContainer';

const ProfileCard = ({ name, picture, gender, location, dob, registered }) =>
  <Card className="text-center" border="light">
    <Card.Body>
      <Card.Header>
        <Image src={picture.large} roundedCircle />
        <Card.Title>
          {name.title} {name.first} {name.last}
        </Card.Title>
      </Card.Header>
      <ListGroup>
        <ListGroup.Item>
          {dob.age} ans
        </ListGroup.Item>
        <ListGroup.Item>
          <FontAwesomeIcon icon={gender === 'male' ? faMars : faVenus} />
        </ListGroup.Item>
        <ListGroup.Item>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          {' '}
          {location.city}
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        Membre depuis le {new Date(registered.date).toLocaleDateString('fr-FR')}
      </Card.Footer>
    </Card.Body>
  </Card >
  ;

export default ProfileCard;