import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { UserContext } from '../../App';
import AddReview from '../Admin/AddReview/AddReview';
import AddService from '../Admin/AddService/AddService.js';
import AllOrder from '../Admin/AllOrder/AllOrder';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageProduct from '../Admin/ManageProduct/ManageProduct';
import Checkout from '../Customer/Checkout/Checkout';
import Order from '../Customer/Order/Order';
import './Dashboard.css';
import Profile from './Profile/Profile';
import Sidebar from './Sidebar/Sidebar';


const Dashboard = () => {
    const [adminLoading, setAdminLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const { path, url } = useRouteMatch();

    const {pathname} = useLocation();

    const [ loggedUser] = useContext(UserContext);
    console.log('dash',isAdmin,);
    console.log('load',adminLoading);
    const history = useHistory();

    const [navbarToggler, setNavbarToggler] = useState(false);

    const { photo } = loggedUser;


    useEffect(() => {
        document.title = 'Dashboard';
    }, [])

    useEffect(() => {
        axios.get(`https://thawing-ravine-07119.herokuapp.com/admin?email=${loggedUser?.email}`)
          .then(res => {
            if (res.data[0]){
              setIsAdmin(true);
              setAdminLoading(false);
            }
          })
          .catch(error => console.log(error.message))
      }, [loggedUser?.email]);
      
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-lg-3 col-xl-2 position-relative">
                    <Sidebar navbarToggler={navbarToggler} url={url} setNavbarToggler={setNavbarToggler} isAdmin={isAdmin} />
                </div>
                <div className="col-lg-9 col-xl-10">
                    <div className="top-bar d-flex align-items-center justify-content-between py-2 px-3 mt-3 radius sticky-top">
                        <div onClick={() => setNavbarToggler(true)} className="navbar-toggler d-lg-none" type="button">
                            <div className="toggler-icon" />
                        </div>
                        <h4 className='mt-2 ps-lg-3'>
                            {pathname?.split('/')[2]?.split(/(?=[A-Z])/)?.join(' ').toUpperCase()||'PROFILE'}
                        </h4>
                        <img onClick={()=> history.push('/dashboard')} src={photo} className="user-logo" alt="" />
                    </div>
                    <Switch>
                        <Route exact path={path}>
                            <Profile />
                        </Route>
                        <Route path={`${path}/checkout/:id`}>
                            <Checkout/> 
                        </Route>
                        <Route path={`${path}/order`}>
                            <Order/>
                        </Route>
                        <Route path={`${path}/addReview`}>
                        <AddReview/>
                        </Route>
                        {isAdmin &&
                        <Route path={`${path}/allOrders`}>
                            <AllOrder/>
                        </Route>}
                        {isAdmin &&
                        <Route path={`${path}/addProduct`}>
                          <AddService/>
                        </Route>}
                        {isAdmin &&
                        <Route path={`${path}/manage`}>
                            <ManageProduct/>
                        </Route>}
                        {isAdmin &&
                        <Route path={`${path}/addAdmin`}>
                            <MakeAdmin/>
                        </Route>}
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
