/* eslint-disable arrow-body-style */
import React from 'react';
import Welcome from '../../welcome/Welcome';
import styles from './HomeWrapper.module.scss';

const HomeWrapper = () => {
  return (
    <div className={styles.container}>
      <Welcome />
    </div>
  );
};

export default HomeWrapper;
