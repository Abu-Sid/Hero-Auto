import AOS from "aos";
import "aos/dist/aos.css";
import { createContext, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Customer/Checkout/Checkout";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Spinner from "./components/Spinner/Spinner";

export const UserContext= createContext();

function App() {
  const [loggedUser,setLoggedUser]=useState({})
  const [orderProduct,setOrderProduct]=useState({})
useEffect(() => {
  AOS.init({
    duration : 2000
  });
  AOS.refresh();
}, []);
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser,orderProduct,setOrderProduct]}>
      <Router>
        <Suspense fallback={<Spinner />}></Suspense>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout/>
          </PrivateRoute>
          <Route path="*">
            <h1 style={{textAlign: "center", marginTop:'10rem'}}>page not found</h1>
          </Route>
        </Switch>
      </Router> 
    </UserContext.Provider>
  );
}


export default App;