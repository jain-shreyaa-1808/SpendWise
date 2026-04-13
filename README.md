# Spendwise — Expense Tracker

A full-stack personal finance tracker to manage income and expenses, visualize spending trends, and export financial data.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS |
| Backend | Node.js, Express 5 |
| Database | MongoDB (Mongoose) |
| Auth | JWT (JSON Web Tokens) |
| Charts | Recharts |

## Features

- **Authentication** — Register/login with JWT-based sessions. "Remember Me" persists to `localStorage`; otherwise uses `sessionStorage`.
- **Dashboard** — Overview of total income, expenses, and balance with charts and trend indicators.
- **Income** — Add, edit, delete income entries with category and date.
- **Expenses** — Add, edit, delete expense entries with category and date.
- **Profile** — View and update user profile.
- **Export** — Download income/expense data as `.xlsx` files.

## Project Structure

```
Spendwise/
├── backend/
│   ├── config/         # MongoDB connection
│   ├── controllers/    # Route handlers (user, income, expense, dashboard)
│   ├── middleware/      # JWT auth middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express routers
│   ├── utils/          # Excel export utility
│   └── server.js       # Entry point
└── frontend/
    ├── public/
    └── src/
        ├── assets/     # Images, styles
        ├── components/ # Layout, Navbar, Sidebar, Login, Signup, etc.
        ├── pages/      # Dashboard, Income, Expense, Profile
        └── utils/      # Export helpers
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Login and receive JWT |
| GET | `/api/user/me` | Get authenticated user profile |
| GET | `/api/income` | List income entries |
| POST | `/api/income` | Add income entry |
| PUT | `/api/income/:id` | Update income entry |
| DELETE | `/api/income/:id` | Delete income entry |
| GET | `/api/expense` | List expense entries |
| POST | `/api/expense` | Add expense entry |
| PUT | `/api/expense/:id` | Update expense entry |
| DELETE | `/api/expense/:id` | Delete expense entry |
| GET | `/api/dashboard` | Get dashboard summary |

## Local Development

### Prerequisites
- Node.js 18+
- MongoDB Atlas URI (or local MongoDB)

### Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/jain-shreyaa-1808/Spendwise.git
   cd Spendwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install --prefix frontend
   ```

3. **Configure environment variables**

   Create a `.env` file in the root:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run backend and frontend separately**

   Terminal 1 — backend:
   ```bash
   npm run dev
   ```

   Terminal 2 — frontend (Vite proxies `/api` to `localhost:4000`):
   ```bash
   cd frontend
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173)

## Deployment (Render)

The app is deployed as a single service — Express serves the built React frontend as static files.

### Render settings

| Setting | Value |
|---|---|
| Build Command | `npm run build` |
| Start Command | `node backend/server.js` |

### Environment variables on Render

| Key | Value |
|---|---|
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | A long random secret string |

> `PORT` is set automatically by Render — the server reads it via `process.env.PORT`.

### Build script (root `package.json`)

```json
"build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
```

This installs all dependencies and builds the React app into `frontend/dist`, which Express then serves.
