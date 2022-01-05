import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='centered'>
      <h3>Page Not Found!</h3>

      <Link to='/quotes' className='btn'>
        Back to Quotes
      </Link>
    </div>
  );
}

export default NotFound;
