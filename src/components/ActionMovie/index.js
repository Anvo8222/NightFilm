/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { BsFillMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { imageURL } from '../../config/url';

function ActionMovie({ actionMovieList }) {
  return (
    <>
      <div className="flex my-[20px] items-center ">
        <BsFillMoonFill className="text-primaryTextColor text-lg font-bold mr-[4px]" />
        <span className="text-primaryTextColor font-bold text-lg">PHIM HÀNH ĐỘNG</span>
      </div>
      <div className="grid grid-cols-7 gap-4 border-b-[10px] w-[100%] border-solid border-boderColorLayout">
        {actionMovieList?.items.map((item) => (
          <Link key={item._id} to="" className="relative zoom group">
            <img
              src={imageURL + item.thumb_url}
              alt={item.thumb_url}
              className="h-[220px] w-full border rounded border-solid border-borderPrimaryColor"
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
            <span className="status absolute top-[10px] text-[12px] right-2 triangle">
              {item.quality}-{item.lang}
            </span>
            <span className="absolute group-hover:block hidden bg-textWhiteColor left-6 px-4 rounded-[6px] top-[55%] text-[12px] border border-solid border-borderImgGrey">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
ActionMovie.propTypes = {
  actionMovieList: PropTypes.object,
};

export default ActionMovie;
