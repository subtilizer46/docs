Let's add a navigation bar (navbar) to the application. Here are the steps:

1. Create a separate Navbar component.
2. Add the Navbar component to your main `App` component.

Start with the Navbar component:

### **frontend/src/components/Navbar.js**:
```jsx
import React from 'react';

function Navbar({loggedIn, setLoggedIn}) {
  return (
    <div className="navbar">
      <span>QuotesApp</span>
      {loggedIn && (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
}

export default Navbar;
```

Now, let's integrate the Navbar component into our main App:

#### **frontend/src/App.js**:
```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css';

function App() {
  // ... [rest of your state variables]

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> {/* Add the Navbar component */}
      <header className="App-header">
        {/* ... rest of your code */}
      </header>
    </div>
  );
}

export default App;
```

Finally, let's add some basic styling for the navbar:

#### **frontend/src/App.css**:
```css
/* ... [your existing styles] ... */

.navbar {
  background-color: #333;
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
```
