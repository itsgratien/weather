'use client';
import React from 'react';
import cn from 'classnames';
import styles from './Home.module.scss';
import { Header } from './Header';
import { Vector } from './Vector';
import { Icon } from '@iconify/react';
import { useTheme } from '@/hooks/useTheme';
import { Color } from '@/utils/Color';
import Image from 'next/image';
import { OtherDetail } from './OtherDetail';

export const Home = () => {
  const { theme, data } = useTheme();

  return (
    <>
      <Header />
      <main>
        <div className={cn('relative flex', styles.weatherWrapper)}>
          <div className={cn('relative flex', styles.windSpeedWrapper)}>
            <div className={cn('relative', styles.wind)}>
              <Icon
                icon={'wi:day-rain-wind'}
                fontSize={400}
                color={Color.Yellow}
              />
              <div className={cn('relative', styles.text)}>Weather</div>
              <div className={cn('absolute top-0 flex', styles.stat)}>
                <div className={cn(styles.percentage, 'flex items-center')}>
                  {data?.weather[0].description}
                </div>
              </div>
            </div>
            <div
              className={cn('flex items-center absolute right-0', styles.speed)}
            >
              <Image
                src={'/images/speed.svg'}
                width={50}
                height={50}
                alt="speed"
              />

              <span
                style={{
                  color: theme === 'rwanda' ? Color.Yellow : Color.Black,
                  fontSize: '18px',
                }}
              >
                {data?.wind.speed ?? ''}
              </span>
            </div>
          </div>
          <OtherDetail />
        </div>
        <Vector />
      </main>
    </>
  );
};
export default Home;
