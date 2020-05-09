import {
  FETCH_BOOKS,
  REQUEST_BOOKS,
  BooksActionTypes,
  Book
} from './types';

/* 
 * books を更新するための action
 */
export const fetchBooks = (books: Book[]): BooksActionTypes => {
  return {
    type: FETCH_BOOKS,
    payload: books
  };
};

/* 
 * books をリクエストするための action
 */
export const requestBooks = (term: string): BooksActionTypes => {
  return {
    type: REQUEST_BOOKS,
    payload: term
  };
};