const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world form react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
//
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am heading in under two div.."),
    React.createElement("h2", {}, "I am heading 2 in under two div.."),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am heading in under two div.."),
    React.createElement("h2", {}, "I am heading 2 in under two div.."),]
));

root.render(parent);
// heading will return object.
// render method will take this heading object and create h1 tag and put it inside root element
