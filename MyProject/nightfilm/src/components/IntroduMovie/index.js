import React from 'react';
import PropTypes from 'prop-types';
import BannerList from './BannerList';
import MovieTheaterList from './MovieTheaterList';
import MovieUpcomList from './MovieUpcomList';

function IntrodMovie({ trendingItemList, upcomingItemList }) {
  return (
    <div className="flex md:block sm:block mx-8 gap-4 my-[20px] pb-[16px] border-b-[10px] border-solid border-boderColorLayout">
      <BannerList />
      <div className="flex w-[66%] sm:w-full sm:block sm:m-auto gap-4 md:w-full md:mt-3">
        <MovieTheaterList trendingItemList={trendingItemList} />
        <MovieUpcomList upcomingItemList={upcomingItemList} />
      </div>
    </div>
  );
}
IntrodMovie.propTypes = {
  trendingItemList: PropTypes.array,
  upcomingItemList: PropTypes.array,
};
export default IntrodMovie;
