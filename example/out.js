(() => {
  // ../jsx-runtime.js
  var appendChildren = (parent, children) => {
    if (Array.isArray(children)) {
      for (const child of children) {
        appendChildren(parent, child);
      }
    } else {
      let child = children;
      parent.appendChild(
        child?.nodeType ? child : document.createTextNode(child)
      );
    }
  };
  function jsx(tag, { children, ...props }) {
    if (typeof tag === "function") {
      return tag(props, children);
    }
    console.log(tag);
    const element = document.createElement(tag);
    Object.entries(props || {}).forEach(([name, value]) => {
      if (name.startsWith("on") && name.toLowerCase() in window) {
        element.addEventListener(name.toLowerCase().substr(2), value);
      } else {
        element.setAttribute(name, value);
      }
    });
    appendChildren(element, children);
    return element;
  }
  var jsxs = jsx;

  // main.jsx
  function Counter() {
    let count = 0;
    let countSpan = /* @__PURE__ */ jsx("span", { children: count });
    function setCount(newCount) {
      count = newCount;
      countSpan.textContent = count;
    }
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "Count: ",
        countSpan
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: (e) => setCount(count + 1), children: "+" }),
      /* @__PURE__ */ jsx("button", { onClick: (e) => setCount(count - 1), children: "-" })
    ] });
  }
  var root = document.getElementById("root");
  root.appendChild(/* @__PURE__ */ jsx(Counter, {}));
})();
