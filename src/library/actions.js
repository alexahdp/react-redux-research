import { createAction } from 'redux-actions';
import ga from '../helpers/ga';

export const actions = {
  ADD_BOOK: ga(),
  ADD_BOOK_TO_LIST: ga(),
  REMOVE_BOOK: ga(),
  REMOVE_BOOK_FROM_LIST: ga(),
  SET_EDIT_BOOK: ga(),
  UNSET_EDIT_BOOK: ga(),
  UPDATE_BOOK: ga(),
  UPDATE_BOOK_IN_LIST: ga(),
};

export default {
  addBook: createAction(actions.ADD_BOOK),
  setEeditBook: createAction(actions.SET_EDIT_BOOK, bookId => ({ bookId })),
  removeBook: createAction(actions.REMOVE_BOOK, bookId => ({ bookId })),
  unsetEeditBook: createAction(actions.UNSET_EDIT_BOOK),
  updateBook: createAction(actions.UPDATE_BOOK),
};
