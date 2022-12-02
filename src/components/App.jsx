// import Profile from 'components/profile/Profile';
// import user from 'data/user.json';

// import Statistics from 'components/statistics/Statistics';
// import data from 'data/data.json';
// import { filterFormats } from 'components/utils';

// import FriendList from 'components/friend-list/FriendList';
// import friends from 'data/friends.json';

// import TransactionHistory from 'components/transactions/TransactionHistory';
// import transactions from 'data/transactions.json';

// const filteredData = filterFormats(data);

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
      {/* <Profile
        name={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" schedule={filteredData} />
      <FriendList list={friends} />
      <TransactionHistory list={transactions} /> */}
    </div>
  );
};
