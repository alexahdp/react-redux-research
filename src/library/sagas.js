import { takeEvery, put } from 'redux-saga/effects';

export function* addBook({ payload }) {
  const jsonLibrary = window.localStorage.getItem('library');
  const library = jsonLibrary ? JSON.parse(jsonLibrary) : [];
  const id = `${Date.now()}${Math.round(Math.random() * 10000)}`;
  const newBook = Object.assign({}, payload, { _id: id });
  library.push(newBook);
  window.localStorage.setItem('library', JSON.stringify(library));
  yield put({ type: 'ADD_BOOK_TO_LIST', payload: newBook });
}

export default function* () {
  yield takeEvery('ADD_BOOK', addBook);
}
