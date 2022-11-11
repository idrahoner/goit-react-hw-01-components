import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ list }) {
  return (
    <ul className="friend-list">
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
