'use client';
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import cn from 'classnames';
import styles from './OtherDetail.module.scss';
import { Row, Col } from 'antd';
import { Item } from './Item';
import { Sun } from './Sun';
import { format } from 'date-fns';

export const OtherDetail = () => {
  const { data } = useTheme();

  const gutter = { xs: 8, sm: 16, md: 24, lg: 32 };

  const sunrise = data?.sys.sunrise
    ? format(data.sys.sunrise * 1000, "yyyy-MM-dd'T'HH:mm").split('T')[1]
    : undefined;

  const sunset = data?.sys.sunset
    ? format(data.sys.sunset * 1000, "yyyy-MM-dd'T'HH:mm").split('T')[1]
    : undefined;

  return (
    <div className={cn(styles.otherDetail, 'relative')}>
      <Row gutter={gutter}>
        <Col md={8}>
          <Item
            icon="streamline:interface-weather-humidity-none-humidity-drop-weather"
            name="humidity"
            total={data?.main.humidity}
          />
        </Col>
        <Col md={8}>
          <Item
            icon="map:wind-surfing"
            name="wind"
            total={data?.wind.deg}
            type="deg"
          />
        </Col>
        <Col md={8}>
          <Item
            icon="circum:cloud-drizzle"
            name="clouds"
            total={data?.clouds.all}
          />
        </Col>
      </Row>
      <div className="mt-5">
        <Row gutter={gutter}>
          <Col md={24}>
            <Sun
              icon="fxemoji:sunriseovermountains"
              time={sunrise}
              name="Sunrise"
            />
          </Col>
          <Col md={24}>
            <Sun icon="twemoji:sunset" time={sunset} name="Sunset" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default OtherDetail;
