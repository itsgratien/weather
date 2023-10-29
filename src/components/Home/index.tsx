'use client';
import React from 'react';
import cn from 'classnames';
import styles from './Home.module.scss';
import { Header } from './Header';
import { Vector } from './Vector';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Vector />
      </main>
    </>
  );
};
export default Home;
