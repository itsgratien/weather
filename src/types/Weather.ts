export interface Weather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
    [key: string]: any;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    [key: string]: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  rain: {
    '1h': number;
    [key: string]: any;
  };
  clouds: {
    all: number;
    [key: string]: any;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;

    /**
     * @format {timestamp}
     */
    sunrise: number;

    /**
     * @format {timestamp}
     */
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  [key: string]: any;
}

export interface GetWeather {
  data: Weather;
}
