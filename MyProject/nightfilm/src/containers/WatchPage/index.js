import React from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneLike, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function WatchPage(props) {
  return (
    <>
      <Header />
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <div className="m-auto xl:max-w-[1280px] mt-[100px] 2xl:max-w-[1280px] lg:max-w-[1100px]">
        <div className="justify-center flex flex-row md:flex-col sm:flex-col gap-4">
          <div className="basis-4/5">
            <iframe
              className="w-full h-[550px] md: sm:h-[300px] hover:border-borderImgGrey border-t border-solid"
              src="https://kd.hd-bophim.com/share/46cf745606c655fd6e0b3e199873022e"
              title="YouTube video player"
              // eslint-disable-next-line react/no-unknown-property
              frameborder="10"
              seamless="seamless"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              // eslint-disable-next-line react/no-unknown-property
              allowfullscreen="true"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // eslint-disable-next-line react/jsx-closing-tag-location
            ></iframe>
            <div className="flex flex-row gap-8">
              <div className="basis-1/3">
                <img
                  src="https://khophim.tv/_next/image?url=https%3A%2F%2Fimage.khophim.tv%2Fuploads%2Fmovies%2Fsong-va-hay-chet-thumb.jpg&w=192&q=75"
                  alt=""
                  className="h-[auto] w-full border border-solid border-borderPrimaryColor"
                />
              </div>
              <div className="basis-2/3">
                <h1 className="text-2xl text-primaryTextColor uppercase ">Công chúa khó gần</h1>
                <div className="flex my-2 items-center">
                  <AiTwotoneLike className="text-iconHeaderColor text-xl" />
                  <span className="text-xl text-textWhiteColor px-2">0</span>
                </div>
                <div className="flex my-2 items-center">
                  <AiFillEye className="text-iconHeaderColor text-xl" />
                  <span className="text-xl text-textWhiteColor px-2">0</span>
                </div>
                <p className="text-textWhiteColor">
                  Đám Cưới Đen xoay quanh câu chuyện của tên Zhenya, một cô gái đau khổ vì tình yêu với người chồng đã
                  bỏ mình nên cô quyết định mang anh ta trở lại. Trong sự tuyệt vọng, cô gái đã sử dụng một câu thần chú
                  gọi là , một nghi lễ ma thuật nổi tiếng với sức mạnh to lớn và không thể đảo ngược. Sau nghi lễ, người
                  chồng yêu dấu của cô trở lại, mặc dù tình yêu của anh trở nên giống như một nỗi ám ảnh: anh thậm chí
                  sẵn sàng giết Zhenya, để không trao cô cho bất cứ ai.
                </p>
                <div className="flex my-2 items-center">
                  <span className="text-textWhiteColor">Thời lượng: </span>
                  <span className="text-xl text-textWhiteColor px-2">0</span>
                </div>
                <div className="flex my-2 items-center">
                  <span className="text-textWhiteColor">Quốc gia: </span>
                  <span className="text-xl text-textWhiteColor px-2">0</span>
                </div>
                <div className="flex my-2 items-center">
                  <span className="text-textWhiteColor">Ngôn ngữ: </span>
                  <span className="text-xl text-textWhiteColor px-2">Vietsub</span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/5 ">
            <ul className="pl-[10px md:grid md:grid-cols-2 md:gap-2 sm:grid sm:grid-cols-1 sm:gap-0 ">
              <li className="h-[130px] max-h-[130px] mb-[10px]">
                <Link to="" className="flex m-auto">
                  <img
                    src="https://khophim.tv/_next/image?url=https%3A%2F%2Fimage.khophim.tv%2Fuploads%2Fmovies%2Fsong-va-hay-chet-thumb.jpg&w=192&q=75"
                    alt=""
                    className="h-[100px] w-[92px] border border-solid border-borderPrimaryColor"
                  />
                  <div className="mt-[10px] ml-[4px]">
                    <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Chú chó đốm
                    </h3>
                    <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Dalmatians
                    </span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                  </div>
                </Link>
              </li>
              <li className="h-[130px] max-h-[130px] mb-[10px]">
                <Link to="" className="flex">
                  <img
                    src="https://khophim.tv/_next/image?url=https%3A%2F%2Fimage.khophim.tv%2Fuploads%2Fmovies%2Fsong-va-hay-chet-thumb.jpg&w=192&q=75"
                    alt=""
                    className="h-[100px] w-[92px] border border-solid border-borderPrimaryColor"
                  />
                  <div className="mt-[10px] ml-[4px]">
                    <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Chú chó đốm
                    </h3>
                    <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Dalmatians
                    </span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                  </div>
                </Link>
              </li>
              <li className="h-[130px] max-h-[130px] mb-[10px]">
                <Link to="" className="flex">
                  <img
                    src="https://khophim.tv/_next/image?url=https%3A%2F%2Fimage.khophim.tv%2Fuploads%2Fmovies%2Fsong-va-hay-chet-thumb.jpg&w=192&q=75"
                    alt=""
                    className="h-[100px] w-[92px] border border-solid border-borderPrimaryColor"
                  />
                  <div className="mt-[10px] ml-[4px]">
                    <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Chú chó đốm
                    </h3>
                    <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Dalmatians
                    </span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                  </div>
                </Link>
              </li>
              <li className="h-[130px] max-h-[130px] mb-[10px]">
                <Link to="" className="flex">
                  <img
                    src="https://khophim.tv/_next/image?url=https%3A%2F%2Fimage.khophim.tv%2Fuploads%2Fmovies%2Fsong-va-hay-chet-thumb.jpg&w=192&q=75"
                    alt=""
                    className="h-[100px] w-[92px] border border-solid border-borderPrimaryColor"
                  />
                  <div className="mt-[10px] ml-[4px]">
                    <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Chú chó đốm
                    </h3>
                    <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Dalmatians
                    </span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                  </div>
                </Link>
              </li>
              <li className="h-[130px] max-h-[130px] mb-[10px]">
                <Link to="" className="flex">
                  <img
                    src="https://khophim.tv/_next/image?url=https%3A%2F%2Fimage.khophim.tv%2Fuploads%2Fmovies%2Fsong-va-hay-chet-thumb.jpg&w=192&q=75"
                    alt=""
                    className="h-[100px] w-[92px] border border-solid border-borderPrimaryColor"
                  />
                  <div className="mt-[10px] ml-[4px]">
                    <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Chú chó đốm
                    </h3>
                    <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Dalmatians
                    </span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                  </div>
                </Link>
              </li>
              <li className="h-[130px] max-h-[130px] mb-[10px]">
                <Link to="" className="flex">
                  <img
                    src="https://khophim.tv/_next/image?url=https%3A%2F%2Fimage.khophim.tv%2Fuploads%2Fmovies%2Fsong-va-hay-chet-thumb.jpg&w=192&q=75"
                    alt=""
                    className="h-[100px] w-[92px] border border-solid border-borderPrimaryColor"
                  />
                  <div className="mt-[10px] ml-[4px]">
                    <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Chú chó đốm
                    </h3>
                    <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Dalmatians
                    </span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                  </div>
                </Link>
              </li>
              <li className="h-[130px] max-h-[130px] mb-[10px]">
                <Link to="" className="flex">
                  <img
                    src="https://khophim.tv/_next/image?url=https%3A%2F%2Fimage.khophim.tv%2Fuploads%2Fmovies%2Fsong-va-hay-chet-thumb.jpg&w=192&q=75"
                    alt=""
                    className="h-[100px] w-[92px] border border-solid border-borderPrimaryColor"
                  />
                  <div className="mt-[10px] ml-[4px]">
                    <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Chú chó đốm
                    </h3>
                    <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Dalmatians
                    </span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                  </div>
                </Link>
              </li>
              <li className="h-[130px] max-h-[130px] mb-[10px]">
                <Link to="" className="flex">
                  <img
                    src="https://khophim.tv/_next/image?url=https%3A%2F%2Fimage.khophim.tv%2Fuploads%2Fmovies%2Fsong-va-hay-chet-thumb.jpg&w=192&q=75"
                    alt=""
                    className="h-[100px] w-[92px] border border-solid border-borderPrimaryColor"
                  />
                  <div className="mt-[10px] ml-[4px]">
                    <h3 className="text-[16px] text-primaryTextColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Chú chó đốm
                    </h3>
                    <span className="text-[14px] text-textWhiteColor leading-[20px] ml-[4px] w-[220px] shortNameThreeDotOneLine">
                      101 Dalmatians
                    </span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                    <span className="text-textWhiteColor ml-[4px] text-[12px] py-[2px] block">Lượt xem: 32020</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
WatchPage.propTypes = {};
export default WatchPage;
