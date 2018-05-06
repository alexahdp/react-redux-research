import Immutable from 'immutable';

export default function (state, action) {
  if (action.type === 'ADD_BOOK_TO_LIST') {
    return state.update('books', books => books.push(Immutable.fromJS(action.payload)));
  }
  else if (action.type === 'REMOVE_BOOK_FROM_LIST') {
    return state.update('books', books => books.filter(book => book.get('_id') !== action.payload.bookId));
  }
  else if (action.type === 'SET_EDIT_BOOK') {
    const editBook = state.get('books').find(book => book.get('_id') === action.payload.bookId);
    return state.set('editBook', editBook);
  }
  else if (action.type === 'UNSET_EDIT_BOOK') {
    return state.set('editBook', null);
  }
  else if (action.type === 'UPDATE_BOOK_IN_LIST') {
    const i = state.get('books').findIndex(book => book.get('_id') === action.payload._id);
    return state.setIn(['books', i], Immutable.fromJS(action.payload));
  }

  if (state) {
    return state;
  }

  const booksJson = window.localStorage.getItem('library');
  return Immutable.fromJS({
    editBook: null,
    books: booksJson ? JSON.parse(booksJson) : [],
  });
}
