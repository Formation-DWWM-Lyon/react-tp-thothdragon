import React from 'react';
import { Comment } from '.';
import data from '../data';

const CommentList = ({ personIndex }) => {
  return (<ul>
    {data[personIndex].comments.map((comment, index) =>
      <li key={index}>
        <Comment {...comment} />
      </li>
    )}
  </ul>)
}

export default CommentList;