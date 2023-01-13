// React components are functions that return set of elements
// Each component must have only one parent
// Each function is written inP Pascal format (First Letter Is Captial)
import React from "react";
import logo from "./logo192.png";
function App() {
  return (
    <div className="content">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} className="nav-logo" alt="react-logo" />
        <ul className="navbar">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
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
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer>
        <code>© 2023 Rtm development. All rights reserved.</code>
      </footer>
    </>
  );
}
export default App;
