## Adding an "Add to Cart" button 

## **Backend Changes**

1. **Extend the backend to have an API endpoint for adding items to a cart.** 

#### **backend/app.py**:

```python
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# === Empty Cart List === #
CART = []

# === Cart Functionality === #

@app.route('/api/add_to_cart', methods=['POST'])
def add_to_cart():
    product_id = request.get_json().get('id')
    product = next((p for p in PRODUCTS if p["id"] == product_id), None)
    
    if product:
        CART.append(product)
        return jsonify({"message": "Product added to cart!"}), 200
    else:
        return jsonify({"message": "Product not found!"}), 404

# === Product Data === #
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
    # ... add more products as needed
]

# === Login Cred === #
users = {
    "user": "pass"
}

@app.route('/api/products')
def get_quotes():
    return jsonify(PRODUCTS)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get("username", "")
    password = data.get("password", "")

    stored_password = users.get(username, None)
    
    if stored_password and stored_password == password:
        return jsonify({"message": "Login successful!"}), 200
    else:
        return jsonify({"message": "Invalid credentials!"}), 401

if __name__ == "__main__":
    app.run(debug=True)

```

## **Frontend Changes**

1. **Update the App.js**:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';  // Import the Product component

function App() {

  // === State for Cart === //
  const [cart, setCart] = useState([]);

  // === State for Products === //
  const [products, setProducts] = useState([]);

  // === State for Login === //
  const [loggedIn, setLoggedIn] = useState(false);

  const [loginMessage, setLoginMessage] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  // Add to cart functionality

  const addToCart = (product) => {
    axios.post('http://localhost:5000/api/add_to_cart', {id: product.id})
      .then(response => {
        if (response.status === 200) {
          setCart([...cart, product]);
        }
      })
      .catch(error => {
        console.error("Error adding product to cart!", error);
      });
};

  

  useEffect(() => {
    if (loggedIn) {
      axios.get('http://localhost:5000/api/products')
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
              <Product key={product.id} product={product} addToCart={addToCart} />

            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

```

3. **Update the `Product` component to include the "Add to Cart" button**:

#### **frontend/src/components/Product.js**:

```jsx
import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={`./images/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;

```

4. **Add some styling for the "Add to Cart" button in the `App.css`**:

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

.product button {
  margin-top: 10px;
  padding: 5px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.product button:hover {
  background-color: #45a049;
}

```
