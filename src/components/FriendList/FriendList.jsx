import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import { friendsImages } from 'assets';

export default function FriendList({ list }) {
  return (
    <ul className="friend-list">
      {list.map((element, index) => (
        <FriendListItem
          key={element.id}
          avatar={friendsImages[index]}
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
