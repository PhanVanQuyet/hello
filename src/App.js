import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages/home/Home";
import {useState} from "react";
import NotPager from "./pages/404 page/NotPager";
import SignIn from "./views/SignIn/SignIn";

function App() {

    const [isLog, setIsLog] = useState(false)

    const handleSignIn = () => setIsLog(!isLog)

  return (
    <Router>
        <Switch>
            <Route exact path='/' render={() => !isLog ? <SignIn isLog={handleSignIn} /> : <Home handleSi={handleSignIn} />}></Route>
            <Route path='*'>
                <NotPager />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
