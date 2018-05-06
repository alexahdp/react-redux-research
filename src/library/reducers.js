import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { actions } from './actions';

const {
  ADD_BOOK_TO_LIST,
  REMOVE_BOOK_FROM_LIST,
  SET_EDIT_BOOK,
  UNSET_EDIT_BOOK,
  UPDATE_BOOK_IN_LIST,
} = actions;

export default handleActions(
  {
    [ADD_BOOK_TO_LIST](state, action) {
      return state.update('books', books => books.push(Immutable.fromJS(action.payload)));
    },
    [REMOVE_BOOK_FROM_LIST](state, action) {
      return state.update('books', books => books.filter(book => book.get('_id') !== action.payload.bookId));
    },
    [SET_EDIT_BOOK](state, action) {
      const editBook = state.get('books').find(book => book.get('_id') === action.payload.bookId);
      return state.set('editBook', editBook);
    },
    [UNSET_EDIT_BOOK](state) {
      return state.set('editBook', null);
    },
    [UPDATE_BOOK_IN_LIST](state, action) {
      const i = state.get('books').findIndex(book => book.get('_id') === action.payload._id);
      return state.setIn(['books', i], Immutable.fromJS(action.payload));
    },
  },
  Immutable.fromJS({
    editBook: null,
    books: window.localStorage.getItem('library') ? JSON.parse(window.localStorage.getItem('library')) : [],
  }),
);
