# React Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

example

```js
import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

A must watch video.
[Hooks at Glance](https://www.youtube.com/watch?v=dpw9EHDh2bM)

There are two main concepts in hooks, `useState` and `useEffect`.

- useState():

  It is used to create local state in react component just like (this.state in class component).

- useEffect():
  This hooks handles all lifecycle methods. (componentDidMount, componentDidUpdate, componentWillUnmount).

```js
// Run on every render ( use with precaution )
useEffect(() => {
  console.log("I will run on every render.");
});

// componentDidMount
// Run only on first render
useEffect(() => {
  console.log("I am lazy and will only run on first render.");
}, []);

// componentDidUpdate
// Will everytime value of count changes.
useEffect(() => {
  console.log(`Count value changed to : ${count}`);
}, [count]);
```

Resources to learn more about hooks

1. [Official react guide](https://reactjs.org/docs/hooks-intro.html)
2. [Hooks at Glance](https://www.youtube.com/watch?v=dpw9EHDh2bM)
