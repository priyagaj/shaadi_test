import React,{useState,useEffect} from 'react';
import './UserCard.css'
const UserCard = ({user}) => {
    const {name,email} = user;
    
    return(
        <div className='userCardDiv'> 
            <img src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options%5Bmood%5D%5B%5D=happy`} width='150' />
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}



export default UserCard;