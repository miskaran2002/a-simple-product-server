# Product CRUD API 🚀

A simple REST API built with **TypeScript** and **Node.js** for performing CRUD operations on products.

## 📌 Features

- Add Product
- Get All Products
- Get Single Product
- Update Product
- Delete Product
- TypeScript Support
- Simple REST API Structure

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- TypeScript
- Nodemon
- ts-node

---

## 📂 Project Structure

```bash
project-folder/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── app.ts
│   └── server.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-link>
```

Go to the project folder:

```bash
cd project-folder
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Server

Development mode:

```bash
npm run dev
```

Build TypeScript:

```bash
npm run build
```

Run production server:

```bash
npm start
```

---

## 📡 API Endpoints

### Base URL

```bash
http://localhost:5000
```

---

### ➕ Add Product

```http
POST /products
```

#### Request Body

```json
{
  "name": "Laptop",
  "price": 50000,
  "brand": "Dell"
}
```

---

### 📖 Get All Products

```http
GET /products
```

---

### 🔍 Get Single Product

```http
GET /products/:id
```

---

### ✏️ Update Product

```http
PUT /products/:id
```

#### Request Body

```json
{
  "price": 55000
}
```

---

### ❌ Delete Product

```http
DELETE /products/:id
```

---

## 🧪 Testing API

You can test the API using:

- Postman
- Thunder Client
- Insomnia

---

## 👨‍💻 Author

Developed by Md Raihan Uddin

---

## 📄 License

This project is licensed under the MIT License.
