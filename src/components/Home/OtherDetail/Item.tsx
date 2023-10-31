'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import cn from 'classnames';
import styles from './OtherDetail.module.scss';
import { Color } from '@/utils/Color';
import { useTheme } from '@/hooks/useTheme';

interface ItemProps {
  icon: string;
  name: string;
  total?: number;
  type?: 'deg' | 'percentage';
}

export const Item = ({ icon, name, total, type = 'percentage' }: ItemProps) => {
  const { theme } = useTheme();

  return (
    <div className={cn(styles.items, 'relative')}>
      <div>
        <Icon icon={icon} fontSize={60} color={Color.Yellow} />
      </div>
      <div className="mt-2">{name}</div>
      <div
        className={cn('absolute flex items-center', styles.percentage)}
        style={{ color: theme === 'rwanda' ? Color.Yellow : Color.Black }}
      >
        <span>{total}</span>
        {type === 'deg' ? (
          <Icon
            icon={
              'streamline:interface-weather-celsius-degrees-temperature-centigrade-celsius-degree-weather'
            }
            fontSize={10}
            className="ml-1"
            style={{ marginTop: '-1px' }}
          />
        ) : (
          '%'
        )}
      </div>
    </div>
  );
};
export default Item;
