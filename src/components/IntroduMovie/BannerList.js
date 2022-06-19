/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import PropTypes from 'prop-types';

function BannerList(props) {
  return (
    <div className="w-[33%] sm:w-full md:w-full md:pl-[30%] sm:pl-[10%]">
      <div
        className="h-[150px] mb-[6px] max-h-full bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url("https://i.vietgiaitri.com/2013/8/6/chum-poster-chieu-moi-cua-lang-phim-trung-quoc-9868f7.jpg")`,
        }}
      ></div>
      <div
        className="h-[150px] mb-[6px] max-h-full bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url("https://i.vietgiaitri.com/2013/8/6/chum-poster-chieu-moi-cua-lang-phim-trung-quoc-9868f7.jpg")`,
        }}
      ></div>
    </div>
  );
}

BannerList.propTypes = {};
export default BannerList;
