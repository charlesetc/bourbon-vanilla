# Bourbon Vanilla

Hi!

Ever want to write vanilla JS but miss JSX? Today is your day!
Bourbon Vanilla lets you create DOM elements with JSX.
No reactivity, no magic: that part is up to you 🔮

## Example

This is what it looks like to use Bourbon Vanilla:

```jsx
function App() {
  let count = 0;
  let countSpan = <span>{count}</span>;

  function setCount(newCount) {
    count = newCount;
    countSpan.textContent = count;
  }

  return (
    <div>
      <p>Count: {countSpan}</p>
      <button onClick={(e) => setCount(count + 1)}>+</button>
      <button onClick={(e) => setCount(count - 1)}>-</button>
    </div>
  );
}

const root = document.getElementById("root");
root.appendChild(<App />);
```

And here's one way to compile this:

```bash
esbuild src/main.jsx \
    --jsx-import-source=bourbon-vanilla \
    --jsx=automatic
```

Other bundlers should support something similar.

## Install

```
npm install bourbon-vanilla
```

That's everything! 🥳
