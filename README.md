# 💬 MERN Real-Time Chat Application

A full-stack real-time chat application built using the MERN stack with Socket.io for live messaging and Cloudinary for media uploads.

---

## 🚀 Live Demo

🔗 Frontend: *Coming Soon*
🔗 Backend API: *Coming Soon*

---

## 📌 Features

* 🔐 JWT Authentication & Protected Routes
* 🧑‍🤝‍🧑 User Sidebar with Online Presence
* 💬 Real-Time One-to-One Messaging
* 🟢 Live Online/Offline Status
* 🖼️ Image Messaging (Cloudinary Uploads)
* 🔔 Unseen Message Count
* ⚡ Auto Scroll & Smooth Chat UI
* 📱 Fully Responsive Design

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* Context API
* Tailwind CSS
* Axios
* Socket.io Client

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.io

**Media & Auth**

* Cloudinary (Image Uploads)
* JWT Authentication
* bcrypt.js

---

## 📂 Project Structure

```
Chat-App/
│
├── Frontend/        # React Frontend
│
├── Backend/        # Node + Express Backend
│
├── models/        # MongoDB Schemas
├── routes/        # API Routes
├── controllers/   # Business Logic
├── middleware/    # Auth Middleware
│
└── README.md
```

---

## ⚙️ Environment Variables

Create `.env` file inside **server** folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🧑‍💻 Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/Ganeshmurdeshwarr/Chat-App.git
cd Chat-App
```

---

### 2️⃣ Install Dependencies

**Backend**

```
cd Backend
npm install
```

**Frontend**

```
cd Frontend
npm install

```
