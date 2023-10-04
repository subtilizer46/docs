# 001_Example: Passing Props from Parent to Child Component

**File Created by:** Dhiraj Kr

We will create two React components - a parent component (`ParentComponent`) and a child component (`ChildComponent`). We will pass a piece of text from the parent component to the child component using props.

## Folder Structure:

```
my-app/
  ├── src/
  │    ├── ParentComponent.js
  │    ├── ChildComponent.js
  │    └── App.js (Main application file)
  └── ...

```

## 1. Create Two Components

- **Parent component (`ParentComponent`):**
  This component is responsible for rendering the child component and passing the text prop.

- **Child component (`ChildComponent`):**
  This component receives the text prop from the parent component and displays it.

## 2. Passing Props

We'll pass a piece of text from the parent component to the child component using props.

### Code for ParentComponent.js:

```jsx
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const greetingText = "Hello from ParentComponent!";
  
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent text={greetingText} />
    </div>
  );
}

export default ParentComponent;
```

### Code for ChildComponent.js:

```jsx
// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default ChildComponent;
```

### Code for App.js

Here's a of an `App.js` file that renders the `ParentComponent`:

```jsx
// App.js
import React from 'react';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>React Props Example</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
```

In this `App.js` file:
- We import the `ParentComponent` component that we created earlier.
- Inside the `App` function component, we render the `ParentComponent` component.
- This `App` component serves as the main entry point for your React application.
- You should place this `App.js` file in your project directory and ensure that the folder structure and component imports match the previous code snippets for the example to work as intended.


**Explanation**

1. `ParentComponent` is the parent component that renders a `ChildComponent`.
2. `greetingText` is a string that we want to pass to the child component.
3. We pass the `greetingText` to the child component as a prop named `text`.

When `ParentComponent` renders `ChildComponent`, it provides the `text` prop with the value of `greetingText`. The child component, in turn, receives and displays this prop in its output.

So, when you render `ParentComponent`, you'll see "Hello from ParentComponent!" displayed within `ChildComponent`.
