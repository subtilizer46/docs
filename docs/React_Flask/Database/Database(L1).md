## **Setting Up SQLite3**

### **Step 1:** Create a new SQLite database.

Create a new file named `database.db` in your `backend` directory.

### **Step 2:** Initialize the database with the required tables.

We'll need a table for products.

#### **backend/init_db.py**:
```python
import sqlite3

connection = sqlite3.connect('database.db')
cursor = connection.cursor()

cursor.execute('''
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL
)
''')

# Insert initial data
cursor.executemany('''
INSERT INTO products (name, description, image)
VALUES (?, ?, ?)
''', [
    ("Vitamin C", "Boost your immunity with our high-quality Vitamin C tablets.", "product1.jpg"),
    ("Pain Reliever", "Effective pain relief with minimal side effects.", "product2.jpg")
    # ... add more products as needed
])

connection.commit()
connection.close()
```

Run the script once to initialize the database:

```
$ python init_db.py
```

## **Backend Changes**

### **Step 3:** Update the Flask app to interact with SQLite3.

#### **backend/app.py**:
```python
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# Hardcoded user credentials for simplicity
users = {
    "user": "pass"
}

# Sample cart for the demo
CART = []

def query_db(query, args=(), one=False):
    con = sqlite3.connect('database.db')
    cur = con.cursor()
    cur.execute(query, args)
    rv = [dict((cur.description[idx][0], value) for idx, value in enumerate(row)) for row in cur.fetchall()]
    con.close()
    return (rv[0] if rv else None) if one else rv

@app.route('/api/products')
def get_products():
    products = query_db('SELECT * FROM products')
    return jsonify(products)

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

@app.route('/api/add_to_cart', methods=['POST'])
def add_to_cart():
    product_id = request.get_json().get('id')
    product = next((p for p in query_db('SELECT * FROM products') if p["id"] == product_id), None)
    
    if product:
        CART.append(product)
        return jsonify({"message": "Product added to cart!"}), 200
    else:
        return jsonify({"message": "Product not found!"}), 404

if __name__ == "__main__":
    app.run(debug=True)

```

### **Frontend Changes**

### **Step 4:** Update the frontend to fetch products from the new API endpoint.

In the `frontend/src/App.js`, update the API endpoint in the `useEffect` hook:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [cart, setCart] = useState([]);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    if (loggedIn) {
      axios.get('http://localhost:5000/api/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error("Error fetching products!", error);
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

  const handleAddToCart = (product) => {
    axios.post('http://localhost:5000/api/add_to_cart', { id: product.id })
      .then(response => {
        setCart([...cart, product]);
      })
      .catch(error => {
        console.error("Error adding product to cart!", error);
      });
  };

  return (
    <div className="App">
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
          <>
            <h2>HealthCare Products</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <img src={product.image} alt={product.name} width="100" />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </li>
              ))}
            </ul>
            <h2>Your Cart</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

```

## Add images in 

```bash
my-app/
├── public/
│   ├── product1.jpg
│   ├── product2.jpg
│   └── ...
```


## **Testing the Setup**

1. Start the backend Flask app:
```
$ python app.py
```

2. Start the frontend React app:
```
$ npm start
```

