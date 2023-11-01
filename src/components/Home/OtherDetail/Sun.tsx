'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import cn from 'classnames';
import styles from './OtherDetail.module.scss';
import { Color } from '@/utils/Color';
import { useTheme } from '@/hooks/useTheme';
import { useMediaQuery } from 'react-responsive';

interface ItemProps {
  icon: string;
  name: string;
  time?: string;
}

export const Sun = ({ icon, name, time }: ItemProps) => {
  const { theme } = useTheme();

  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  return (
    <div className={cn(styles.sun, 'relative flex')}>
      <div className={cn(styles.sunIconWrapper)}>
        <Icon
          icon={icon}
          fontSize={isMobile ? 40 : 70}
          color={Color.Yellow}
          style={{ borderRadius: '100%' }}
        />
      </div>
      <div className={cn('ml-4 flex flex-col md:mt-3 mt-0')}>
        <span
          className={cn(styles.time)}
          style={{ color: theme === 'rwanda' ? Color.Yellow : Color.Black }}
        >
          {time ?? ''}
        </span>
        <span className={cn(styles.name)}>{name}</span>
      </div>
    </div>
  );
};
export default Sun;
