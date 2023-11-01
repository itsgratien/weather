This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create .env file on the root directory, then place the following

```bash
NEXT_PUBLIC_API_KEY=https://api.openweathermap.org/data/2.5/weather?q={CITY},{COUNTRY}&APPID={APPID}
#EXAMPLE
#NEXT_PUBLIC_API_KEY=https://api.openweathermap.org/data/2.5/weather?q=Kigali,rwanda&APPID={APPID}

# If You don't have APP ID signup on https://openweathermap.org and generate APP ID on your dashboard

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

## Deployed on Vercel

Check out [https://weather-psi-seven.vercel.app/](https://weather-psi-seven.vercel.app/) for more details.

## Author

[gratien](https://gratien.vercel.app)
