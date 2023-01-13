// React components are functions that return set of elements
// Each component must have only one parent
// Each function is written inP Pascal format (First Letter Is Captial)
import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
function App() {
  return (
    <div className="content">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
