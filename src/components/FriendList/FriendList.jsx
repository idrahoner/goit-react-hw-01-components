import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

import { friendsImages } from 'assets';

export default function FriendList({ list }) {
  return (
    <ul className={css.friendList}>
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
