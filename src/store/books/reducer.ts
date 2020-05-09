import {
  FETCH_BOOKS,
  BooksActionTypes,
  Book
} from './types'

const initialState: Book[] | null = null;

const booksReducer = (state = initialState, action: BooksActionTypes): Book[] | null => {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  };
};

export default booksReducer;