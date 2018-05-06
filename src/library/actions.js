import { createAction } from 'redux-actions';

export default {
  // addBook: book => ({ type: 'ADD_BOOK', payload: book }),
  addBook: createAction('ADD_BOOK'),
  setEeditBook: bookId => ({ type: 'SET_EDIT_BOOK', payload: { bookId } }),
  removeBook: bookId => ({ type: 'REMOVE_BOOK', payload: { bookId } }),
  unsetEeditBook: () => ({ type: 'UNSET_EDIT_BOOK' }),
  updateBook: book => ({ type: 'UPDATE_BOOK', payload: book }),
};
