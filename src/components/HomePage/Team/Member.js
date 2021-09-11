import React from 'react';
import './Team.css';

const Member = ({team}) => {
    return (
        <div className='team-member'>
            <img style={{height:'300px'}} src={team.img} alt="..." />
            <h5>{team.name}</h5>
        </div>
    );
};

export default Member;