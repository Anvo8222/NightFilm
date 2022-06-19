/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { BsFillMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { imageURL } from '../../config/url';

function OddMovie({ oddMovie }) {
  return (
    <div className="basis-2/3">
      <div className="flex my-[20px] items-center">
        <BsFillMoonFill className="text-primaryTextColor text-lg font-bold mr-[4px]" />
        <span className="text-primaryTextColor font-bold text-lg">PHIM LẺ</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {oddMovie?.map((item) => (
          <Link key={item._id} to="" className="relative ">
            <img
              src={imageURL + item.thumb_url}
              alt={item.thumb_url}
              className="h-[220px] w-full border border-solid border-borderPrimaryColor"
            />
            <h3 className="text-[16px] text-primaryTextColor my-[4px] mx-[2px] w-[162px] shortNameThreeDotOneLine">
              {item.name}
            </h3>
            <span className="text-[14px] text-textWhiteColor my-[2px] mx-[2px] w-[162px] shortNameThreeDotOneLine">
              {item.origin_name}
            </span>
            <div className=" pb-[4px] ">
              <span className="my-[4px] mx-[2px] text-textWhiteColor">Lượt xem: {item.view}</span>
              <div className="flex my-[2px] ">
                <AiFillStar className="text-ratingColorHave" />
                <AiFillStar className="text-ratingColorHave" />
                <AiFillStar className="text-ratingColorHave" />
                <AiFillStar className="text-ratingColorHave" />
                <AiFillStar className="text-ratingColorHave" />
              </div>
            </div>
            <span className="status absolute top-[10px] text-[14px] right-2">
              {item.quality}-{item.lang}
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
