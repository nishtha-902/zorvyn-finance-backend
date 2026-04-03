# Finance Dashboard Backend

## **Overview**

This project is a backend system for a finance dashboard that manages users, financial records, and summary analytics. It implements role-based access control to ensure secure and structured data access.

---

## **Tech Stack**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (Password Hashing)

---

## **Setup Instructions**

### **1. Clone Repository**

```
git clone <your-repo-link>
cd finance-dashboard-backend
```

### **2. Install Dependencies**

```
npm install
```

### **3. Create .env File**

```
PORT=5000
MONGO_URI=mongo_uri
JWT_SECRET=your_secret_key
```

### **4. Run Server**

```
npm start
```

Server runs on:

```
http://localhost:5000
```

---

## **Authentication**

* Register a user
* Login to get JWT token
* Use token in headers:

```
Authorization: <your_token>
```

---

## **API Documentation & Test Cases**

---

## **AUTH APIs**

### **Register User**

**POST** `/api/auth/register`

**Request Body:**

```
{
  "name": "Admin User",
  "email": "admin@test.com",
  "password": "123456",
  "role": "admin"
}
```

**Test Cases:**

* Valid input → User created successfully
* Duplicate email → Error response

---

### **Login User**

**POST** `/api/auth/login`

**Request Body:**

```
{
  "email": "admin@test.com",
  "password": "123456"
}
```

**Response:**

```
{
  "token": "JWT_TOKEN"
}
```

**Test Cases:**

* Correct credentials → Token received
* Wrong password → Error

---

## **👥 USER APIs (Admin Only)**

### **Get All Users**

**GET** `/api/users`

**Headers:**

```
Authorization: <token>
```

**Test Cases:**

* Admin → Success
* Viewer/Analyst → 403 Forbidden

---

### **Update User Status**

**PUT** `/api/users/:id`

**Request Body:**

```
{
  "isActive": false
}
```

**Test Cases:**

* Admin → User updated
* Other roles → Access denied

---

## **RECORD APIs**

### **Create Record (Admin Only)**

**POST** `/api/records`

**Request Body:**

```
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "date": "2026-04-01",
  "note": "Monthly salary"
}
```

**Test Cases:**

* Admin → Record created
* Viewer/Analyst → Forbidden

---

### **Get Records**

**GET** `/api/records`

**Query Parameters:**

```
?type=income
?category=salary
```

**Test Cases:**

* All roles → Can view records
* Filters → Work correctly

---

### **Update Record**

**PUT** `/api/records/:id`

**Request Body:**

```
{
  "amount": 6000
}
```

**Test Cases:**

* Admin → Record updated
* Other roles → Forbidden

---

### **Delete Record**

**DELETE** `/api/records/:id`

**Test Cases:**

* Admin → Record deleted
* Other roles → Forbidden

---

## **📊 DASHBOARD APIs**

### **Get Summary**

**GET** `/api/dashboard/summary`

**Response:**

```
{
  "totalIncome": 10000,
  "totalExpense": 3000,
  "netBalance": 7000
}
```

**Test Cases:**

* Analyst/Admin → Success
* Values calculated correctly

---

### **Category-wise Data**

**GET** `/api/dashboard/category`

**Response:**

```
[
  { "_id": "salary", "total": 10000 },
  { "_id": "food", "total": 2000 }
]
```

## **Screenshots**

<img width="1559" height="586" alt="image" src="https://github.com/user-attachments/assets/8eab2264-dffc-481d-b3f3-c5966904ca8c" />
<br>
<br>
<img width="1861" height="605" alt="image" src="https://github.com/user-attachments/assets/95697bf3-f0da-430f-a519-2ac0f7e299ea" />
<br>
<br>
<img width="1494" height="600" alt="image" src="https://github.com/user-attachments/assets/5064499f-b1c2-4e69-865d-675c3f42e48f" />



