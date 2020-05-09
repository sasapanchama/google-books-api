import { combineReducers } from 'redux';
import { Book } from './books/types';
import booksReducer from './books/reducer';
import termReducer from './term/reducer';

/* 
 * reducer が統括されている変数
 */
export const rootReducer = combineReducers({
  books: booksReducer,
  term: termReducer,
});

/* 
 * state が統括されている型
 */
export interface RootState {
  books: Book[] | null,
  term: string,
};