# Bourbon Vanilla

Hi!

Ever want to write vanilla JS but miss JSX? Today is your day!

This is what it looks like to use Bourbon Vanilla:

```jsx
function App() {
    let count = 0
    let countSpan = <span></span>

    function setCount(newCount) {
        count = newCount
        countSpan.textContent = count
    }

    <div>
        <p>Count: {countSpan}</p>
        <button onClick={(e) => setCount(count + 1)}>+</button>
        <button onClick={(e) => setCount(count - 1)}>-</button>
    </div>
}

const root = document.findElementById("root")
root.appendChild(<App />)
```

And here's one way to compile this:

```bash
esbuild src/main.jsx \
    --jsx-import-source=bourbon-vanilla \
    --jsx=automatic
```

I would expect most other bundlers to support a similar configuration.

That's all! 🥳
