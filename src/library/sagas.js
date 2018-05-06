import { takeEvery, put } from 'redux-saga/effects';
import { actions } from './actions';

const {
  ADD_BOOK,
  ADD_BOOK_TO_LIST,
  REMOVE_BOOK,
  REMOVE_BOOK_FROM_LIST,
  UNSET_EDIT_BOOK,
  UPDATE_BOOK,
  UPDATE_BOOK_IN_LIST,
} = actions;


export function* addBook({ payload }) {
  const jsonLibrary = window.localStorage.getItem('library');
  const library = jsonLibrary ? JSON.parse(jsonLibrary) : [];
  const id = `${Date.now()}${Math.round(Math.random() * 10000)}`;
  const newBook = Object.assign({}, payload, { _id: id });
  library.push(newBook);
  window.localStorage.setItem('library', JSON.stringify(library));
  yield put({ type: ADD_BOOK_TO_LIST, payload: newBook });
}

export function* removeBook({ payload }) {
  const jsonLibrary = window.localStorage.getItem('library');
  const library = jsonLibrary ? JSON.parse(jsonLibrary) : [];
  const newLibrary = library.filter(book => book._id !== payload.bookId);
  window.localStorage.setItem('library', JSON.stringify(newLibrary));
  yield put({ type: REMOVE_BOOK_FROM_LIST, payload });
}

export function* updateBook({ payload }) {
  const jsonLibrary = window.localStorage.getItem('library');
  const library = jsonLibrary ? JSON.parse(jsonLibrary) : [];
  library.forEach((book) => {
    if (book._id === payload._id) {
      Object.assign(book, payload);
    }
  });
  window.localStorage.setItem('library', JSON.stringify(library));
  yield put({ type: UPDATE_BOOK_IN_LIST, payload });
  yield put({ type: UNSET_EDIT_BOOK });
}

export default function* () {
  yield takeEvery(ADD_BOOK, addBook);
  yield takeEvery(REMOVE_BOOK, removeBook);
  yield takeEvery(UPDATE_BOOK, updateBook);
}
