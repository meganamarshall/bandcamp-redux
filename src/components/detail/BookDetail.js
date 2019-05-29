import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/CreateComment';
import CommentsByIsbn from '../../containers/CommentsByIsbn';

function BookDetail({ isbn }) {
  return (
    <>
      <section>
        <img src={`http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`} />
        {/* <BookReviews isbn={isbn} /> */}
      </section>
      <section>
        <CreateComment isbn={isbn}/>
        <CommentsByIsbn isbn={isbn} /> 
      </section>
    </>
  );
}

BookDetail.propTypes = {
  isbn: PropTypes.string.isRequired
};

export default BookDetail;

