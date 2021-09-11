import { faCommentDots, faHome, faPlusCircle, faShoppingBasket, faSignOutAlt, faSort, faThLarge, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import { userSignOut } from '../../Login/auth';
import './Sidebar.css';


const Sidebar = ({url, navbarToggler, setNavbarToggler,isAdmin}) => {

    const [loggedUser,setLoggedUser] = useContext(UserContext);
    const history = useHistory();
    const handleSignOut = () => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you logging out",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                userSignOut()
                .then(() => {
                    let currentUser = { ...loggedUser };
                         currentUser = {};
                    setLoggedUser(currentUser)
                    swal("Logged Out Successfully!", {
                        icon: "success",
                    });
                    history.push('/')
                })
            }
          });
    };

    const handleHome = () => {
        window.scrollTo(0, 0);
        setNavbarToggler(false);
    }

    return (
        <nav className={`sidebar ${navbarToggler?'active':''} py-4 px-2 navbar-expand-lg navbar-light`}>
            <div className='d-flex align-items-center justify-content-between'>
                <h4 className='text-white ms-2 mt-2 mt-lg-0'>Dashboard</h4>
                <div onClick={() => setNavbarToggler(false)} className="navbar-toggler d-lg-none pe-2" type="button">
                    <div className="toggler-icon toggler-active" />
                </div>
            </div>
            <div className="navbar-collapse">
            <ul className="nav flex-column">
                <li className={isAdmin?"nav-item mt-2":"nav-item mt-2 side-item"}>
                    <NavLink exact={true} activeClassName='sidebar-active' to={url} className="nav-link text-white" onClick={() => setNavbarToggler(false)}>
                        <FontAwesomeIcon icon={faUserCircle} />
                        <span className='ms-2'>Profile</span>
                    </NavLink>
                </li>
                <li className="nav-item mt-2">
                    <NavLink activeClassName='sidebar-active' to={`${url}/order`} className="nav-link text-white" onClick={() => setNavbarToggler(false)}>
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        <span className='ms-2'>Order</span>
                    </NavLink>
                </li>
                {isAdmin &&
                <li className="nav-item mt-2">
                    <NavLink exact={true} activeClassName='sidebar-active' to={`${url}/allOrders`} className="nav-link text-white" onClick={() => setNavbarToggler(false)}>
                        <FontAwesomeIcon icon={faSort} />
                        <span className='ms-2'>Order List</span>
                    </NavLink>
                </li>}
                {isAdmin &&
                <li className="nav-item mt-2">
                    <NavLink exact={true} activeClassName='sidebar-active' to={`${url}/addProduct`} className="nav-link text-white" onClick={() => setNavbarToggler(false)}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <span className='ms-2'>Add Service</span>
                    </NavLink>
                </li>}
                {isAdmin &&
                <li className="nav-item mt-2">
                    <NavLink exact={true} activeClassName='sidebar-active' to={`${url}/manage`} className="nav-link text-white" onClick={() => setNavbarToggler(false)}>
                        <FontAwesomeIcon icon={faThLarge} />
                        <span className='ms-2'>Manage Service</span>
                    </NavLink>
                </li>}
                {isAdmin &&
                <li className="nav-item mt-2">
                    <NavLink exact={true} activeClassName='sidebar-active' to={`${url}/addAdmin`} className="nav-link text-white" onClick={() => setNavbarToggler(false)}>
                        <FontAwesomeIcon icon={faThLarge} />
                        <span className='ms-2'>Make Admin</span>
                    </NavLink>
                </li>}
                <li className="nav-item mt-2">
                    <NavLink exact={true} activeClassName='sidebar-active' to={`${url}/addReview`} className="nav-link text-white" onClick={() => setNavbarToggler(false)}>
                        <FontAwesomeIcon icon={faCommentDots} />
                        <span className='ms-2'>Add Review</span>
                    </NavLink>
                </li>
                <li onClick={handleSignOut} className="nav-item mt-2 text-white  d-flex align-items-center">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className='ms-2'>Log Out</span>
                </li>
                <li className="nav-item position-absolute bottom btn">
                    <Link to='/' className="nav-link text-white" onClick={handleHome}>
                        <FontAwesomeIcon icon={faHome} />
                        <span className='ms-2'>Go To Home</span>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Sidebar;