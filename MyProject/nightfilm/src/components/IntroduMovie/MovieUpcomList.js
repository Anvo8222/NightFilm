/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { BsFillMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { AiFillStar } from 'react-icons/ai';
import { imageURL } from '../../config/url';
import { BASE_URL_IMAGE } from '../../api/apiConfig';
import { settingRating } from '../../utils/settingRating';

function MovieUpcomList({ upcomingItemList }) {
  return (
    <div className="w-[50%] sm:w-full">
      <div className="h-[60px] w-full flex pl-[34px] items-center">
        <BsFillMoonFill className="text-[36px] text-primaryTextColor leading-[60px] mr-[4px] pt-[4px]" />
        <h3 className="text-[30px] text-primaryTextColor block">PHIM SẮP CHIẾU</h3>
      </div>
      <ul className="pl-0 scroll overflow-y-auto h-[550px] pb-4">
        {upcomingItemList ? (
          <li className="border-b border-solid border-borderItemWhiteColor h-[120px] rounded-4">
            <Link to="">
              <div
                className="relative h-full bg-cover bg-center bg-no-repeat rounded-[10px]"
                style={{
                  backgroundImage: `url("${BASE_URL_IMAGE}${upcomingItemList[0]?.poster_path}")`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 ml-1">
                  <h3 className="text-primaryTextColor text-[16px] shortNameThreeDotOneLine">
                    {upcomingItemList[0]?.title}
                  </h3>
                  <span className="text-textWhiteColor text-[14px] shortNameThreeDotOneLine">
                    {upcomingItemList[0]?.id}
                  </span>
                  <div className="flex justify-between mr-2">
                    <div className="flex my-[2px] mr-[4px]">
                      <StarRatings {...settingRating} rating={upcomingItemList[0]?.vote_average} />
                    </div>
                    <span className="text-textWhiteColor text-[12px]">
                      Lượt đánh giá:{upcomingItemList[0]?.vote_count}
                    </span>
                  </div>
                </div>
                <div className="absolute bg-backgroundLabel2 text-center min-w-[60px] max-w-[200px] top-[10px] right-[10px] rounded-[8px] p-2 text-[12px]">
                  {upcomingItemList[0]?.original_language.toUpperCase()}
                </div>
              </div>
            </Link>
          </li>
        ) : (
          false
        )}

        {upcomingItemList?.map((item) => (
          <li
            key={item.id}
            className="border-b group border-solid last:border-0  relative border-borderItemWhiteColor first:hidden"
          >
            <Link to="">
              <div className="h-full w-full flex relative items-center">
                <img
                  className="w-[50px] h-[78px] mt-[12px] border border-solid border-primaryTextColor"
                  src={BASE_URL_IMAGE + item.poster_path}
                  alt={item.thumb_url}
                />
                <div className="py-[18px] px-[10px]">
                  <h3 className="text-primaryTextColor m-0 text-[14px] pb-[2px] max-w-[220px] shortNameThreeDotOneLine">
                    {item.title ? item.title : item.name}
                  </h3>
                  <span className="text-textWhiteColor text-[12px] m-0 pb-[2px] max-w-[220px] shortNameThreeDotOneLine">
                    {item.original_title ? item.original_title : item.original_name}
                  </span>
                  <span className="block text-textWhiteColor text-[12px] pb-[2px]">Popularity: {item.popularity}</span>
                  <div className="flex my-[2px] mr-[4px]">
                    <StarRatings {...settingRating} rating={item.vote_average} />
                  </div>
                </div>
                <div className="absolute text-center min-w-[60px] bg-backgroundLabel2 max-w-[200px] top-[10px] right-[10px] rounded-[8px] p-2 text-[12px]">
                  {item.original_language.toUpperCase()}
                </div>
              </div>
            </Link>
            <span className="absolute  group-hover:block hidden top-[50%] right-[20px] bg-textWhiteColor border text-[12px] px-4 rounded-[4px] border-borderImgGrey border-solid">
              {item.title ? item.title : item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
MovieUpcomList.propTypes = {
  upcomingItemList: PropTypes.array,
};
export default MovieUpcomList;
