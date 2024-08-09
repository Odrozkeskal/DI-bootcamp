import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../features/ageSlice';
import logo from '../logo.svg'; 
const AgeCounter = () => {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.age.value);
  const loading = useSelector((state) => state.age.loading);

  return (
    <div>
      <h1>Age: {age}</h1>
      {loading && <img src={logo} alt="loading" />}
      <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
      <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
    </div>
  );
};

export default AgeCounter;