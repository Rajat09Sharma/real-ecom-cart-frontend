# 🛍️ Vibe Commerce | Frontend (React)

This is the **frontend** of the Mock E-Commerce Cart project built for the **Vibe Commerce screening task**.  
It provides a responsive UI where users can browse products, add/remove items from the cart, view totals, and perform a mock checkout.

---

## 🧾 Screenshots
 <img width="1892" height="869" alt="Screenshot 2025-10-30 134131" src="https://github.com/user-attachments/assets/434d7f9b-3ad1-43ae-8f6b-e42fd2893245" />
<img width="1898" height="868" alt="Screenshot 2025-10-30 134225" src="https://github.com/user-attachments/assets/a471cb74-4bcf-4c2e-8dfb-6c4b343024ec" />



> 📸 Place your screenshots in a `/screenshots` folder inside the frontend root.

---

## 🚀 Features

- Product listing grid fetched from backend
- Add / Remove / Update cart items
- Cart total calculation with Redux
- Mock checkout form with name & email
- Responsive and clean UI (TailwindCSS)
- Modal-based cart view
- Axios integrated for API calls

---

## 🛠️ Tech Stack

- **React.js**
- **Redux Toolkit**
- **Axios**
- **Tailwind CSS**
- **React Portal** for modal implementation

---

## 📦 Folder Structure
   ```bash
frontend/
┣ src/
┃ ┣ components/
┃ ┣ store/
┃ ┣ pages/
┃ ┗ App.jsx
┣ public/
┗ package.json
```

---

## ⚙️ Setup Instructions

1. **Clone repository**
  ```bash
   git clone https://github.com/your-username/mock-ecom-cart-frontend.git
   cd mock-ecom-cart-frontend
```

2. **Install dependencies**
 ```bash
npm install
```

4. **Start development server**
```bash
npm run dev
```


## 🔗 Backend API Used
```bash
Base URL: http://localhost:5000/api

Endpoint	Method	Description
/products	GET	Fetch all products
/cart/add	POST	Add item to cart
/cart/update/:id	PATCH	Update quantity
/cart/delete/:id	DELETE	Delete item
/cart/clear	DELETE	Clear all cart items

```
## 🧠 Key Learning

This project demonstrates a full-stack integration using React (frontend), Node.js + Express (backend), and MongoDB for persistence. It simulates real e-commerce flow with CRUD operations and state management using Redux.

## 🧩 Author

Rajat Sharma
