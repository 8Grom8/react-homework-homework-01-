import React from 'react';
import FriendListItem from './friendListItem/FriendListItem';
import { FriendlistNav } from './friendListItem/friendListItemStyled';


const FriendList = ({friends}) => {
    return ( 
    <FriendlistNav>
        {friends.map(friend => {
            return (<FriendListItem friend={friend} key={friend.id} />)
        })}
    </FriendlistNav>
        
    );
}

export default FriendList;