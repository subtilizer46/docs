# Redux in ReactJS:
## CounterApp In Redux

1. Create a new React project using `npx create-react-app my-redux-app`.
2. Install the Redux and React-Redux packages:

```
npm install redux react-redux
```

3. Create a `store` directory and a file called `index.js` inside it. Add the following code to the file:

```javascript
import { createStore } from 'redux';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
```

4. Create a `components` directory and a file called `Counter.js` inside it. Add the following code to the file:

```javascript
import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, dispatch }) => {
  const handleClick = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
```

5. Open the `App.js` file and update it to include the following code:

```javascript
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
```

6. Start the React development server:

```
npm start
```

7. Open a web browser and navigate to `http://localhost:3000`. You should see a counter with a value of 0.

8. Click the "Increment" button to increment the counter.
