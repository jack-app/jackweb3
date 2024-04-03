import React from 'react';
import styles from './index.module.scss';

type Props = {
  text: string;
};

export const Heading2: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.heading2}>&#9839;{text}</div>
  );
};