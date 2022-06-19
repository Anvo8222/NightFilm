/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { imageURL } from '../../config/url';

function MovieTheaterList({ theaterMovie }) {
  return (
    <div className="w-[50%] sm:w-full">
      <div className="h-[46px] bg-boderColorLayout">
        <h3 className="text-center leading-[46px] text-primaryTextColor font-bold">PHIM CHIẾU RẠP</h3>
      </div>
      <ul className="pl-0">
        {theaterMovie?.map((item) => (
          <li
            key={item._id}
            className="h-[50px] group mt-[10px] border-b border-solid border-borderItemWhiteColor last:border-0 relative"
          >
            <div className="h-[40px] flex justify-between">
              <div className="flex cursor-pointer">
                <img
                  className="w-[38px] h-[38px] border border-solid border-borderItemWhiteColor"
                  src={imageURL + item.thumb_url}
                  alt={item.thumb_url}
                />
                <div className="pl-[10px] flex flex-col w-[210px] max-w-[210px]">
                  <span className="text-[14px] block shortNameThreeDotOneLine text-textWhiteColor group-hover:text-primaryTextColor">
                    {item.name}
                  </span>
                  <span className="text-[12px] block shortNameThreeDotOneLine text-textWhiteColor ">
                    {item.origin_name}
                  </span>
                </div>
              </div>
              <span className="mr-[10px] leading-10 block text-[12px] text-textWhiteColor">
                {item.year}-{item.quality}
              </span>
            </div>
            <span className="absolute border hidden group-hover:block border-borderItemWhiteColor text-[12px] px-4 rounded border-solid top-[70%] z-10 left-[30%] bg-textWhiteColor ">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieTheaterList.propTypes = {
  theaterMovie: PropTypes.array,
};
export default MovieTheaterList;
