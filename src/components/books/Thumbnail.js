import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Thumbnail({ isbn }) {
  return (
    <Link to={`/${isbn}`}>
      <img src={`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}/>
    </Link>
  );
}

Thumbnail.propTypes = {
  isbn: PropTypes.string.isRequired
};

export default Thumbnail;
