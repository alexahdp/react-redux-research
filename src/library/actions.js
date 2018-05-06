import { createAction } from 'redux-actions';

export const actions = {
  ADD_BOOK: Symbol('ADD_BOOK'),
  ADD_BOOK_TO_LIST: Symbol('ADD_BOOK_TO_LIST'),
  REMOVE_BOOK: Symbol('REMOVE_BOOK'),
  REMOVE_BOOK_FROM_LIST: Symbol('REMOVE_BOOK_FROM_LIST'),
  SET_EDIT_BOOK: Symbol('SET_EDIT_BOOK'),
  UNSET_EDIT_BOOK: Symbol('UNSET_EDIT_BOOK'),
  UPDATE_BOOK: Symbol('UPDATE_BOOK'),
  UPDATE_BOOK_IN_LIST: Symbol('UPDATE_BOOK_IN_LIST'),
};

export default {
  // addBook: book => ({ type: 'ADD_BOOK', payload: book }),
  // setEeditBook: bookId => ({ type: 'SET_EDIT_BOOK', payload: { bookId } }),
  // removeBook: bookId => ({ type: 'REMOVE_BOOK', payload: { bookId } }),
  // unsetEeditBook: () => ({ type: 'UNSET_EDIT_BOOK' }),
  // updateBook: book => ({ type: 'UPDATE_BOOK', payload: book }),
  addBook: createAction(actions.ADD_BOOK),
  setEeditBook: createAction(actions.SET_EDIT_BOOK, bookId => ({ bookId })),
  removeBook: createAction(actions.REMOVE_BOOK, bookId => ({ bookId })),
  unsetEeditBook: createAction(actions.UNSET_EDIT_BOOK),
  updateBook: createAction(actions.UPDATE_BOOK),
};
