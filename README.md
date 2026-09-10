# New Portfolio - Full-Stack Portfolio Architecture

A modern, production-grade full-stack portfolio application with separated **Frontend** and **Backend** directories, featuring modular controllers, graceful fallback storage, and pre-configured MongoDB readiness.

---

## 📁 Directory Structure

```text
New_Portfolio/
├── backend/                  # Node.js & Express API Server
│   ├── config/
│   │   └── db.js             # Mongoose connection with graceful JSON fallback
│   ├── controllers/
│   │   ├── projectController.js # Projects API controller (MongoDB + fallback)
│   │   ├── skillController.js   # Skills API controller (MongoDB + fallback)
│   │   └── contactController.js # Contact form API controller
│   ├── data/
│   │   ├── messages.json     # Contact messages storage
│   │   ├── projects.json     # Projects database / seed source
│   │   └── skills.json       # Skills database / seed source
│   ├── models/               # Mongoose Schemas (Ready for MongoDB)
│   │   ├── Message.js
│   │   ├── Project.js
│   │   └── Skill.js
│   ├── routes/
│   │   └── api.js            # Express API router (/health, /projects, /skills, /contact)
│   ├── .env.example          # Environment template
│   ├── .env                  # Backend environment configuration
│   ├── package.json          # Backend dependencies (express, cors, dotenv, mongoose)
│   ├── seed.js               # MongoDB seeder script
│   └── server.js             # Backend server entry point
│
├── frontend/                 # React 19 Client with Vite & Tailwind CSS v4
│   ├── public/               # Favicons and SVG assets
│   ├── src/
│   │   ├── assets/           # Client images and media
│   │   ├── components/       # UI Components (Hero, Navbar, Projects, Skills, Contact, Footer)
│   │   ├── pages/            # Page layouts
│   │   ├── App.jsx
│   │   ├── index.css         # Tailwind styles & theme variables
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite config with API proxy to backend
│
├── .gitignore
├── package.json              # Monorepo workspace runner (concurrently)
└── README.md
```

---

## 🚀 Quick Start

### 1. Install Dependencies
Run the command below in the root folder to install dependencies for root, backend, and frontend:
```bash
npm run install:all
```

### 2. Start Both Frontend and Backend Concurrently
From the root directory:
```bash
npm run dev
```
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

### Running Individually:
- **Backend only**:
  ```bash
  npm run dev:backend
  ```
  *(or `cd backend && npm run dev`)*
- **Frontend only**:
  ```bash
  npm run dev:frontend
  ```
  *(or `cd frontend && npm run dev`)*

---

## 🍃 MongoDB Integration Guide (Jab Aap Connect Karna Chahein)

Currently, the backend operates seamlessly with the **Local JSON Storage (`backend/data/`)**. You do not need MongoDB running right now to use the portfolio!

When you are ready to switch to **MongoDB**:

1. Open `backend/.env` and provide your MongoDB connection string:
   ```env
   # For local MongoDB:
   MONGODB_URI=mongodb://127.0.0.1:27017/portfolio

   # Or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

2. Seed your initial projects and skills into MongoDB (from root directory):
   ```bash
   npm run seed:db
   ```
   *(or `cd backend && npm run seed`)*

3. Start your app:
   ```bash
   npm run dev
   ```
   The backend will automatically detect the database and log:
   `✅ MongoDB Connected successfully`
   All project queries, skill queries, and contact form messages will now be managed by MongoDB!
>>>>>>> 6cec048 (feat: complete modern full-stack portfolio with MongoDB, express backend and react frontend)
