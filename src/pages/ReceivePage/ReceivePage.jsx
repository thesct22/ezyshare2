import React from 'react';

import { Link } from 'react-router-dom';

/**
 * @returns {React.ReactElement} - The Receive page component
 */
function ReceivePage() {
  return (
    <div>
      <h1>Receive Page</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default ReceivePage;
