import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is namaste react 🚀!"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "By Nanda kishor palei!"
);

const child = React.createElement("div", {}, [heading, heading2]);
const parent = React.createElement("div", { id: "parent" }, [child, child]); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
