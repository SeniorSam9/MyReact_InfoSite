// React components are functions that return set of elements
// Each component must have only one parent
// Each function is written inP Pascal format (First Letter Is Captial)
import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
export default function App() {
  return (
    <div className="content">
      <Navbar />
      <Main />
    </div>
  );
}
