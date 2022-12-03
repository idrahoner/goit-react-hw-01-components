import PropTypes from 'prop-types';
import FriendListItem from 'components/friend-list/FriendListItem';
import css from 'components/friend-list/FriendList.module.css';

export default function FriendList({ list }) {
  return (
    <ul className={css.friendList}>
      {list.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
