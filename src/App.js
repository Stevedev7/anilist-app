import './App.css';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Landing from './pages/LandingPage';
import Home from './pages/HomePage';
import Callback from './pages/CallbackPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        {/* <Redirect to="/home" /> */}
                        <Landing/>
                    </Route>

                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/callback">
                        <Callback />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
