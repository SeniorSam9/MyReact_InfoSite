import React from "react";
import logo from "./logo192.png";
import "./App.css";
// React components are functions that return set of elements
// Each component must have only one parent
function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} width="40px" alt="react-logo" />
      </nav>
    </header>
  );
}

function Content() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>
        <code>© 2023 Rtm development. All rights reserved.</code>
      </footer>
    </div>
  );
}
export default App;
