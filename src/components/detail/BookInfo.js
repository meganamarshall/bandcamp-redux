import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getBookDetails from '../../services/getBookDetails';

export default class BookInfo extends PureComponent {
  static propTypes = {
    isbn: PropTypes.string.isRequired
  };

  state = {
    title: '',
    authors: [],
    description: ''
  }

  componentDidMount() {
    getBookDetails(this.props.isbn)
      .then(results => {
        this.setState({ title: results.title, authors: results.authors, description: results.description });
      });
  }
  render() {
    const authorList = this.state.authors.map(author => {
      return <h4 key={author}>{author}</h4>;
    });
    const { title, description } = this.state;
    return (
      <>
      <h2>{title}</h2>
      <h3>Authors:</h3>
      <section>{authorList}</section>
      <p>{description}</p>
    </>
    );
  }
    
} 



