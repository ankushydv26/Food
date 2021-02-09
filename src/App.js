import React from "react"
import { BrowserRouter as Router,Switch  , Route } from "react-router-dom"
import LoginPage from "./component/Login"
import Dashboard from "./component/dashboard"
import Signup from "./component/Signup"
import {AuthProvider} from "./context/authContext"
import PrivateRoute from "./component/PrivateRoute"
function App() {
  return (  
      <div className="main">
          <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route  path="/login" component={LoginPage} />
              <Route  path="/signup" component={Signup} />  
            </Switch>
          </AuthProvider> 
        </Router>
      </div>
  );
}

export default App;
