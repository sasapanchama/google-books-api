import { takeEvery } from 'redux-saga/effects';
import { REQUEST_BOOKS } from './books/types';
import { sagaRequestBooks } from './books/sagas';

/* 
 * saga が統括されている関数
 */
function* rootSaga() {
  yield takeEvery(REQUEST_BOOKS, sagaRequestBooks);
};

export default rootSaga;