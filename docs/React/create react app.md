## Creating ReactApp

1. Install node.js
2. Create a new reactjs app

```
npx create-react-app project
```

* Once everything went good,
you will get this message
```
Happy hacking!
```

Suggestion message:
We suggest that you begin by typing:

  cd project
  npm start

3. cd project

4. To start the development server
```
npm start
```

## What is full form of npm?
* node package manager


## Default port :3000
localhost:3000
127.0.0.1:3000

# Hello World in ReactJS

# External CSS

App.css
```
.redtext{
  color
}
```

App.js
```
import './App.css'

function App() {
  
  return (
    <h1 className="redtext"> Hello World</h1>  
  );
}

export default App;

```

# Internal CSS

```
import './App.css'

function App() {

  const redtext={
    color:'red'
  }
  
  return (
    <h1 style={redtext}> Hello World</h1>  
  );
}

export default App;

```

## Adding two number

```
function App() {
  
  const result=2;
  
  return (
    <div>
        <h1> {result}</h1>
    </div>  
  );
}

export default App;


```



function App() {
  
  const result=2+2;
  
  return (
    <div>
        <h1> {result}</h1>
    </div>  
  );
}

export default App;





