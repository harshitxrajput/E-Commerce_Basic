# E-Commerce Basic MERN Project

Live Demo: [https://e-commerce-basic-4.onrender.com/](https://e-commerce-basic-4.onrender.com/)

## Description
A basic E-commerce product management system built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include product creation, reading, updating, and deletion with a responsive UI built using Chakra UI.

## Features
- Create new products
- View all products
- Update existing products
- Delete products 
- Dark/Light mode toggle
- Responsive design

## Project Structure
```
E-Commerce_Basic/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.routes.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── store/
│   │   │   └── Product.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
├── .env
└── package.json
```

## API Documentation

### Product Model
```javascript
{
  name: String (required),
  price: Number (required),
  image: String (required),
  timestamps: true
}
```

### API Endpoints

#### 1. Create Product
- **Route:** POST /products/create
- **Description:** Create a new product
- **Request Body:**
```json
{
  "name": "Product Name",
  "price": 999,
  "image": "https://image-url.com"
}
```
- **Success Response:**
```json
{
  "success": true,
  "data": {
    "_id": "65f1234567890",
    "name": "Product Name",
    "price": 999,
    "image": "https://image-url.com",
    "createdAt": "2024-03-13T10:00:00.000Z",
    "updatedAt": "2024-03-13T10:00:00.000Z"
  }
}
```

#### 2. Get All Products
- **Route:** GET /products/get
- **Description:** Retrieve all products
- **Success Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "65f1234567890",
      "name": "Product Name",
      "price": 999,
      "image": "https://image-url.com",
      "createdAt": "2024-03-13T10:00:00.000Z",
      "updatedAt": "2024-03-13T10:00:00.000Z"
    }
  ]
}
```

#### 3. Update Product
- **Route:** PUT /products/update/:id
- **Description:** Update a product by ID
- **Request Body:**
```json
{
  "name": "Updated Name",
  "price": 1999,
  "image": "https://new-image-url.com"
}
```
- **Success Response:**
```json
{
  "success": true,
  "updatedProduct": {
    "_id": "65f1234567890",
    "name": "Updated Name",
    "price": 1999,
    "image": "https://new-image-url.com",
    "createdAt": "2024-03-13T10:00:00.000Z",
    "updatedAt": "2024-03-13T10:30:00.000Z"
  },
  "message": "Product Updated"
}
```

#### 4. Delete Product
- **Route:** DELETE /products/delete/:id
- **Description:** Delete a product by ID
- **Success Response:**
```json
{
  "success": true,
  "message": "Product Deleted"
}
```

## Technologies Used
- Frontend:
  - React.js with Vite
  - Chakra UI for styling
  - Zustand for state management
  - React Router for routing
- Backend:
  - Node.js
  - Express.js
  - MongoDB with Mongoose
- Deployment:
  - Render

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   ```
3. Create a .env file with:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
