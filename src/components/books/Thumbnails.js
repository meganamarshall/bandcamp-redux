import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

function Thumbnails({ isbns }) {
  const bookList = isbns.map(isbn => {
    return (
      <li key={isbn}>
        <Thumbnail isbn={isbn} />
      </li>
    );
  });

  return (
    <ul>{bookList}</ul>
  );
}


Thumbnails.propTypes = {
  isbns: PropTypes.array.isRequired
};

export default Thumbnails;
