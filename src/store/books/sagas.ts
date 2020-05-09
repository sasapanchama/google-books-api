import { call, put } from 'redux-saga/effects';
import { searchBooks } from '../../apis/books';
import { fetchBooks } from './actions';
import { RequestBooks } from './types';

/* 
 * books をリクエストするための saga
 */
export function* sagaRequestBooks(action: RequestBooks) {
  try {
    const term = action.payload;
    const result = yield call(searchBooks, term);
    const newBooks = result.data.items.map((item: any) => {
      const newBook = {
        id: item.id,
        link: item.volumeInfo.previewLink ? item.volumeInfo.previewLink : null,
        thumbnail: item.volumeInfo.imageLinks?.thumbnail ? item.volumeInfo.imageLinks.thumbnail : null,
        title: item.volumeInfo.title,
        description: item.volumeInfo.description ? item.volumeInfo.description : null,
      };
      return newBook;
    });
    yield put(fetchBooks(newBooks));
  } catch (err) {
    console.log(err);
  };
};