import React from 'react';
import { Link } from 'react-router-dom';
import '../index';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/App',
      text: 'Calulator',
    },
    {
      id: 3,
      path: '/Quotes',
      text: 'Quotes',
    },
  ];

  return (
    <nav className="nav">
      <div className="navlinks p-8 text-center bg-white text-blue-500 w-full space-x-4 items-center align-middle flex justify-between">
        <h2 className="text-4xl font-raleway">Math Magicians</h2>

        <ul className="links flex justify-between w-1/3 space-x-8 font-nunito text-2xl">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path} activeClassName="active-link" exact>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Nav;
