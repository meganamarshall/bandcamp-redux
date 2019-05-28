import React from 'react';
import PropTypes from 'prop-types';

function Thumbnail({ isbn }) {
  return (
    <img src={`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}/>
  );
}

Thumbnail.propTypes = {
  isbn: PropTypes.number.isRequired
};

export default Thumbnail;
