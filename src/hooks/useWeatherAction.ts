import React from 'react';
import { apiEndpoint } from '@/utils/ApiEndpoint';
import { Weather, WeatherPayload } from '@/types/Weather';
import axios from 'axios';

export const useWeatherAction = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

  const onSave = async (
    args: Weather,
    { country, city }: { country: string; city: string },
  ) => {
    try {
      const url = baseUrl + apiEndpoint.saveWeather;

      const payload: WeatherPayload = {
        country,
        city,
        humidity: args.main.humidity,
        clouds: args.clouds.all,
        wind: args.wind,
        sunrise: args.sys.sunrise,
        sunset: args.sys.sunset,
        coord: args.coord,
      };

      const res = await axios.post(url, payload, {
        headers: { 'Content-Type': 'application/json' },
      });

      return {
        data: res.data,
      };
    } catch (error) {
      const errorResponse = axios.isAxiosError(error)
        ? error.response?.data ?? 'something went wrong'
        : 'something went wrong';

      console.log('apiError:', errorResponse);

      return {
        error: errorResponse,
      };
    }
  };

  return {
    onSave,
  };
};
