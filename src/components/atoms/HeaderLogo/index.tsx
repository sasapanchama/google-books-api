import React, { FC } from 'react';
import styles from './style.module.scss';

type Props = {
  title: string
}

const HeaderLogo: FC<Props> = ({ title }) => {
  return (
  <p className={styles.headerLogo}>{title}</p>
  )
};

export default HeaderLogo;