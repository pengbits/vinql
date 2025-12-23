# VinQL Client

React client application for the VinQL wine sandbox project.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run in development mode:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
npm run preview
```

## Development

The client runs on `http://localhost:5173` by default and connects to the GraphQL server at `http://localhost:4000/graphql`.

Make sure the server is running before starting the client.

## Project Structure

- `src/components/` - React components (TSX)
- `src/graphql/queries/` - GraphQL query definitions
- `src/types/` - TypeScript type definitions
- `src/App.tsx` - Main application component
- `src/main.tsx` - Application entry point with Apollo Client setup

