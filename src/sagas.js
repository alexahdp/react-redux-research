import { takeLatest, fork } from 'redux-saga/effects';
import librarySagas from './library/sagas';

function* mySaga() {
  yield fork(librarySagas);
  yield takeLatest('USER_FETCH_REQUESTED', () => true);
}

export default mySaga;
