import Layout from "../Layout";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Dashboard from "../../views/Dashboard/Dashboard";
import Employess from "../../views/employess/Employess";

const Home = ({handleSi}) => {
    return (
        <Router>
            <Layout handleLogged={handleSi} >
                <Switch>
                    <Route exact path='/dashboard'>
                        <Dashboard />
                    </Route>
                    <Route exact path='/employess'>
                        <Employess />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    )
}

export default Home