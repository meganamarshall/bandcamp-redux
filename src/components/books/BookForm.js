import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class BookForm extends PureComponent {
static propTypes = {
  onSubmit: PropTypes.func.isRequired
}

state = {
  isbn: ''
}

handleSubmit = event => {
  event.preventDefault();

  const { isbn } = this.state;
  this.props.onSubmit(isbn);
  this.setState({ isbn: '' });
}

updateIsbn = ({ target }) => {
  this.setState({ isbn: target.value });
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.isbn} onChange={this.updateIsbn} />
      <button>Submit</button>
    </form>
  );
}

}
