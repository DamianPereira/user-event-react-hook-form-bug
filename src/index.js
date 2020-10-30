import * as React from "react";
import { render } from "react-dom";
import DropdownForm from "./DropdownForm";

function App() {
  return (
    <div>
      <DropdownForm />
    </div>
  );
}

render(<App />, document.getElementById("root"));
