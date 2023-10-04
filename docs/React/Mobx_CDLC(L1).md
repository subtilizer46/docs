MobX is a powerful state management library that can be used to simplify the development of complex React applications.

# 001_Steps
```javascript
// TodoStore.js
import { makeAutoObservable } from "mobx";

class TodoStore {
  @observable todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(task) {
    this.todos.push({ task, completed: false });
  }

  toggleTodo(todo) {
    todo.completed = !todo.completed;
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
```

## 002_Steps
```jsx
// TodoList.js
import React from "react";
import { observer } from "mobx-react";
import TodoStore from "./TodoStore";

const todoStore = new TodoStore();

const TodoList = observer(() => {
  const { todos } = todoStore;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => todoStore.toggleTodo(todo)}
          />
          {todo.task}
        </li>
      ))}
    </ul>
  );
});
```

## 003_Steps
```jsx
// App.js
import React from "react";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
```

To run this application, you can install the `mobx` and `mobx-react` packages and then start a development server:

## 004_Steps

```
npm install mobx mobx-react
npm start
```

## 005_Steps
Once the development server is running, you can open your web browser and navigate to `http://localhost:3000` to see the application.


To add a new to-do item, simply type the task into the input field and press `Enter`. To mark a to-do item as complete, click the checkbox next to it. To remove a to-do item, click the trash can icon next to it.

