import React, { FC } from 'react';
import HeaderLogo from '../../atoms/HeaderLogo';
import styles from './style.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo title="Google Books API" />
    </header>
  );
};

export default Header;