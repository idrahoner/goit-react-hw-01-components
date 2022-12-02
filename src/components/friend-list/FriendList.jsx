import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ list }) {
  return (
    <ul className={css.friendList}>
      {list.map(element => (
        <FriendListItem
          key={element.id}
          avatar={element.avatar}
          name={element.name}
          isOnline={element.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
