import React from 'react';
import UserCard from './components/UserCard';

const App: React.FC = () => {
  return (
    <div>
      <UserCard name="John" age={30} />
      <UserCard name="Jane" />
      <UserCard />
    </div>
  );
};

export default App;
