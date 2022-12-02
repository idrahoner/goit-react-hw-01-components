import Profile from './Profile/Profile';
import user from 'data/user.json';

import Statistics from './Statistics/Statistics';
import data from '../data/data.json';
import { filterFormats } from 'components/utils';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './Transactions/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
      <Statistics title="Upload stats" schedule={filterFormats(data)} />
      <FriendList list={friends} />
      <TransactionHistory list={transactions} />
    </div>
  );
};
