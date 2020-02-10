import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC  = props => {
  return (
    <div>
      <h1>Header</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/useronly'>UserOnly</Link></li>
        <li><Link to='/signin'>SingIn</Link></li>
        <li><Link to='/signUp'>SingUp</Link></li>
      </ul>
    </div>
  )
}

export default Header;
