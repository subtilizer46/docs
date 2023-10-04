```
Created by : Dhiraj Kr
```


## What is Props?

* In React.js, "props" is a commonly used abbreviation for "properties." Props are a fundamental concept that allows you to pass data from a parent component to a child component. 

# Points to understand:

1. Props (short for properties) are a way to pass data from one React component to another.

2. Props are **immutable**, meaning they cannot be changed by the child component that receives them.

3. Props are defined as attributes in JSX and are passed down as an object to child components.

4. Props allow for the **communication and sharing of data between different parts of your application**.

5. Props are similar to function arguments, as they provide input data to a component.

6. You can pass any JavaScript data type as props, including strings, numbers, objects, arrays, functions, and more.

7. Props are read-only and should not be modified directly within the receiving component. This helps maintain a unidirectional data flow.

8. To access props in a functional component, you can use the `props` parameter in the component's function.

9. In a class component, you can access props using `this.props`.

10. Props are an essential mechanism for creating reusable and composable components.

11. When a parent component updates its props, all child components receiving those props will re-render with the new data.

12. You can give props any name you like, but it's a common convention to use descriptive names that make the code more readable.

13. Props are used for customizing and configuring child components based on the parent component's data.

14. Props are useful for passing callbacks from a parent component to a child component, allowing child components to trigger actions in the parent.

15. You can pass multiple props to a component by separating them with attributes in JSX.

16. Default values can be set for props in case they are not provided by the parent component.

17. PropTypes or TypeScript can be used to specify and enforce the data types of props for better code quality and error prevention.

18. Props can be nested, meaning you can pass objects or arrays as props, containing more props inside.

19. React components can have both state and props, with state representing internal component data and props representing external data.

20. The use of props helps create a clear separation of concerns in your React application, making it easier to manage and maintain.

**Conclustion**
* Effectively use props in React is crucial for building dynamic and interactive user interfaces. 
* Props enable you to create modular and reusable components that can be easily composed to construct complex UIs.