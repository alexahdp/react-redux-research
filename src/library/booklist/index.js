// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import actionCreators from '../actions';

const app = ({books, removeBook, setEeditBook}) => ( // eslint-disable-line
  <ul className="list-group">
    {books.size === 0 ?
      <h3>Books list is empty</h3>
      :
      books.map(book => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={book.get('_id')}
        >
          <span>{book.get('title')}({book.get('author')})</span>
          <span className="text-right">
            <button
              onClick={() => setEeditBook(book.get('_id'))}
              className="badge badge-primary badge-pill book-close-btn"
            >
              edit
            </button>
            <button
              onClick={() => removeBook(book.get('_id'))}
              className="badge badge-primary badge-pill book-close-btn"
            >
              remove
            </button>
          </span>
        </li>
      ))
    }
  </ul>
);

export default (compose(connect(
  state => ({
    books: state.getIn(['library', 'books']),
  }),
  {
    removeBook: actionCreators.removeBook,
    setEeditBook: actionCreators.setEeditBook,
  },
))(app));
