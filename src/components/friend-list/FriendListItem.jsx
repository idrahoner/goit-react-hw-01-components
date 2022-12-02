import PropTypes from 'prop-types';
import css from 'components/friend-list/FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span
        className={`${css.activeStatus} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name + ' avatar'}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
