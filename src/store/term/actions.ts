import {
  CHANGE_TERM,
  TermActionTypes
} from './types';

/* 
 * term を変更するための action
 */
export const changeTerm = (inputText: string): TermActionTypes => {
  return {
    type: CHANGE_TERM,
    payload: inputText
  };
};