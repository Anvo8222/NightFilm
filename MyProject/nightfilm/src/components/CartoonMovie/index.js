/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BsFillMoonFill } from 'react-icons/bs';
import StarRatings from 'react-star-ratings';
import Slider from 'react-slick';
import { BASE_URL_IMAGE } from '../../api/apiConfig';
import { settingRating } from '../../utils/settingRating';
import { settingSlide } from '../../utils/settingSlide';

function Cartoon({ cartoonMovie }) {
  return (
    <>
      <div className="flex my-[20px] items-center mx-6">
        <BsFillMoonFill className="text-primaryTextColor text-lg font-bold mr-[4px]" />
        <span className="text-primaryTextColor  font-bold text-lg">PHIM HOẠT HÌNH</span>
      </div>
      <div className=" my-[20px] pb-[16px] border-b-[10px] w-[100%] border-solid border-boderColorLayout">
        <Slider className="mx-6 flex justify-between" {...settingSlide}>
          {cartoonMovie?.map((item) => (
            <Link key={item._id} to="" className="flex flex-col items-center h-[470px] w-full max-h-[470px] relative">
              <img
                className="h-[360px] w-[310px] border-[20px] border-solid border-borderImgGrey"
                src={BASE_URL_IMAGE + item.poster_path}
                alt={item.poster_path}
              />
              <div className="bg-backgroundName w-[310px] -mt-[6px]">
                <h3 className="text-[18px] pt-[8px] px-[8px] text-primaryTextColor m-0 leading-[20px] shortNameThreeDotOneLine">
                  {item.title ? item.title : item.name}
                </h3>
                <span className="text-[14px] pt-[8px] px-[8px] text-textWhiteColor m-0 leading-[20px] shortNameThreeDotOneLine">
                  {item.original_title ? item.original_title : item.original_name}
                </span>
                <span className="block text-textWhiteColor text-[14px] pt-[2px] px-[8px]">
                  Release date: {item.release_date}{' '}
                </span>
                <div className="flex my-[2px] ml-[4px]">
                  <StarRatings {...settingRating} rating={item.vote_average} />
                </div>
              </div>
              <span className="status absolute top-[30px] min-w-[70px] text-center text-sm right-[60px]">
                {item.original_language}
              </span>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
}
Cartoon.propTypes = {
  cartoonMovie: PropTypes.array,
};
export default Cartoon;
