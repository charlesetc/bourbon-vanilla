// From this blog post: https://dev.to/devsmitra/how-to-create-the-app-using-jsx-without-react-k08

export function Fragment(props, children) {
  let fragment = document.createDocumentFragment();
  if (Array.isArray(children)) {
    for (const child of children || []) {
      fragment.appendChild(child);
    }
  } else if (children === undefined || children === null) {
    // do nothing
  } else {
    fragment.appendChild(children);
  }
  return fragment;
}

const appendChildren = (parent, children) => {
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

export function jsx(tag, { children, ...props }) {
  if (typeof tag === "function") {
    return tag(props, children);
  }
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

export const jsxs = jsx;
