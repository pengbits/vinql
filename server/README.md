# VinQL Server

GraphQL server for the VinQL wine sandbox project.

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
npm start
```

## GraphQL Endpoint

Once running, the server will be available at:
- **Server**: `http://localhost:4000`
- **GraphQL Playground**: `http://localhost:4000/graphql`

## Project Structure

- `src/schema/` - GraphQL schema definitions and resolvers
- `src/data/` - JSON data files (wineries, varietals, wines)
- `src/types/` - TypeScript type definitions
- `src/utils/` - Utility functions for data loading

## Sample Queries

See `PROJECT_PLAN.md` in the root directory for sample GraphQL queries.

