import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

const jsvariable = <h1>JSX from variable</h1>

const Subtitle = () => {
  return (
    <div>
      <h1>JSX using Return</h1>
    </div>
  )
}

const count = 1000;

// Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Subtitle/>
    {Title()}
    {jsvariable}
    <h1>{count}</h1>
    <h1>Namaste React using Functional Component 🚀</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
