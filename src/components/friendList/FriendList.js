import React from 'react';
import FriendListItem from './friendListItem/FriendListItem';
import PropTypes from "prop-types";
import { FriendlistUl } from './FriendListStyled';


const FriendList = ({ friends }) => {
    return (
        <FriendlistUl>
            {friends.map(friend => {
                return (<FriendListItem friend={friend} key={friend.id} />)
            })}
        </FriendlistUl>
        
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;