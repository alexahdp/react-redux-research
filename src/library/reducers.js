import Immutable from 'immutable';

export default function (state, action) {
  if (action.type === 'ADD_BOOK') {
    const id = `${Date.now()}${Math.round(Math.random() * 10000)}`;
    return state.update('books', books => books.push(Immutable.fromJS(Object.assign({}, action.payload, { _id: id }))));
  } else if (action.type === 'REMOVE_BOOK') {
    return state.update('books', books => books.filter(book => book.get('_id') !== action.payload.bookId));
  } else if (action.type === 'SET_EDIT_BOOK') {
    const editBook = state.get('books').find(book => book.get('_id') === action.payload.bookId);
    return state.set('editBook', editBook);
  } else if (action.type === 'UNSET_EDIT_BOOK') {
    return state.set('editBook', null);
  } else if (action.type === 'UPDATE_BOOK') {
    const i = state.get('books').findIndex(book => book.get('_id') === action.payload._id);
    return state.setIn(['books', i], Immutable.fromJS(action.payload));
  }

  return state || Immutable.fromJS({
    editBook: null,
    books: [{
      _id: 1,
      author: 'aaa',
      title: 'bbb',
      pages: 100,
    }],
  });
}
