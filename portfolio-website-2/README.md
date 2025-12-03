# Portfolio Website

This is a Next.js project.

## How to Run

### Prerequisites

- Node.js installed on your machine.
- `npm` (Node Package Manager).

### Steps

1.  **Install dependencies:**
    ```bash
    npm install --legacy-peer-deps
    ```
    *Note: The `--legacy-peer-deps` flag is required because some dependencies are not yet fully compatible with React 19.*

    > [!TIP]
    > If you encounter `EACCES: permission denied` errors, try running with a temporary cache:
    > `npm install --cache /tmp/npm-cache --legacy-peer-deps`

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open in Browser:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Other Scripts

- `npm run build`: Builds the app for production.
- `npm run start`: Runs the built app in production mode.
- `npm run lint`: Runs the linter.
