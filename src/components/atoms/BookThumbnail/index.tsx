import React, { FC } from 'react';
import styles from './style.module.scss';

type Props = {
  thumbnail: string | null
};

const BookThumbnail: FC<Props> = ({ thumbnail }) => {
  return (
    <figure className={styles.bookThumbnail}>
      {thumbnail && (
        <img className={styles.bookThumbnailImage} src={thumbnail} alt="Book Cover" />
      )}
    </figure>
  );
};

export default BookThumbnail;