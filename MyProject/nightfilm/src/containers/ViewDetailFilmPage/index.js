import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ViewDetailFilmPage(props) {
  return (
    <>
      <Header />
      <div className="mt-[100px] m-auto xl:max-w-[1280px] 2xl:max-w-[1280px] lg:max-w-[1100px]">
        <div className="justify-center flex flex-row md:flex-col sm:flex-col gap-4">
          <div className="basis-4/5 sm:flex sm:flex-col sm:items-center sm:max-h-full max-h-[700px] text-textWhiteColor bg-backgroundViewDetail flex p-4 rounded">
            <div className="40%">
              <img
                className="max-h-[550px] h-auto rounded"
                src="https://image.khophim.tv/uploads/movies/vat-trong-tay-thumb.jpg"
                alt=""
              />
              <div className=" flex w-full h-[30px] justify-center bottom-4 mt-4">
                <a
                  href="#trailer"
                  className="bg-backgroundButtonTrailer leading-[30px] mx-2 px-4 rounded-[10px] cursor-pointer hover:opacity-[0.8]"
                >
                  Xem trailer
                </a>
                <span className="bg-backgroundButtonWatch leading-[30px] mx-2 px-4 rounded-[10px] cursor-pointer hover:opacity-[0.8]">
                  Xem Phim
                </span>
              </div>
            </div>
            <div className="flex ml-2 flex-col w-[60%] sm:w-full sm:mt-4">
              <h1 className="text-primaryTextColor text-3xl">TÌNH YÊU ĐẾN SAU BA NGÀY</h1>
              <span className="">TÌNH YÊU ĐẾN SAU BA NGÀY</span>
              <div className="w-full bg-backgroundDescreptionDetail h-full overflow-y-auto rounded mt-2 p-2 scroll">
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[80px]">Trạng thái: </span>
                  <span className="text-[14px] ml-2">Tập 1 Vietsub</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[80px]">Thời lượng: </span>
                  <span className="text-[14px] ml-2">Tập 1 Vietsub</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[80px]">Số tập: </span>
                  <span className="text-[14px] ml-2">Tập 1 Vietsub</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[80px]">Tình trạng: </span>
                  <span className="text-[14px] ml-2">Tập 1 Vietsub</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[80px]">Ngôn ngữ: </span>
                  <span className="text-[14px] ml-2">Tập 1 Vietsub</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[80px]">Quốc gia </span>
                  <span className="text-[14px] ml-2">Tập 1 Vietsub</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[80px]">Thể loại: </span>
                  <span className="text-[14px] ml-2">Tập 1 Vietsub</span>
                </div>
                <div className="flex my-2">
                  <span className="text-[14px] min-w-[80px]">Diễn viên: </span>
                  <span className="text-[14px] ml-2">Tập 1 Vietsub</span>
                </div>
                <p className="">
                  Mẹ chồng nàng dâu trở thành người yêu của nhau, đồng thời với cuộc hôn nhân của Yeong Eun và Jeong
                  Sik. Cuộc sống chung chóng mặt của những cặp tình nhân trung niên luôn nóng bỏng hơn cả một cặp vợ
                  chồng mới cưới, và một cặp vợ chồng mới cưới thậm chí không thể nóng như một nửa của nó bắt đầu.Mẹ
                  chồng nàng dâu trở thành người yêu của nhau, đồng thời với cuộc hôn nhân của Yeong Eun và Jeong Sik.
                  Cuộc sống chung chóng mặt của những cặp tình nhân trung niên luôn nóng bỏng hơn cả một cặp vợ chồng
                  mới cưới, và một cặp vợ chồng mới cưới thậm chí không thể nóng như một nửa của nó bắt đầu.Mẹ chồng
                  nàng dâu trở thành người yêu của nhau, đồng thời với cuộc hôn nhân của Yeong Eun và Jeong Sik. Cuộc
                  sống chung chóng mặt của những cặp tình nhân trung niên luôn nóng bỏng hơn cả một cặp vợ chồng mới
                  cưới, và một cặp vợ chồng mới cưới thậm chí không thể nóng như một nửa của nó bắt đầu.Mẹ chồng nàng
                  dâu trở thành người yêu của nhau, đồng thời với cuộc hôn nhân của Yeong Eun và Jeong Sik. Cuộc sống
                  chung chóng mặt của những cặp tình nhân trung niên luôn nóng bỏng hơn cả một cặp vợ chồng mới cưới, và
                  một cặp vợ chồng mới cưới thậm chí không thể nóng như một nửa của nó bắt đầu.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/5 text-textWhiteColor">
            <ul className=" md:grid md:grid-cols-2 overflow-hidden w-full m-0 p-0 sm:grid sm:grid-cols-1 sm:gap-0 ">
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
        <iframe
          id="trailer"
          className="w-full h-[550px] md: sm:h-[300px] hover:border-borderImgGrey border-t border-solid"
          src="https://www.youtube.com/embed/NmmOoEnWWYw"
          // https://www.youtube.com/embed/NmmOoEnWWYw
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
      </div>
      <Footer />
    </>
  );
}
ViewDetailFilmPage.propTypes = {};
export default ViewDetailFilmPage;
