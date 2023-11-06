* Turn the "QuotesApp" into a "HealthCareApp" showcasing with dummy healthcare products.

## **Project Folder Structure**

```
HealthCareApp
│
├───backend
│   ├───venv (your virtual environment folder)
│   └───app.py
│
├───frontend
│   ├───public
│   │   └───images
│   │       ├───product1.jpg
│   │       ├───product2.jpg
│   │       └───...
│   │
│   ├───src
│   │   ├───components
│   │   │   ├───Navbar.js
│   │   │   └───Product.js
│   │   ├───App.js
│   │   └───App.css
│   └───package.json
│
└───README.md
```

### **1. Backend - Flask**

#### **backend/app.py**:

Changes: 
- Rename the `QUOTES` list to `PRODUCTS` and structure the products as dictionaries with details about each product.

```python
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample products data
PRODUCTS = [
    {
        "id": 1,
        "name": "Vitamin C",
        "description": "Boost your immunity with our high-quality Vitamin C tablets.",
        "image": "product1.jpg"
    },
    {
        "id": 2,
        "name": "Pain Reliever",
        "description": "Effective pain relief with minimal side effects.",
        "image": "product2.jpg"
    }

@app.route('/api/quotes')
def get_quotes():
    return jsonify(PRODUCTS)
    # ... add more products as needed
]

# ... [rest of your code]
```

### **2. Frontend - React**

#### **frontend/src/components/Navbar.js**:
No change needed, as it will remain a generic navigation bar.

#### **frontend/src/components/Product.js**:

Create a new React component to display each product.

```jsx
import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <img src={`./images/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default Product;
```

#### **frontend/src/App.js**:

Changes:
- Rename the state variable `quotes` to `products`.
- Use the `Product` component to render each product.

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';  // Import the Product component

function App() {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  

  useEffect(() => {
    if (loggedIn) {
      axios.get('http://localhost:5000/api/quotes')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error("Error fetching quotes!", error);
        });
    }
  }, [loggedIn]);

  const handleLogin = () => {
    axios.post('http://localhost:5000/api/login', credentials)
      .then(response => {
        setLoginMessage(response.data.message);
        if (response.status === 200) {
          setLoggedIn(true);
        }
      })
      .catch(error => {
        setLoginMessage("Invalid credentials!");
      });
  };

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <header className="App-header">
        {!loggedIn ? (
          <>
            <h2>Login</h2>
            <div>
              <input 
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div>
              <input 
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <button onClick={handleLogin}>Login</button>
            <p>{loginMessage}</p>
          </>
        ) : (
          <div className="products-list">
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

```

#### **frontend/src/App.css**:

Changes:
- Add styling for the new product component.

```css
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
}

ul {
  list-style-type: none;
}

.navbar {
  background-color: #e12323;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
}

.navbar button {
  background-color: #555;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.navbar button:hover {
  background-color: #777;
}

.products-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.product {
  margin: 20px;
  max-width: 200px;
}

.product img {
  width: 100%;
  height: auto;
}
```

### **Next Steps:**

1. Replace `product1.jpg` and `product2.jpg` with actual image files in `frontend/public/images`.
2. Ensure you handle the logic for fetching products properly from the Flask backend.
