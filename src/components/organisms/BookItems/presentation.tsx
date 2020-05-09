import React, { FC } from 'react';
import { Props } from './container';
import BookItem from '../../molecules/BookItem';
import styles from './style.module.scss';

const BookItems: FC<Props> = ({ books }) => {
  return (
    <ul className={styles.bookItems}>
      {books && (
        books?.map((book) => (
          <BookItem key={book.id} book={book} />
        ))
      )}
    </ul>
  );
};

export default BookItems;