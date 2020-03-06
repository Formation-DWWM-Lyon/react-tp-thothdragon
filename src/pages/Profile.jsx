import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ProfileCard, CommentList, CommentForm } from '../components';
import { Button } from 'react-bootstrap';

const Profile = ({ people, match }) => {
  const { id } = match.params;
  const person = people[id];

  return (
    <div>
      <Link to="/">
        <Button>Retour</Button>
      </Link>
      <div className="profile">
        <ProfileCard {...person} />
        <div>
          Info complémentaire...
          <CommentList personIndex={id} />
          <CommentForm />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Profile);