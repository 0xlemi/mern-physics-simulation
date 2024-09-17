# Libraries for Interactive 2D Physics Simulation Playground

## Backend
- express: Web application framework
- mongoose: MongoDB object modeling tool
- socket.io: Real-time bidirectional event-based communication
- cors: Cross-Origin Resource Sharing middleware
- dotenv: Environment variable management
- body-parser: Parsing middleware for incoming request bodies

## Frontend
- react: UI library
- react-dom: React rendering for web
- matter-js: 2D physics engine for the web
- react-matter-js: React components for matter-js
- socket.io-client: Client-side socket.io
- axios: HTTP client for API requests
- styled-components: CSS-in-JS styling
- react-icons: Icon components for React

## Development
- nodemon: Auto-restart server during development
- concurrently: Run multiple commands concurrently
- eslint: Linting utility
- prettier: Code formatting
- jest: Testing framework
- react-testing-library: Testing utilities for React

## Architucture
```mermaid
graph TD
    A[React Frontend] -->|HTTP/WebSocket| B[Express Server]
    B -->|Mongoose| C[MongoDB]
    B -->|WebSocket| D[Socket.io]
    D -->|Real-time updates| A
    E[Node.js Runtime] -->|Executes| B
    F[Matter.js Physics Engine] -->|Simulations| A
    G[API Routes] -->|Defines| B
    H[Simulation Logic] -->|Executes| B
```

## Data Flow
```mermaid
sequenceDiagram
    participant U as User
    participant R as React Frontend
    participant S as Socket.io Client
    participant E as Express Server
    participant SI as Socket.io Server
    participant M as MongoDB

    U->>R: Interact with simulation
    R->>S: Emit event
    S->>SI: Send event
    SI->>E: Pass event to server
    E->>M: Update simulation state
    M-->>E: Confirm update
    E->>SI: Broadcast update
    SI->>S: Send update to all clients
    S->>R: Update local state
    R->>U: Render updated simulation
```

