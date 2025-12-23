# VinQL - GraphQL Wine Sandbox

A full-stack GraphQL playground using wine as the domain, built with TypeScript end-to-end.

## Project Structure

```
vinql/
├── server/          # GraphQL server (Node.js + TypeScript)
├── client/          # React client (TypeScript + TSX)
└── PROJECT_PLAN.md  # Detailed project plan
```

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Server Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The GraphQL server will be available at:
- **Server**: `http://localhost:4000`
- **GraphQL Playground**: `http://localhost:4000/graphql`

### Client Setup

1. Navigate to the client directory (in a new terminal):
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The client will be available at `http://localhost:5173`

## Features

- **GraphQL Server** with Apollo Server
- **TypeScript** end-to-end (server and client)
- **React** client with Apollo Client
- **Static data** stored in JSON files
- **Type-safe** GraphQL queries and resolvers

## Data Model

The application includes three main entities:

- **Wineries**: Wine producers with region and country information
- **Varietals**: Grape varieties (Cabernet Sauvignon, Pinot Noir, etc.)
- **Wines**: Individual wines with vintage, price, and ratings

## Sample Queries

### Get all wines
```graphql
query GetAllWines {
  wines {
    id
    name
    vintage
    price
    winery {
      name
      region
    }
    varietal {
      name
      color
    }
  }
}
```

### Get wines by winery
```graphql
query WinesByWinery($wineryId: ID!) {
  winery(id: $wineryId) {
    name
    wines {
      name
      vintage
      price
    }
  }
}
```

### Get wines by varietal
```graphql
query WinesByVarietal($varietalId: ID!) {
  varietal(id: $varietalId) {
    name
    wines {
      name
      winery {
        name
      }
    }
  }
}
```

## Development

- **Server**: Uses `ts-node-dev` for hot reloading
- **Client**: Uses Vite for fast development and HMR
- **Type Checking**: Run `npm run type-check` in either directory

## Project Plan

See `PROJECT_PLAN.md` for detailed architecture and implementation details.

