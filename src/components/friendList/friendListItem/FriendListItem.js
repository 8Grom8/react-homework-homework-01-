import React from 'react';
import FriendList from "./FriendListItem"
import { FriendlistNav } from './friendListItemStyled';


const FriendListItem = ({friend}) => {
    return (
      <FriendlistNav status={ friend.isOnline}>
        {/* <li className="item"> */}
          <span className="status" />    
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        {/* </li> */}
        
      </FriendlistNav>
    );
};

export default FriendListItem;