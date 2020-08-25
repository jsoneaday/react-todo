import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/AppState';

const Greeting = () => {
    const user = useSelector((state: AppState) => state.user);

    return (<div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
    <strong>{`Hello, ${user?.userName}`}</strong>
  </div>);
}

export default Greeting;