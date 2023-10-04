```
Created by : Dhiraj Kr
File Created on : 01-06-2023
```

# Looping in ReactJS

Define an array with employee names and loop through it to display the results in the console using ReactJS:


## First_Way: Using For Each

```
import React from 'react';

function EmployeeList() {
  // Define an array with employee names
  const employees = ["John Smith", "Jane Doe", "Tom Johnson", "Alice Brown"];

  // Loop through the array and display each employee name in the console
  employees.forEach((employee, index) => {
    console.log(`Employee ${index + 1}: ${employee}`);
  });

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;

```

**Explanation**
1. We define an array called `employees` with some employee names.
2. We use the `forEach` method to loop through the array and display each employee name in the console.
3. We also render the employee names in an unordered list (`<ul>`) using the `map` method in the JSX.

## Second_Way - Using Map function:

```
import React from 'react';

function App() {
  // Define an array with employee names
  const employees = ["John Smith", "Jane Doe", "Tom Johnson", "Alice Brown"];

  // Loop through the array and display each employee name in the console
  employees.forEach((employee, index) => {
    console.log(`Employee ${index + 1}: ${employee}`);
  });

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```


# Third Way: Using push function

```
import React from 'react';

function EmployeeList() {
  // Define an array with employee names
  const employees = ["John Smith", "Jane Doe", "Tom Johnson", "Alice Brown"];

  // Create an empty array to store the JSX elements
  const employeeElements = [];

  // Loop through the employee names array and create JSX elements
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    employeeElements.push(<li key={i}>{employee}</li>);
    console.log(`Employee ${i + 1}: ${employee}`);
  }

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employeeElements}
      </ul>
    </div>
  );
}

export default EmployeeList;

```

**Explanation**

1. We define an array of employee names called `employees`.
2. We create an empty array called `employeeElements` to store the JSX elements that will represent the employees in the list.
3. We use a `for` loop to iterate through the `employees` array, create an `<li>` element for each employee, and push it into the `employeeElements` array.
4. We also log each employee's name to the console during the loop.
5. Finally, we render the `employeeElements` array within the `<ul>` element in the JSX.


## Fourth Way : Using for...in 

```jsx
import React from 'react';

function EmployeeList() {
  // Define an array with employee names
  const employees = ["John Smith", "Jane Doe", "Tom Johnson", "Alice Brown"];

  // Loop through the array using for...in
  for (let index in employees) {
    const employee = employees[index];
    console.log(`Employee ${parseInt(index) + 1}: ${employee}`);
  }

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
```

**Explanation**:

1. We define an array called `employees` with employee names.
2. We use a `for...in` loop to iterate over the indices of the `employees` array. Note that we use `parseInt(index)` to convert the index to a number for logging purposes.
3. Inside the loop, we log each employee's name to the console.
4. We also render the employee names in an unordered list (`<ul>`) using the `map` method in the JSX, just like in previous examples.

## Firth Way: using a useEffect hook

```
import React, { useEffect } from 'react';

function EmployeeList() {
  // Define an array with employee names
  const employees = ["John Smith", "Jane Doe", "Tom Johnson", "Alice Brown"];

  useEffect(() => {
    // Loop through the array using for loop
    for (let index = 0; index < employees.length; index++) {
      const employee = employees[index];
      console.log(`Employee ${index + 1}: ${employee}`);
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;

```