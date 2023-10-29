'use client';
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import Image from 'next/image';
import cn from 'classnames';
import styles from './Home.module.scss';

export const Vector = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('fixed', styles.vector)}>
      <Image
        src={
          theme === 'rwanda'
            ? '/images/rwanda-vector.svg'
            : '/images/sweden-vector.svg'
        }
        alt="svgs"
        width={2000}
        height={1222}
      />
    </div>
  );
};
export default Vector;
