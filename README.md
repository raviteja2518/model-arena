# 🚀 Model Arena – LLM Comparison Platform

Model Arena is a full-stack web application that allows users to compare responses from multiple Large Language Models (LLMs) side-by-side for the same prompt. It provides a simple interface to evaluate outputs and rate each model’s response, helping users understand differences in quality, clarity, and usefulness.

---

## ✨ Features

- Single prompt input for comparison
- Side-by-side display of multiple LLM responses
- User-driven rating system for each model
- Backend API integration
- Clean and responsive UI
- Extensible design to add more models easily

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- HTML / CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Other
- REST APIs
- Environment variables for API keys
- MongoDB Atlas (recommended for deployment)

---

## 📂 Project Structure

model-arena/
│
├── backend/
│ ├── app.js
│ ├── routes/
│ │ ├── compare.js
│ │ └── rate.js
│ ├── models/
│ │ └── Rating.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the repository
git clone https://github.com/raviteja2518/model-arena.git

cd model-arena
### 2. Backend setup
cd backend
npm install


Create a `.env` file:
MONGO_URI=your_mongodb_uri
OPENAI_API_KEY=your_api_key


Start the backend:
npm start


Backend runs on:
http://localhost:3000


---

### 3. Frontend setup
cd frontend
npm install
npm run dev


Frontend runs on:
http://localhost:5173


---

## ⭐ Rating System

- Ratings are user-driven
- Each model response can be rated individually
- Ratings are stored in the backend for future analysis
- Designed to support analytics such as average score per model

---

## 🧠 Design Approach

- Human-in-the-loop evaluation
- No AI judging AI by default
- Simple and transparent comparison
- Backend designed for easy extensibility

---

## 🚀 Future Enhancements

- Analytics dashboard for model performance
- Rating history per prompt
- Leaderboard for models
- User authentication
- Support for additional LLM providers

---
Note:- ### Mock Mode
If `OPENROUTER_API_KEY` is not set, the application runs in mock mode.
This allows reviewers to explore the UI, model comparison flow,
and voting system without external dependencies.

## 👨‍💻 Author

Y Ganga Ravi Teja Reddy  
GitHub: https://github.com/raviteja2518

---

## 📜 License

This project is intended for learning and demonstration purposes.
