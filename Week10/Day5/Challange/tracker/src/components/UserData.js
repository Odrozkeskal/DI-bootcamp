import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../features/userThunk';

const UserData = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default UserData;