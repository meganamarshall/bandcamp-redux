import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isbn: PropTypes.string.isRequired
  };

  state = {
    comment: '',
    isbn: this.props.isbn
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.isbn, this.state.comment);
    this.setState({ comment: '' });
  }

  updateComment = ({ target }) => {
    this.setState({ comment: target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.comment} onChange={this.updateComment} />
        <button>Submit</button>
      </form>
    );
  }
}
