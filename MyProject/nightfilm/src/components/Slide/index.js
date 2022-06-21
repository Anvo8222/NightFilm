/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { BsFillMoonFill } from 'react-icons/bs';
import StarRatings from 'react-star-ratings';
import { settingSlide } from '../../utils/settingSlide';
import { BASE_URL_IMAGE } from '../../api/apiConfig';
import { settingRating } from '../../utils/settingRating';

function Slide({ slideItem }) {
  return (
    <>
      <div className="flex my-[20px] items-center">
        <BsFillMoonFill className="text-primaryTextColor text-lg font-bold mr-[4px]" />
        <span className="text-primaryTextColor font-bold text-lg">PHIM ĐỀ CỬ</span>
      </div>
      <div className="border-b-[10px] w-[100%] border-solid border-boderColorLayout">
        <Slider className="mx-6 flex justify-between" {...settingSlide}>
          {slideItem?.map((item) => (
            <div key={item._id} className="max-h-[250px] max-h[250px] max-w-[210px] zoom relative  m-2">
              <div
                className="p-0 h-[100%] rounded w-[204px] pt-[100%] bg-center bg-cover bg-no-repeat cursor-pointer"
                style={{ backgroundImage: `url("${BASE_URL_IMAGE}${item.poster_path}")` }}
              ></div>
              <span className="text-[14px] min-w-[70px] text-center bg-backgroundLable text-textWhiteColor p-[4px] absolute top-[6px] left-[6px] rounded-[8px]">
                {item.original_language.toUpperCase()}
              </span>
              <div className="absolute w-full bottom-[0px] pl-[4px] h-[60px] bg-backgroundName">
                <h3 className="text-primaryTextColor text-[16px] font-medium leading-[18px] pt-[6px] px-[2px] shortNameThreeDotOneLine">
                  {item.title}
                </h3>
                <h3 className="text-textWhiteColor font-medium leading-[14px] mt-2">
                  <StarRatings {...settingRating} rating={item.vote_average} />
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
Slide.propTypes = {
  slideItem: PropTypes.array,
};

export default Slide;
