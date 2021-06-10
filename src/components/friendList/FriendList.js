import React from 'react';
import FriendListItem from './friendListItem/FriendListItem';
import { FriendlistNav } from './friendListItem/friendListItemStyled';
import PropTypes from "prop-types";


const FriendList = ({ friends }) => {
    return (
        <FriendlistNav>
            {friends.map(friend => {
                return (<FriendListItem friend={friend} key={friend.id} />)
            })}
        </FriendlistNav>
        
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;