import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => (
<>
<h1>Home</h1>
<ul>
<li key="1">
<Link to="/first-page">First Page</Link>
</li>
<li key="2">
<Link to="/second-page">Second Page</Link>
</li>
  <li key="3">
<Link to="/third-page">third Page</Link>
</li>
  <li key="4">
<Link to="/fourth-page">fourth Page</Link>
</li>
</ul>
</>
);

const FirstPage = () => (
<>
<h1>First Page</h1>
<Link to="/">Go back Home</Link>
</>
);

const SecondPage = () => (
<>
<h1>Second Page</h1>
<Link to="/">Go back Home</Link>
</>
);

const ThirdPage = () => (
<>
<h1>Third Page</h1>
<Link to="/">Go back Home</Link>
</>
);

const FourthPage = () => (
<>
<h1>Fourth Page</h1>
<Link to="/">Go back Home</Link>
</>
);
function App() {
console.log(process.env.NODE_ENV);
return (
<BrowserRouter>
<Route exact path="/" component={Home} />
<Route path="/first-page" component={FirstPage} />
<Route path="/second-page" component={SecondPage} />
<Route path="/third-page" component={SecondPage} />
<Route path="/fourth-page" component={SecondPage} />
</BrowserRouter>
);
}

export default App;
