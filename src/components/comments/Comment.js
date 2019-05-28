import React from 'react';
import PropTypes from 'prop-types';

function Comment({ isbn, comment, deleteComment }) {
  return (
    <>
      <p>{comment}</p>
      <button onClick={deleteComment.bind(null, isbn)}>Delete Comment</button>
    </>
  );
}

Comment.propTypes = {
  isbn: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;
