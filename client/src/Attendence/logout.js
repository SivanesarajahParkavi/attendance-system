import React from 'react';

export const Attendance = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="logout-container">
      <h2>Welcome! </h2>
      <h4>You have logged in successfully.</h4>
      <p>Attendance has been recorded.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Attendance;



