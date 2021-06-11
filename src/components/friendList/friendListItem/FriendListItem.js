import React from 'react';
import { FriendlistNav } from './FriendListItemStyled';
import PropTypes from "prop-types";

const FriendListItem = ({friend}) => {
    return (
      <FriendlistNav status={ friend.isOnline}>
          <span className="status" />    
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
      </FriendlistNav>
    );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    
  }),
};

export default FriendListItem;