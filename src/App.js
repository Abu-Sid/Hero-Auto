import AOS from "aos";
import "aos/dist/aos.css";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
const Checkout = lazy(()=> import ("./components/Customer/Checkout/Checkout"));
const Dashboard = lazy(()=> import("./components/Dashboard/Dashboard"));
const Home = lazy(()=> import("./components/HomePage/Home/Home"));
const Login = lazy(()=> import("./components/Login/Login"));
const PrivateRoute = lazy(()=> import("./components/PrivateRoute/PrivateRoute"));


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
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </Router> 
    </UserContext.Provider>
  );
}


export default App;