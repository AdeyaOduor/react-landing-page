import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./Home";
import AboutPage from "./About";
import StudentRegisterPage from "./StudentRegister";
import ServicesPage from "./Services";
import NotFoundPage from "./NotFound";

const Home = () => (
<>
<h1>Home</h1>
<ul>
<li key="1">
<Link to="/home-page">Home Page</Link>
</li>
<li key="2">
<Link to="/about-page">About Page</Link>
</li>
  <li key="3">
<Link to="/student-register-page">StudentRegister Page</Link>
  <li key="2">
<Link to="/contact-page">Contact Page</Link>
</li>
</li>
  <li key="4">
<Link to="/pagenotfound-page">PageNotFound Page</Link>
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
