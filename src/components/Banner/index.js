import React from 'react';
import PropTypes from 'prop-types';
import background from '../../img/baner.jpg';

function Banner(props) {
  return (
    <div
      className="block w-full pt-[40%] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
      // eslint-disable-next-line react/jsx-closing-tag-location
    ></div>
  );
}

Banner.propTypes = {};
export default Banner;
