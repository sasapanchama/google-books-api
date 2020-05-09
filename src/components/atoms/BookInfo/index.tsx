import React, { FC } from 'react';
import { adjustTextLength } from '../../../services/books';
import styles from './style.module.scss';

type Props = {
  title: string,
  description: string | null,
};

const BookInfo: FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.bookInfo}>
      <div className={styles.bookInfoTitle}>{adjustTextLength(title, 24)}</div>
      {description && (
        <div className={styles.bookInfoDescription}>{adjustTextLength(description, 64)}</div>
      )}
    </div>
  );
};

export default BookInfo;