## Getting Started

First, create .env file on the root directory, then place the following

```bash
NEXT_PUBLIC_API_KEY=https://api.openweathermap.org/data/2.5/weather?q={CITY},{COUNTRY}&APPID={APPID}
#EXAMPLE
#NEXT_PUBLIC_API_KEY=https://api.openweathermap.org/data/2.5/weather?q=Kigali,rwanda&APPID={APPID}

# If You don't have APP ID signup on https://openweathermap.org and generate APP ID on your dashboard
NEXT_PUBLIC_BASE_URL=http://localhost:3000
FIREBASE_API_KEY=
FIREBASE_APP_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_ID=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies

- [NextJS](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/docs/firestore)
- [Firestore DB](https://firebase.google.com/docs/firestore)
- [OpenWeather Map API](https://api.openweathermap.org)

# API

Get Saved Weather Informations

```bash
URL: https://weather-psi-seven.vercel.app/api/weather

Response:
{
     data: [{
          id: string,
          country: string;
          city: string;
          humidity: number;
          wind: object;
          sunrise: number;
          sunset: number;
          clouds: number;
          coord: object;
          timestamp: number
     }]
}

```

Save New Weather Information

```bash
URL: https://weather-psi-seven.vercel.app/api/weather

Payload: {
     country: string;
     city: string;
     humidity: number;
     wind: object;
     sunrise: number;
     sunset: number;
     clouds: number;
     coord: object;
}

Response:
{
  message: 'saved successful'
}

```

## Deployed on Vercel

Check out [https://weather-psi-seven.vercel.app/](https://weather-psi-seven.vercel.app/) for more details.

## Author

[gratien](https://gratien.vercel.app)
