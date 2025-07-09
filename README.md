# Worko Referral Management System

Worko is a modern job referral platform that connects job seekers and referrers, streamlining the process of referring candidates for open positions. Built with a React frontend and a Node.js/Express/MongoDB backend, Worko enables easy candidate referrals, status tracking, and user authentication.

---
## Deployed Link : (https://worko-ref.netlify.app/)

## Features

### Frontend (React)
- **Dashboard:** View all referred candidates, filter by job title or status, and update candidate status.
- **Referral Form:** Refer a candidate with name, email, phone, job title, and optional PDF resume upload.
- **Authentication:** Signup and login .
- **Metrics:** See live stats for total, pending, reviewed, and hired candidates.
- **Responsive UI:** Built with Tailwind CSS for a modern, mobile-friendly experience.
- **Toast Notifications:** User feedback for actions like login, signup, referral, and logout.
- **Navigation:** Navbar and footer for easy navigation.

### Backend (Node.js + Express + MongoDB)
- **REST API:** Endpoints for candidates, authentication, and metrics.
- **File Uploads:** Resume uploads (PDF only) with Multer, stored in `/uploads`.
- **Validation:** Email and phone validation, PDF file type enforcement.
- **Error Handling:** Clear error messages for invalid data or server issues.
- **CORS:** Configurable for development and production.

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas account (or local MongoDB)
- npm

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhi-nav-anand/Worko-backend.git
   cd Worko-backend/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the `backend` directory:
   ```
   MONGO_URI=your_mongodb_connection_string
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start the backend:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the `frontend` directory:
   ```
   VITE_API_BASE_URL=http://localhost:5000
   ```

4. **Start the frontend:**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173` by default.

---

## Deployment

- **Backend:** Deploy to [Render]((https://worko-backend-1-7r3k.onrender.com)), Heroku, or any Node.js hosting. Set environment variables in your dashboard.
- **Frontend:** Deploy to [Netlify](https://worko-ref.netlify.app/), Netlify, or similar. Set `VITE_API_BASE_URL` to your deployed backend URL.

---

## API Endpoints

- `POST   /api/auth/signup` — User signup
- `POST   /api/auth/login` — User login
- `GET    /candidates` — List all candidates
- `POST   /candidates` — Add a candidate (with optional PDF resume)
- `PUT    /candidates/:id/status` — Update candidate status
- `DELETE /candidates/:id` — Delete a candidate
- `GET    /api/metrics` — Get candidate statistics

---


## Credits

- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Render](https://render.com/)
