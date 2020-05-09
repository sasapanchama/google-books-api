import { FC } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { requestBooks } from '../../../store/books/actions';
import { changeTerm } from '../../../store/term/actions';
import Form from './presentation';

export type Props = {
  term: string,
  changeTerm: (input: string) => void,
  requestBooks: () => void
};

const mapStateToProps = (state: RootState) => ({
  term: state.term
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeTerm: (input: string) => { dispatch(changeTerm(input)) },
  requestBooks: (input: string) => { dispatch(requestBooks(input)) },
});

const mergeProps = (stateProps: ReturnType<typeof mapStateToProps>, dispatchProps: ReturnType<typeof mapDispatchToProps>) => ({
  ...stateProps,
  ...dispatchProps,
  requestBooks: () => dispatchProps.requestBooks(stateProps.term)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Form) as FC<Props>;