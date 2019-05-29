import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments, deleteComment }) {
  const commentList = comments.map((comment, i)=> {
    return (
      <li key={i}>
        <Comment comment={comment} id={i} deleteComment={deleteComment} />
      </li>
    );
  });

  return (
    <ul>{commentList}</ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default Comments;

