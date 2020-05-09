import React, { FC } from 'react';
import { Props } from './container';
import FormText from '../../atoms/FormText';
import FormButton from '../../atoms/FormButton';
import styles from './style.module.scss';

const Form: FC<Props> = ({ term, changeTerm, requestBooks }) => {
  return (
    <form className={styles.form}>
      <FormText value={term} onChange={changeTerm} />
      <FormButton onClick={requestBooks} />
    </form>
  );
};

export default Form;