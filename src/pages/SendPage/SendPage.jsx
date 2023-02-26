import React from 'react';

import { Link } from 'react-router-dom';

/**
 * @returns {React.ReactElement} - The Send page component
 */
function SendPage() {
  return (
    <div>
      <h1>Send Page</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default SendPage;
