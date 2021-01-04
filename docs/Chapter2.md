# Components and Props

There are two types of components in React namely, Functional Components and Class Components

**Functional Components**

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element.

**Class Components**

To define class components we use ES6 class to define a component.

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Rendering a Component

Previously we only used HTML tags to render a component, but we can also use individual components
to render elements.

```diff
+ function Welcome(props) {
  return <h1>Hello, {props.name} {props.value}</h1>;
}

+ const element = <Welcome name="Sara" value={2} />;

ReactDOM.render(element, document.getElementById("root"));
```

> NOTE: Always start component names with capital letter.
> React treats components starting with lowercase letters as DOM tags.

## Composing Components

Just like we use DOM tags to create a component, we can also use individual components inside other
components to compose componets.

Lets see an example for this.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

Typically, new React apps have a single `App` component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like `Button` and gradually work your way to the top of the view hierarchy.

## Extracting Components

Its always a good practice to extract components to smaller componets. Don’t be afraid to split components into smaller components.

Lets see an example on how to split components

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

Here we have `Comment` component. It accepts `author`, `text` and `date` as props. Its hard to reuse the individual parts of this components. Lets split this component into smaller parts

First lets extract `Avatar` ( Not the movie Avatar ;) )

```js
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}
```

To make it more generic we renamed `author` prop to `user` to make it more generic. Now we can use this component anywhere.

We can now simplify `Comment` a tiny bit.

```diff
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
+        <Avatar user={props.author} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

Next, we will extract a `UserInfo` component that renders an `Avatar` next to the user’s name:

```js
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}
```

This lets us simplify `Comment` even further.

```diff
function Comment(props) {
  return (
    <div className="Comment">
+      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

Extracting components might seem like a boring work, but reusable code makes it easier to maintain
larger codebase.

> NOTE: props are read-only.
