/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Slide from '../../components/Slide';
import Banner from '../../components/Banner';
import IntrodMovie from '../../components/IntroduMovie';
import CartoonMovie from '../../components/CartoonMovie';
import OddMovie from '../../components/OddMovie';
import TopViewMovie from '../../components/TopViewMovie';
import ActionMovie from '../../components/ActionMovie';
import Footer from '../../components/Footer';
import { getActionMovieList, getAllItem } from '../../api/indexApi';

function HomePage(props) {
  const indexItem = useSelector((state) => state.homeItem.items);
  const actionMovieList = useSelector((state) => state.homeItem.actioMovieList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItem());
    dispatch(getActionMovieList());
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <div className="xl:max-w-[1280px] m-auto 2xl:max-w-[1280px] lg:max-w-[1100px]">
        {indexItem?.itemsDeCu ? <Slide slideItem={indexItem?.itemsDeCu} /> : false}
        {indexItem?.itemsSapChieu ? (
          <IntrodMovie theaterMovie={indexItem?.itemsChieuRap} upcomingMovie={indexItem?.itemsSapChieu} />
        ) : (
          false
        )}
        {indexItem?.itemsHoatHinh ? <CartoonMovie cartoonMovie={indexItem?.itemsHoatHinh} /> : false}

        <div className="flex flex-row gap-4 border-b-[10px] w-[100%] border-solid border-boderColorLayout">
          {indexItem?.itemsMovies ? <OddMovie oddMovie={indexItem?.itemsMovies} /> : false}
          {indexItem?.itemsTopWeek ? <TopViewMovie topViewMovie={indexItem?.itemsTopWeek} /> : false}
        </div>
        {actionMovieList ? <ActionMovie actionMovieList={actionMovieList} /> : false}
        <Footer />
      </div>
    </>
  );
}

HomePage.propTypes = {};
export default HomePage;
