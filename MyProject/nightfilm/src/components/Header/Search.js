import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

function Search(props) {
  return (
    <div className="relative mr-[20px] text-[14px]">
      <input
        type="text"
        placeholder="Nhập tên phim cần tìm"
        className="outline-0 bg-backgroundTransparent border-0 py-[4px] px-[0] text-textHeaderColor border-b border-solid border-textHeaderColor"
      />
      <AiOutlineSearch className="absolute right-[4px] bottom-[6px] text-iconHeaderColor text-lg" />
    </div>
  );
}
Search.propTypes = {};
export default Search;
