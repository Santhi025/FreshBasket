# 🛒 FreshBasket — Full Stack Grocery E-Commerce Platform

FreshBasket is a modern full-stack grocery e-commerce application built using the MERN stack. The platform provides a seamless online shopping experience with secure authentication, real-time cart management, automated invoice generation, and a responsive user interface optimized for all devices.

## 🚀 Live Demo

**Frontend:** https://fresh-basket-liart.vercel.app/

---

## 📌 Overview

FreshBasket is designed to simulate a real-world grocery delivery platform where users can browse products, manage their shopping cart, place orders, and receive dynamically generated invoices. The application focuses on scalable architecture, efficient state management, and a smooth user experience.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Zustand (State Management)
* React Hot Toast
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication

### Deployment

* Frontend: Vercel
* Backend: Render

---

## ✨ Key Features

### 🛍️ Product Management

* Browse grocery products by category
* Product search functionality
* Dynamic product listing

### 🛒 Shopping Cart

* Add products to cart
* Remove products from cart
* Update item quantities
* Persistent cart state

### 💰 Smart Invoice Generation

* Automatic subtotal calculation
* GST calculation (5%)
* Delivery charge calculation
* Total amount generation

### 🔐 Authentication & Security

* User registration
* Secure login system
* JWT-based authentication
* Protected routes

### ⚡ Enhanced User Experience

* Skeleton loading screens
* Toast notifications
* Responsive mobile-first design
* Fast and optimized Vite build

### 📦 Order Processing

* Place orders seamlessly
* Automatic cart clearing after successful order
* Real-time order summary

---

## 📂 Project Structure

```bash
FreshBasket/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   └── basket/
│       ├── src/
│       ├── public/
│       ├── components/
│       ├── pages/
│       └── vite.config.js
│
└── README.md
```

## ⚙️ Environment Variables

Create a `.env` file inside the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Gmail API Credentials
OAUTH_CLIENT_ID=your_client_id
OAUTH_CLIENT_SECRET=your_client_secret
OAUTH_REFRESH_TOKEN=your_refresh_token
OAUTH_EMAIL=your_email@gmail.com
```

## 🚀 Local Setup

### Clone Repository

```bash
git clone <repository-url>
cd FreshBasket
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend/basket
npm install
npm run dev
```

---

## 📱 Responsive Design

FreshBasket is fully responsive and optimized for:

* Desktop Devices
* Tablets
* Mobile Phones

---

## 🔮 Future Enhancements

* 💳 Razorpay / Stripe Payment Integration
* 📦 Order History & Tracking
* 🧑‍💼 Admin Dashboard
* 🔍 Advanced Filtering & Sorting
* ❤️ Wishlist Functionality
* 📊 Sales Analytics Dashboard
* 🔔 Real-Time Notifications
* 📧 Email Order Confirmation System

---

## 🎯 Learning Outcomes

This project helped strengthen practical knowledge in:

* MERN Stack Development
* REST API Design
* JWT Authentication
* State Management using Zustand
* MongoDB Database Design
* Frontend Performance Optimization
* Full-Stack Deployment
* Real-World E-Commerce Workflows

---

## 👨‍💻 Author

Developed with React, Node.js, Express, and MongoDB to demonstrate full-stack web development skills and scalable application architecture.
