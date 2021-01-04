# Introduction to JSX

In react we use jsx syntax to write HTML inside our JS/TS files. The filename for writing JSX
is `jsx` and `tsx` ( for TypeScript)

## Why JSX ?

Instead of seperating HTML and JS logic in seperate files. React lets us keep both JS and HTML logic in one file named JSX.

This is a sample syntax for JSX.

```js
const element = <h1>Hello, world!</h1>;
```

With that out of the way. Let's learn more about JSX.

## Embedding Expressions in JSX

```js
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

We can put any valid JavaScript expressions between `{ here }`. For example, `2 + 2`, `user.firstName`, or `formatName(user)` are all valid JavaScript expressions.

## JSX is an Expression Too

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

You can learn more about JSX [Here](https://reactjs.org/docs/introducing-jsx.html)
