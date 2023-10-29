'use client';
import React from 'react';
import cn from 'classnames';
import styles from './Home.module.scss';
import { Dropdown } from 'antd';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useTheme } from '@/hooks/useTheme';
import { Country, RwandaCity, SwedenCity } from '@/utils/Enum';

export const Header = () => {
  const { toggleTheme, city, toggleCity, theme } = useTheme();

  const country = [
    {
      country: Country.Rwanda,
      flag: '/images/rwanda.svg',
      cities: [
        { name: RwandaCity.Kigali, key: RwandaCity.Kigali },
        { name: RwandaCity.Huye, key: RwandaCity.Huye },
      ],
    },
    {
      country: Country.Sweden,
      flag: '/images/sweden.svg',
      cities: [
        { name: SwedenCity.Stockholm, key: SwedenCity.Stockholm },
        { name: SwedenCity.Gothenburg, key: SwedenCity.Gothenburg },
      ],
    },
  ];

  const displayCurrentCity = () => {
    switch (city) {
      case RwandaCity.Huye:
      case RwandaCity.Kigali:
        return RwandaCity.Kigali + ' , ' + Country.Rwanda;

      case SwedenCity.Gothenburg:
      case SwedenCity.Stockholm:
        return SwedenCity.Stockholm + ' , ' + Country.Sweden;
      default:
        return '';
    }
  };

  return (
    <header className={cn(styles.header, 'relative w-full')}>
      <div className={cn(styles.container, 'relative flex justify-between')}>
        <Dropdown
          menu={{
            items: country[0].cities.map((item) => ({
              key: item.key,
              label: item.name + ' ' + country[0].country,
            })),
            onClick: (info) => toggleCity(info.key),
          }}
          trigger={['click']}
          arrow
          className="cursor-pointer"
        >
          <div className={cn(styles.selectWrapper, 'flex items-center')}>
            <div className={cn('relative', styles.image)}>
              <Image
                src={theme === 'sweden' ? country[1].flag : country[0].flag}
                alt="flag"
                width={60}
                height={60}
              />
            </div>
            <div className="flex-grow ml-4">
              <span className={cn('ml-2 text-xl')}>{displayCurrentCity()}</span>
            </div>
            <div>
              <Icon icon={'ph:caret-down-bold'} fontSize={30} />
            </div>
          </div>
        </Dropdown>
        <div>
          <Dropdown
            menu={{
              items: country.map((item) => ({
                key: item.country,
                label: item.country,
              })),
              onClick: (info) => toggleTheme(info.key.toLowerCase() as any),
            }}
            arrow
          >
            <button type="button" className={cn('flex items-center')}>
              <Icon icon={'fa6-brands:affiliatetheme'} fontSize={50} />
              <span className={cn('text-xl')} style={{ marginLeft: '20px' }}>
                Theme
              </span>
            </button>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
export default Header;
