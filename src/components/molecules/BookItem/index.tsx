import React, { FC } from 'react';
import BookThumbnail from '../../atoms/BookThumbnail';
import BookInfo from '../../atoms/BookInfo';
import { Book } from '../../../store/books/types';
import styles from './style.module.scss';

type Props = {
  book: Book
};

const BookItem: FC<Props> = ({ book: { link, thumbnail, title, description } }) => {
  return (
    <li className={styles.bookItem}>
      <a className={styles.bookItemLink} href={link ? link : undefined} target="_blank" rel="noopener noreferrer">
        <BookThumbnail thumbnail={thumbnail} />
        <BookInfo title={title} description={description} />
      </a>
    </li>
  );
};

export default BookItem;