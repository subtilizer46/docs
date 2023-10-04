## Create a functional component that receives a prop called "isLoggedIn" (boolean) and displays "Welcome" if the user is logged in and "Please log in" if not. 

Functional component in React that receives the "isLoggedIn" prop and displays "Welcome" if the user is logged in and "Please log in" if not:

```jsx
import React from 'react';

function Greeting(props) {
  if (props.isLoggedIn) {
    return <div>Welcome</div>;
  } else {
    return <div>Please log in</div>;
  }
}

export default Greeting;
```

You can use this component by passing the "isLoggedIn" prop to it, like so:

```jsx
<Greeting isLoggedIn={true} />
```

## Complete Code :

```jsx
import React from 'react';

function Greeting(props) {
  if (props.isLoggedIn) {
    return <div>Welcome</div>;
  } else {
    return <div>Please log in</div>;
  }
}

export default Greeting;
```

To use this component, you would include it in another component or in your application's JSX like this:

```jsx
import React from 'react';
import Greeting from './Greeting'; // Import the Greeting component

function App() {
  return (
    <div>
      <h1>Greeting Component Example</h1>
      {/* Pass the isLoggedIn prop to the Greeting component */}
      <Greeting isLoggedIn={true} />
    </div>
  );
}

export default App;
```

## Folder Structure :

You can organize your code using a folder structure like the following:

```
my-app/
  ├── src/
  |     ├── components/
  |     |     ├── Greeting.js
  |     |
  |     ├── App.js
  |
  ├── public/
  |     ├── index.html
  |
  ├── package.json
  |
  ├── README.md
  |
  ├── node_modules/
  |
  └── (other configuration files)
```

**Explanation of each folder and file:**

- `src/`: This is the main source code directory where your React components and application logic reside.

  - `components/`: You can create a subdirectory within `src` to store your React components. In this example, `Greeting.js` is a component file.

- `public/`: This folder contains static assets and the main HTML file for your React application.

  - `index.html`: The main HTML file where your React app is mounted. It typically includes a `<div>` element with an `id` where your React app will be rendered.

- `package.json`: The configuration file for your Node.js project, which includes dependencies, scripts, and other project settings.

- `README.md`: A markdown file containing documentation and information about your project.

- `node_modules/`: This is where your project's dependencies are installed. You don't need to manage this directory manually; it's created and populated automatically when you run `npm install`.

You would place your `Greeting.js` component in the `components/` folder, and your `App.js` file in the `src/` directory. Make sure to import and use them appropriately in your React application.

# Tasks:

1. Write a React component that accepts a name prop and displays a greeting to the user.
2. Write a React component that accepts a list prop and displays a list of items.
3. Write a React component that accepts a buttonClicked prop and calls a function when the button is clicked.
4. Write a React component that accepts a counter prop and displays a counter that can be incremented and decremented.
5. Write a React component that accepts a color prop and displays a div with the specified background color.