import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Search from './Search';
import Login from './Login';
import { categories, countries, seriesMovie, years } from '../../data';

function Header(props) {
  return (
    <header className="fixed z-10 right-[0] top-[0] items-center left-[0] flex justify-between header h-[56px]">
      <NavBar categories={categories} countries={countries} seriesMovie={seriesMovie} years={years} />
      <div className="items-center mr-[10px] flex">
        <Search />
        <Login />
      </div>
    </header>
  );
}
Header.propTypes = {};
export default Header;
