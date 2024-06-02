import React from "react";
import ReactDOM from "react-dom/client";

//jsx => Babel transpiles it to React.createElement => ReactElement- JS object => HTMLElement(render on browser)
const Title = () => <h1 id="heading">Namaste react from jsx 🚀</h1>;

const HeadingComponent = () => (
  <div>
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
