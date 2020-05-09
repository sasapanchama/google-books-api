import {
  CHANGE_TERM,
  TermActionTypes,
} from './types';

const initialState: string = '';

const termReducer = (state = initialState, action: TermActionTypes): string => {
  switch (action.type) {
    case CHANGE_TERM:
      return action.payload;
    default:
      return state;
  };
};

export default termReducer;