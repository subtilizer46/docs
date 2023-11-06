## **Steps to Implement Login Functionality in QuotesApp**

### **1. Backend - Flask**

#### **backend/app.py**:

```python
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample quotes data
QUOTES = [
    "Life isn't about getting and having, it's about giving and being. -Kevin Kruse",
    "Whatever the mind of man can conceive and believe, it can achieve. -Napoleon Hill",
    "Strive not to be a success, but rather to be of value. -Albert Einstein"
]

# Hardcoded user credentials for simplicity
users = {
    "username": "password123"
}

@app.route('/api/quotes')
def get_quotes():
    return jsonify(QUOTES)

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

#### **frontend/src/App.js**:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
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
          setQuotes(response.data);
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
            <h2>Quotes</h2>
            <ul>
              {quotes.map((quote, index) => (
                <li key={index}>{quote}</li>
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

#### **frontend/src/App.css**:
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
```

### **Steps to Run the Application**

1. **Start the backend**:
   - Activate the virtual environment: `.\venv\Scripts\activate` (from the `backend` directory).
   - Run the Flask app: `python app.py`

2. **Start the frontend**:
   - In the `frontend` directory, run the command: `npm start`.

3. Open a web browser and navigate to `http://localhost:3000`. You should see a basic login page.

4. Use the credentials:
   - **Username**: `username`
   - **Password**: `password123`
   
5. Once authenticated, you'll see the list of quotes.