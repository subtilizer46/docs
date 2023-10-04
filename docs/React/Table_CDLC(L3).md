## To apply a background color to the particular row in your React table.

*You can achieve this by using CSS and conditionally applying a CSS class to the  row using JavaScript.

1. First, define a CSS class for the background color you want to apply to the second row. You can add this CSS class to your component's stylesheet or use inline styles.

```jsx
// src/Table.css
.second-row {
  background-color: #f0f0f0; /* Change this to your desired background color */
}
```

2. Import the CSS file in your `Table.js` component:

```jsx
import React from 'react';
import './Table.css'; // Import the CSS file
```

3. Update your `Table` component to conditionally apply the CSS class to the second row:

```jsx
const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id} className={index === 1 ? 'second-row' : ''}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
```

**Explanation:**
In the code above, we use the `map` function's `index` parameter to check if the current row is the second row (`index === 1`). If it is, we apply the `second-row` CSS class; otherwise, we don't apply any class, which means the default background color will be used.
