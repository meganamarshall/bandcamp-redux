import React from 'react';
import PropTypes from 'prop-types';

function BookDetail({ isbn }) {
  return (
    <>
      <section>
        <img src={`http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`} />
        {/* <BookReviews isbn={isbn} /> */}
      </section>
      <section>
        {/* <CommentForm isbn={isbn} />
        <Comments isbn={isbn} /> */}
      </section>
    </>
  );
}

BookDetail.propTypes = {
  isbn: PropTypes.string.isRequired
};

export default BookDetail;

