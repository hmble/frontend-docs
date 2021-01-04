# State and Lifecycle

Lets add state to our class component

Suppose we have a class componet named `Clock`.

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Instead of using date as a prop, we can convert convert date to local state.

```diff
class Clock extends React.Component {
+  constructor(props) {
+    super(props);
+    this.state = { date: new Date() };
+  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
+        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Now we will make Clock update itself every second.

Here comes the beast of React ( Lifecycle methods ).

## Adding Lifecycle Methods to a Class

Today we will learn about two most used lifecycle methods `componentDidMount()` and `componentWillUnmount()`

**componentDidMount()**

React calls this function whenever the component renders on DOM for the first time.

**componentWillUnmount()**

React calls this function whenever the component leaves DOM.

Lets see how we can use this components.

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // Call tick function after every second.
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // remove timer after update
    clearInterval(this.timerID);
  }

  tick() {
    // set local state date.
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
```
