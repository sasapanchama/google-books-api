import { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { Book } from '../../../store/books/types';
import BookItems from './presentation';

export type Props = {
  books: Book[] | null
};

const mapStateToProps = (state: RootState) => ({
  books: state.books
});

export default connect(mapStateToProps, null)(BookItems) as FC<Props>;