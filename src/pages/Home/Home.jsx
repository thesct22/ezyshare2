import React from 'react';

import { Link } from 'react-router-dom';

/**
 * @returns {React.ReactElement} - The Home page component
 */
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/send">Send</Link>
      <Link to="/receive">Receive</Link>
    </div>
  );
}

export default Home;
