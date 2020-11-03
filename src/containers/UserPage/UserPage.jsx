import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import StreakCounter from '../../components/StreakCounter/StreakCounter';

const UserPage = () => (
  <div>
    <StreakCounter />
    <Dashboard />
  </div>
);

export default UserPage;
