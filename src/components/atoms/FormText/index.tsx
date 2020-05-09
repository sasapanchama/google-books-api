import React, { FC } from 'react';
import styles from './style.module.scss';

type Props = {
  value: string,
  onChange: (input: string) => void
};

const FormText: FC<Props> = ({ value, onChange }) => {
  return (
    <input
      className={styles.formText}
      type="text"
      value={value}
      onChange={(eve) => onChange(eve.target.value)}
    />
  );
};

export default FormText;