export const CHANGE_TERM = 'CHANGE_TERM';

/* 
 * changeTerm の返り値用の型
 */
interface ChangeTerm {
  type: typeof CHANGE_TERM,
  payload: string
};

/* 
 * action 全体の返り値用の型
 */
export type TermActionTypes = ChangeTerm;