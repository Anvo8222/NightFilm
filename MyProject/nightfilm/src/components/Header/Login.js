import React from 'react';
import PropTypes from 'prop-types';
import { BiUserCircle } from 'react-icons/bi';
import { GoChevronDown } from 'react-icons/go';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <div className="relative group flex items-center">
      <BiUserCircle className="text-iconHeaderColor text-lg" />
      <span className="text-textHeaderColor">Tài khoản</span>
      <GoChevronDown className="text-[16px] text-textHeaderColor ml-[2px] font-bold" />
      <ul className="absolute group-hover:block profile w-[150px] hidden max-w-[150px] right-[10px] top-[40px] pl-[0] rounded-[10px] bg-backgroundColorSelectUser shadow-xl">
        <li className="text-center py-[10px]">
          <Link to="" className="text-[14px] block text-textHeaderColor hover:text-textHeaderHoverColor">
            Đăng Nhập
          </Link>
        </li>
      </ul>
    </div>
  );
}
Login.propTypes = {};
export default Login;
