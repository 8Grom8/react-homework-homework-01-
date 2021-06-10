import React from 'react';
import PropTypes from "prop-types";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  
  return (
    <div className={css.container}>
      <div className={css.card}>
        <div className={css.card_description}>
          <img src={avatar} alt={name} className={css.img} />
          <p className={css.card_name}>{name}</p>
          <p className={css.card_tag}>{tag}</p>
          <p className={css.card_location}>{location}</p>
        </div>

        <ul className={css.list}>
          <li className={css.list_item}>
            <span className={css.list_item_text}>Followers</span>
            <span className={css.list_item_number}>{stats.followers}</span>
          </li>
          <li className={css.list_item}>
            <span className={css.list_item_text}>Views</span>
            <span className={css.list_item_number}>{stats.views}</span>
          </li>
          <li className={css.list_item}>
            <span className={css.list_item_text}>Likes</span>
            <span className={css.list_item_number}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;