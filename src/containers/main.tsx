import React from "react";
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Hey, you are logged in!</h1>
      <Link to='/home'><button>Click Here</button></Link>
    </div>
  );
};

export default Dashboard;
