import Profile from './profile/Profile';
import user from '../data/user.json';

import Statistics from './statistics/Statistics';
import data from '../data/data.json';

import FriendList from './friend-list/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './transactions/TransactionHistory';
import transactions from '../data/transactions.json';

// this string for check git

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        name={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        followers={user.stats.followers}
        likes={user.stats.likes}
        views={user.stats.views}
      />
      <Statistics title="Upload stats" schedule={data} />
      <FriendList list={friends} />
      <TransactionHistory list={transactions} />
    </div>
  );
};
