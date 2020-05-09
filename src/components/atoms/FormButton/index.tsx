import React, { FC } from 'react';
import styles from './style.module.scss';

type Props = {
  onClick: () => void
};

const FormButton: FC<Props> = ({ onClick }) => {
  return (
    <input
      className={styles.formButton}
      type="submit"
      value="検索"
      onClick={(eve) => {
        eve.preventDefault();
        onClick()
      }}
    />
  );
};

export default FormButton;