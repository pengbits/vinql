# VinQL - GraphQL Wine Sandbox Project Plan

## Overview
A full-stack GraphQL playground using wine as the domain, with data stored in static JSON/YAML files.

## Technology Stack

### Server
- **Runtime**: Node.js with TypeScript
- **GraphQL Server**: Apollo Server or GraphQL Yoga
- **Schema Definition**: GraphQL Schema Language (SDL) or Code-first with TypeScript
- **Language**: TypeScript (end-to-end)
- **Data Layer**: File system reads (JSON/YAML files)

### Client
- **Framework**: React with TypeScript
- **GraphQL Client**: Apollo Client or urql
- **Build Tool**: Vite (TypeScript support)
- **Language**: TypeScript (TSX for components)
- **Styling**: Tailwind CSS or styled-components (optional)

### Data Storage
- **Format**: JSON files (easier to parse) or YAML (more human-readable)
- **Location**: `data/` directory in the server project

## Project Structure

```
vinql/
├── server/
│   ├── src/
│   │   ├── schema/
│   │   │   ├── typeDefs.graphql          # GraphQL schema definitions
│   │   │   ├── resolvers/
│   │   │   │   ├── index.ts              # Resolver exports
│   │   │   │   ├── winery.ts             # Winery resolvers
│   │   │   │   ├── varietal.ts           # Varietal resolvers
│   │   │   │   └── wine.ts               # Wine resolvers
│   │   ├── data/
│   │   │   ├── wineries.json             # Winery data
│   │   │   ├── varietals.json            # Varietal data
│   │   │   └── wines.json                # Wine data
│   │   ├── types/
│   │   │   ├── index.ts                  # TypeScript type definitions
│   │   │   ├── winery.ts                 # Winery types
│   │   │   ├── varietal.ts               # Varietal types
│   │   │   └── wine.ts                   # Wine types
│   │   ├── utils/
│   │   │   └── dataLoader.ts             # Data loading utilities
│   │   ├── server.ts                     # Server entry point
│   │   └── index.ts                      # Main server setup
│   ├── tsconfig.json                     # TypeScript configuration
│   ├── package.json
│   └── README.md
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── WineList.tsx
│   │   │   ├── WineryList.tsx
│   │   │   ├── VarietalList.tsx
│   │   │   └── WineDetail.tsx
│   │   ├── graphql/
│   │   │   ├── queries/
│   │   │   │   ├── wines.ts
│   │   │   │   ├── wineries.ts
│   │   │   │   └── varietals.ts
│   │   │   └── mutations/
│   │   │       └── (if needed)
│   │   ├── types/
│   │   │   └── index.ts                  # TypeScript type definitions
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── tsconfig.json                     # TypeScript configuration
│   ├── package.json
│   └── vite.config.ts
├── package.json                          # Root package.json (workspace)
└── README.md
```

## Data Model

### Core Entities

#### Winery
```graphql
type Winery {
  id: ID!
  name: String!
  region: String!
  country: String!
  established: Int
  description: String
  wines: [Wine!]!
}
```

#### Varietal
```graphql
type Varietal {
  id: ID!
  name: String!
  description: String
  color: WineColor!  # RED, WHITE, ROSE, SPARKLING
  wines: [Wine!]!
}
```

#### Wine
```graphql
type Wine {
  id: ID!
  name: String!
  winery: Winery!
  varietal: Varietal!
  vintage: Int
  price: Float
  description: String
  alcoholContent: Float
  rating: Float
}
```

### Sample Data Structure

**wineries.json**
```json
[
  {
    "id": "1",
    "name": "Château Margaux",
    "region": "Bordeaux",
    "country": "France",
    "established": 1705,
    "description": "Premier Grand Cru Classé"
  }
]
```

**varietals.json**
```json
[
  {
    "id": "1",
    "name": "Cabernet Sauvignon",
    "description": "Full-bodied red wine",
    "color": "RED"
  }
]
```

**wines.json**
```json
[
  {
    "id": "1",
    "name": "Château Margaux 2015",
    "wineryId": "1",
    "varietalId": "1",
    "vintage": 2015,
    "price": 650.00,
    "description": "Elegant and complex",
    "alcoholContent": 13.5,
    "rating": 4.8
  }
]
```

## Implementation Phases

### Phase 1: Server Setup
1. Initialize Node.js project with TypeScript
   - `apollo-server` or `@graphql-yoga/node`
   - `graphql`
   - `typescript`, `ts-node`, `@types/node`
   - `fs-extra` or `node:fs/promises` for file operations
2. Configure TypeScript (`tsconfig.json`)
3. Create GraphQL schema (SDL or code-first)
4. Set up TypeScript type definitions
5. Set up data files (JSON format)
6. Implement resolvers with file system reads (TypeScript)
7. Add basic error handling
8. Test with GraphQL Playground/Studio

### Phase 2: Data Layer
1. Create sample data files (wineries, varietals, wines)
2. Implement data loading utilities
3. Add relationships between entities (winery → wines, varietal → wines)
4. Implement filtering and search capabilities

### Phase 3: Client Setup
1. Initialize React project with TypeScript (Vite recommended)
2. Configure TypeScript (`tsconfig.json`)
3. Set up Apollo Client or urql with TypeScript types
4. Configure GraphQL endpoint connection
5. Create TypeScript type definitions for GraphQL queries
6. Create basic UI components (TSX)
7. Implement queries and display data

### Phase 4: Features
1. Query wines by winery
2. Query wines by varietal
3. Search/filter functionality
4. Wine detail view
5. (Optional) Add mutations for creating/updating data

### Phase 5: Enhancements
1. Add wine pairings
2. Add regions/terroir information
3. Add images/descriptions
4. Implement pagination
5. Add caching strategies
6. Enhanced TypeScript type safety with GraphQL code generation

## Dependencies

### Server
```json
{
  "dependencies": {
    "apollo-server": "^3.x",
    "graphql": "^16.x",
    "fs-extra": "^11.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "ts-node": "^10.x",
    "@types/node": "^20.x",
    "@types/fs-extra": "^11.x",
    "nodemon": "^3.x",
    "ts-node-dev": "^2.x"
  }
}
```

### Client
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "@apollo/client": "^3.x",
    "graphql": "^16.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "@vitejs/plugin-react": "^4.x",
    "vite": "^5.x"
  }
}
```

## Development Workflow

1. **Start Server**: `cd server && npm run dev`
2. **Start Client**: `cd client && npm run dev`
3. **Access GraphQL Playground**: `http://localhost:4000/graphql`
4. **Access Client App**: `http://localhost:5173` (Vite default)

## Sample Queries

```graphql
# Get all wines
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

# Get wines by winery
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

# Get wines by varietal
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

## Next Steps

1. Review and approve this plan
2. Set up server project structure
3. Create initial data files
4. Implement GraphQL schema and resolvers
5. Set up client project
6. Build UI components
7. Test end-to-end flow

