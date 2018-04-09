// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import BookList from './booklist';
import Form from './forms';

const app = ({ books, editBook }) => ( // eslint-disable-line
  <div className="row">
    <div className="col-md-6">
      <BookList books={books} />
    </div>
    <div className="col-md-6">
      <Form editBook={editBook} />
    </div>
  </div>
);

export default (compose(connect(state => ({
  books: state.getIn(['library', 'books']),
  editBook: state.getIn(['library', 'editBook']),
})))(app));
