import React,{ useState } from 'react';
import Login from './Login/login';
import Attendence from './Attendence/logout';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app-container">
      {!isAuthenticated ? (
        <Login setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Attendence setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
};

export default App;
