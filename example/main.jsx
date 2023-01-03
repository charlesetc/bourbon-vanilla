function Counter() {
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
root.appendChild(<Counter />);
