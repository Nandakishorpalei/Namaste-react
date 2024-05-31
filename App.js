const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "Hello world from React!"
);

const child = React.createElement("div", {}, [heading, heading2]);
const parent = React.createElement("div", { id: "parent" }, [child, child]);

console.log(parent); // parent is a js object which have props, type and this object is a react element.
// ReactElement(object)=> HTML(BROWSER Understands)'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
