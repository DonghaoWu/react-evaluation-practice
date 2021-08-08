import React from 'react';
import SelectOptions from './components/SelectOptions';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <div className="container">
      <UsersList />
      <SelectOptions />
    </div>
  );
};

export default App;
