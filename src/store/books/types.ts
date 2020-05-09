export const FETCH_BOOKS = 'FETCH_BOOKS';
export const REQUEST_BOOKS = 'REQUEST_BOOKS';

/* 
 * Book の型
 */
export interface Book {
  id: string,
  link: string | null,
  thumbnail: string | null,
  title: string,
  description: string | null,
};

/* 
 * fetchBooks の返り値用の型
 */
interface FetchBooks {
  type: typeof FETCH_BOOKS,
  payload: Book[]
};

/* 
 * requestBooks の返り値用の型
 * sagas でも使用するのため単体でエクスポート
 */
export interface RequestBooks {
  type: typeof REQUEST_BOOKS,
  payload: string
};

/* 
 * action 全体の返り値用の型
 */
export type BooksActionTypes = FetchBooks | RequestBooks;


