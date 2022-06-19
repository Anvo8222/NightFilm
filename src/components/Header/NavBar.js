/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { GoChevronDown } from 'react-icons/go';
import { Link } from 'react-router-dom';

function NavBar({ categories, countries, seriesMovie, years }) {
  const [isShowNavBar, setIsShowNavBar] = useState(false);
  const onToggleNavBar = () => {
    setIsShowNavBar(!isShowNavBar);
  };
  const onCloseNavBar = () => {
    setIsShowNavBar(false);
  };
  return (
    <>
      <FaBars
        onClick={() => onToggleNavBar()}
        className="text-textWhiteColor hover:text-primaryTextColor cursor-pointer text-2xl ml-2 hidden sm:block md:block"
      />
      {isShowNavBar ? (
        <div className="fixed top-0 left-0 bottom-0 z-10">
          <div onClick={() => onCloseNavBar()} className="fixed inset-0 bg-backgroundBlockNavbar"></div>
          <div
            className={`w-[320px] h-[100vh] bg-backgroundNavBar relative ${isShowNavBar ? 'showNavBar' : 'hideNavBar'}`}
          >
            <AiOutlineCloseCircle
              onClick={() => onCloseNavBar()}
              className="text-textWhiteColor cursor-pointer hover:text-primaryTextColor text-2xl absolute right-3 top-3"
            />
            <ul className="pt-16 pl-4">
              <li className="text-textWhiteColor mt-4">
                <div className="flex items-center">
                  <BiCategory className="text-xl mr-4" />
                  <span className="text-base">Thể loại</span>
                  <GoChevronDown />
                </div>
                <ul className="grid grid-cols-2 mt-2 gap-6">
                  {categories?.data?.map((item) => (
                    <li key={item.id} className="text-primaryTextColor text-base text-center">
                      {item.name}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="text-textWhiteColor mt-4">
                <div className="flex items-center">
                  <BiCategory className="text-xl mr-4" />
                  <span className="text-base">Thể loại</span>
                  <GoChevronDown />
                </div>
                <ul className="grid grid-cols-2 mt-2 gap-6">
                  <li className="text-primaryTextColor text-base text-center">Hành động</li>
                  <li className="text-primaryTextColor text-base text-center">Tình cảm</li>
                  <li className="text-primaryTextColor text-base text-center">Hành động</li>
                  <li className="text-primaryTextColor text-base text-center">Tình cảm</li>
                  <li className="text-primaryTextColor text-base text-center">Hành động</li>
                  <li className="text-primaryTextColor text-base text-center">Tình cảm</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        false
      )}
      <ul className="flex md:hidden sm:hidden">
        <li className="group cursor-pointer leading-[54px] py-[0] px-[14px] flex text-textHeaderColor items-center rounded-[10px] hover:bg-backgroundHeaderCategory">
          <Link to="" className="">
            Thể Loại
          </Link>
          <GoChevronDown className="text-[16px] ml-[2px] font-bold" />
          <ul className="header__menu-nav group-hover:flex">
            {categories?.data?.map((item) => (
              <li key={item.id} className="w-[20%]">
                <Link to="" className="text-textHeaderColor hover:text-textHeaderHoverColor">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="group cursor-pointer leading-[54px] py-[0] px-[14px] flex text-textHeaderColor items-center rounded-[10px] hover:bg-backgroundHeaderCategory">
          <Link to="" className="">
            Quốc Gia
          </Link>
          <GoChevronDown className="text-[16px] ml-[2px] font-bold" />
          <ul className="header__menu-nav group-hover:flex">
            {countries?.data?.map((item) => (
              <li key={item.id} className="w-[20%]">
                <Link to="" className="text-textHeaderColor hover:text-textHeaderHoverColor">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="group cursor-pointer leading-[54px] py-[0] px-[14px] flex text-textHeaderColor items-center rounded-[10px] hover:bg-backgroundHeaderCategory">
          <Link to="" className="">
            Phim Lẻ
          </Link>
          <GoChevronDown className="text-[16px] ml-[2px] font-bold" />
          <ul className="header__menu-nav group-hover:flex">
            {years?.data?.map((item) => (
              <li key={item.id} className="w-[20%]">
                <Link to="" className="text-textHeaderColor hover:text-textHeaderHoverColor">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="group cursor-pointer leading-[54px] py-[0] px-[14px] flex text-textHeaderColor items-center rounded-[10px] hover:bg-backgroundHeaderCategory">
          <Link to="" className="">
            Phim Bộ
          </Link>
          <GoChevronDown className="text-[16px] ml-[2px] font-bold" />
          <ul className="header__menu-nav group-hover:flex">
            {seriesMovie?.data?.map((item) => (
              <li key={item.id} className="w-[20%]">
                <Link to="" className="text-textHeaderColor hover:text-textHeaderHoverColor">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="group cursor-pointer leading-[54px] py-[0] px-[14px] flex text-textHeaderColor items-center rounded-[10px] hover:bg-backgroundHeaderCategory">
          <Link to="" className="">
            Chiếu Rạp
          </Link>
        </li>
        <li className="group cursor-pointer leading-[54px] py-[0] px-[14px] flex text-textHeaderColor items-center rounded-[10px] hover:bg-backgroundHeaderCategory">
          <Link to="" className="">
            Sắp Chiếu
          </Link>
        </li>
      </ul>
    </>
  );
}
NavBar.propTypes = {
  categories: PropTypes.object,
  countries: PropTypes.object,
  seriesMovie: PropTypes.object,
  years: PropTypes.object,
};

export default NavBar;
