/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { BsFillMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import StarRatings from 'react-star-ratings';
import { BASE_URL_IMAGE } from '../../api/apiConfig';
import { settingRating } from '../../utils/settingRating';

function OddMovie({ oddMovie }) {
  return (
    <div className="basis-2/3">
      <div className="flex my-[20px] items-center">
        <BsFillMoonFill className="text-primaryTextColor text-lg font-bold mr-[4px]" />
        <span className="text-primaryTextColor font-bold text-lg">PHIM LẺ</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {oddMovie?.map((item) => (
          <Link key={item.id} to="" className="relative group">
            <img
              src={BASE_URL_IMAGE + item.poster_path}
              alt={item.poster_path}
              className="h-[220px] w-full border border-solid border-borderPrimaryColor"
            />
            <h3 className="text-[16px] text-primaryTextColor my-[4px] mx-[2px] w-[162px] shortNameThreeDotOneLine">
              {item.title ? item.title : item.name}
            </h3>
            <span className="text-[14px] text-textWhiteColor my-[2px] mx-[2px] w-[162px] shortNameThreeDotOneLine">
              {item.original_title ? item.original_title : item.original_name}
            </span>
            <div className=" pb-[4px] ">
              <span className="my-[4px] mx-[2px] text-textWhiteColor">Votes: {item.vote_count}</span>
              <div className="flex my-[2px] ">
                <StarRatings {...settingRating} rating={item.vote_average} />
              </div>
            </div>
            <span className="status absolute min-w-[50px] text-center top-[10px] text-[14px] right-2">
              {item.original_language}
            </span>
            <span className="text-[12px] hidden group-hover:block px-2 py-1 border border-solid border-borderImgGrey absolute min-w-[60px] z-10 rounded-[4px] top-[50%] left-[20%] bg-textWhiteColor">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
OddMovie.propTypes = {
  oddMovie: PropTypes.array,
};
export default OddMovie;
