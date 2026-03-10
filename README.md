# KL Trip Website (React)

Simple red-themed multi-screen website for exchange students joining a Kuala Lumpur day trip.

## Run locally (React dev server)

```bash
npm install
npm run dev
```

## Build and run with Docker

```bash
docker build -t kl-trip-site .
docker run --rm -p 8080:80 kl-trip-site
```

Open [http://localhost:8080](http://localhost:8080).

## Customize

- Main app: `src/App.jsx`
- Styling: `src/styles.css`
- React entry: `src/main.jsx`
