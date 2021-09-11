import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './Profile.css';

const Profile = () => {
    const [loggedUser] = useContext(UserContext);
    const {displayName, photo,email} = loggedUser;
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center profile-container">
           <div className="text-center shadow p-4 radius profile">
                <img style={{height: '100px'}} className='radius' src={photo || 'https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/avatar.png'} alt="" />
                <h4 className="my-3">{displayName}</h4>
                <h6>{email}</h6>
                
                
           </div>
        </div>
        </div>
    );
};

export default Profile;