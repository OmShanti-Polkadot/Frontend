import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Signin from './Signin';

const Topvavbar = () => {
  return (
    <div>
      <nav>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
            <li className=''>
                <NavLink to="/">Home</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="Signin">Sign In</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Topvavbar
