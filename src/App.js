import './App.css';
import Nav from './components/Nav';
import SideBarLeft from './components/SideBarLeft';
import SendOtp from './components/SendOtp';
import LoginPage from './components/LoginPage';
import RouterUrl from './router/RouterUrl';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav />
      <SideBarLeft /> */}
        <RouterUrl />
        {/* <LoginPage /> */}
      </div>
    </Router>

  );
}

export default App;
