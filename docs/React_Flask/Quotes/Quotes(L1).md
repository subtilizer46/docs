## QuotesApp Setup Instructions (Windows)

### **Setting up the Project Structure**

1. **Create a new project directory:**
   ```bash
   mkdir QuoteApp
   cd QuoteApp
   ```

2. **Set up `backend` and `frontend` folders:**
   ```bash
   mkdir backend frontend
   ```

### **Backend Setup with Virtual Environment**

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment for the backend:**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   ```bash
   .\venv\Scripts\activate
   ```

4. **Create the `app.py` file:**
   ```bash
   type nul > app.py
   ```

5. **Open `app.py` in a text editor and paste the following code:**
   ```python
   from flask import Flask, jsonify
   from flask_cors import CORS

   app = Flask(__name__)
   CORS(app)
   QUOTES = [
       "Life isn't about getting and having, it's about giving and being. - Kevin Kruse",
       "Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",
       "Strive not to be a success, but rather to be of value. –Albert Einstein"
   ]

   @app.route('/api/quotes')
   def get_quotes():
       return jsonify(QUOTES)

   if __name__ == "__main__":
       app.run(debug=True)
   ```

6. **Install necessary packages inside the virtual environment:**
   ```bash
   pip install flask flask-cors
   ```

7. **Run the backend:**
   ```bash
   python app.py
   ```

   **Check Output:** Open a web browser and navigate to `http://localhost:5000/api/quotes` to see the list of quotes in JSON format.

### **Frontend Setup**

1. **Navigate to the frontend directory:**
   ```bash
   cd ..\frontend
   ```

2. **Initialize a new React app:**
   ```bash
   npx create-react-app .
   ```

3. **Install axios:**
   ```bash
   npm install axios
   ```

4. **Replace the content of `frontend/src/App.js` with the following React code:**
   ```jsx
   import React, { useState, useEffect } from 'react';
   import axios from 'axios';
   import './App.css';

   function App() {
     const [quotes, setQuotes] = useState([]);

     useEffect(() => {
       axios.get('http://localhost:5000/api/quotes')
         .then(response => {
           setQuotes(response.data);
         })
         .catch(error => {
           console.error("Error fetching quotes!", error);
         });
     }, []);

     return (
       <div className="App">
         <header className="App-header">
           <h2>Quotes</h2>
           <ul>
             {quotes.map((quote, index) => (
               <li key={index}>{quote}</li>
             ))}
           </ul>
         </header>
       </div>
     );
   }

   export default App;
   ```

5. **Add styling by replacing the content of `frontend/src/App.css` with:**
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

6. **Start the frontend app:**
   ```bash
   npm start
   ```

   **Check Output:** Open a web browser and navigate to `http://localhost:3000` to see a list of quotes displayed with basic styling.
