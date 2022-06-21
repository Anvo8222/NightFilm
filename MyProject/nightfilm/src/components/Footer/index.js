import React from 'react';
import PropTypes from 'prop-types';
import { BsFacebook, BsFillMoonFill } from 'react-icons/bs';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';

function Footer(props) {
  return (
    <footer className="mb-6 ">
      <div className="flex my-[20px] items-center justify-center ">
        <BsFillMoonFill className="text-primaryTextColor text-lg font-bold mr-[4px]" />
        <span className="text-primaryTextColor font-bold text-lg text-center">LIÊN LỆ</span>
      </div>
      <div className="text-center flex justify-center">
        <a
          href="https://www.facebook.com/thaian02012k/"
          target="blank"
          className="text-textWhiteColor mx-2 flex items-center text-center hover:text-primaryTextColor"
        >
          <BsFacebook className="mr-1" />
          FaceBook
        </a>
        <span className="text-textWhiteColor mx-2 text-center flex items-center">
          <AiOutlineMail className="mr-1" />
          anvo8222@gmail.com
        </span>
        <a
          href="https://github.com/Anvo8222"
          target="blank"
          className="text-textWhiteColor flex items-center hover:text-primaryTextColor"
        >
          <AiFillGithub className="mr-1" />
          Github
        </a>
      </div>
    </footer>
  );
}
Footer.propTypes = {};
export default Footer;
