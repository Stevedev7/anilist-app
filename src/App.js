import { useEffect, useState } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store'

import Landing from './pages/LandingPage';
import Home from './pages/HomePage';
import Callback from './pages/CallbackPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { apiCall } from './services/api';
import { getAuthorizedUser } from './services/queries';

import './App.css';
const App = () => {

    const [userId, setUserId] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() =>{    
        apiCall(getAuthorizedUser()).then(data => data['Viewer'].id).then(setUserId).catch(setError);
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            {
                                error
                                    ? <Redirect to="/home" />
                                    : <Landing/>
                            }
                        </Route>

                        <Route path="/home">
                            {
                                error=== null
                                    ? <Redirect to="/" />
                                    : <Home/>
                            }
                        </Route>
                        <Route path="/callback">
                            {
                                window.location.hash
                                    ? <Callback />
                                    : <Redirect to="/" />
                            }
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
