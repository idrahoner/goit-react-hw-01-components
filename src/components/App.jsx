import Profile from './profile/Profile';
import user from '../data/user.json';

export const App = () => {
  return (
    <>
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
        React homework template
      </div>
    </>
  );
};
