```
Created by : Dhiraj Kr
```

## Creating a table in a React.js application. To fetch data from a JSON file and use it in your table:

**Step 1: Create a JSON File**

Create a JSON file in your project directory (e.g., data.json) and add some sample data:

```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Smith", "email": "jane@example.com" },
  { "id": 3, "name": "Bob Johnson", "email": "bob@example.com" }
]
```

**Step 2: Fetch Data from the JSON File**

In your main application component (App.js), you'll need to fetch data from the JSON file before passing it to the Table component. You can use the `fetch` API to do this. Update your App.js as follows:

```jsx
// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data.json') // Update the path to match your JSON file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Simple React Table</h1>
      <Table data={data} />
    </div>
  );
};

export default App;
```


**Folder Structure**

react-table-example/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  │   └── data.json
  ├── src/
  │   ├── App.js
  │   ├── Table.js
  │   ├── App.css
  │   └── index.js
  ├── package.json
  ├── package-lock.json
  ├── README.md


**Explanation**

1. **Importing Dependencies**: At the beginning of the code, we import some essential parts of the React library, which we'll use to build our web application. These parts are `React`, `useEffect`, and `useState`. We also import a CSS file and a component called `Table` from other files.

2. **Defining the App Component**: We create a new component called `App`. This component represents our entire web application.

3. **Setting Up State**: Inside the `App` component, we use the `useState` function to create a piece of data called `data` and a function to update it called `setData`. `data` is initially set to an empty array `[]`. We'll use this array to store some information later.

4. **Fetching Data with useEffect**: We use the `useEffect` function to perform some actions when this component is first loaded. In this case, we want to fetch some data from a JSON file. The `useEffect` function takes two arguments: a function to run and an array of dependencies. Since we want this code to run only once when the component is mounted (loaded), we pass an empty array `[]` as the second argument.

5. **Fetching Data**: Inside the `useEffect` function, we use the `fetch` function to request data from a file named `data.json`. You might need to change the path to match the actual location of your JSON file.

6. **Processing Data**: After fetching the data, we use the `then` method to process it. First, we convert the response into JSON format using `response.json()`. Then, we use another `then` to set the retrieved JSON data into our `data` state using the `setData` function. This means the `data` state will now contain the information from the JSON file.

7. **Handling Errors**: If there is an error during the fetching or processing of data, we use `catch` to log an error message to the console so that we can see what went wrong.

8. **Rendering the Component**: Finally, we return some JSX (JavaScript XML) code inside the `return` statement. JSX is a way to write HTML-like code within JavaScript. We create a `div` with a class name of "App," display a heading ("Simple React Table"), and render the `Table` component, passing the `data` we fetched as a prop..