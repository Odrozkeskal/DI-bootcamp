import React from 'react';

interface UserCardProps {
  name?: string;
  age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name = "Anonymous", age }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      {age !== undefined ? <p>Age: {age}</p> : <p>Age not provided</p>}
    </div>
  );
};

export default UserCard;
