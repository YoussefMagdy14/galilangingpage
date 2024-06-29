import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import useTranslation from "../hook/useTranslation";
import { IoIosStar } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Lorem ipsum",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nunc id interdum vehicula, quam felis tempus nulla, sit amet ultricies velit mauris ut orci. Phasellus ac justo nec urna ultricies sollicitudin. Vivamus at diam in quam ultrices suscipit a ac dui. Nam ut risus nec felis sagittis viverra. Aliquam erat volutpat. Duis fringilla, leo ac pharetra tincidunt, velit turpis tincidunt justo, nec dapibus justo eros a libero.",
    },
    {
      name: "Lorem ipsum",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nunc id interdum vehicula, quam felis tempus nulla, sit amet ultricies velit mauris ut orci. Phasellus ac justo nec urna ultricies sollicitudin. Vivamus at diam in quam ultrices suscipit a ac dui. Nam ut risus nec felis sagittis viverra. Aliquam erat volutpat. Duis fringilla, leo ac pharetra tincidunt, velit turpis tincidunt justo, nec dapibus justo eros a libero.",
    },
    {
      name: "Lorem ipsum",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nunc id interdum vehicula, quam felis tempus nulla, sit amet ultricies velit mauris ut orci. Phasellus ac justo nec urna ultricies sollicitudin. Vivamus at diam in quam ultrices suscipit a ac dui. Nam ut risus nec felis sagittis viverra. Aliquam erat volutpat. Duis fringilla, leo ac pharetra tincidunt, velit turpis tincidunt justo, nec dapibus justo eros a libero.",
    },
    {
      name: "Lorem ipsum",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nunc id interdum vehicula, quam felis tempus nulla, sit amet ultricies velit mauris ut orci. Phasellus ac justo nec urna ultricies sollicitudin. Vivamus at diam in quam ultrices suscipit a ac dui. Nam ut risus nec felis sagittis viverra. Aliquam erat volutpat. Duis fringilla, leo ac pharetra tincidunt, velit turpis tincidunt justo, nec dapibus justo eros a libero.",
    },
  ],
}) => {
  const settings = {
    dots: false,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);
  const { T, locale } = useTranslation();

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        <div className="px-3 flex items-stretch">
          <div className="border-2 border-gray-500 hover:border-blue-800 transition-all rounded-lg p-8 flex flex-col">
            <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
              <div className="flex order-2 xl:order-1">
                <Image
                  src={"/assets/people-3.png"}
                  height={50}
                  width={50}
                  alt="Icon People"
                />
                <div className="flex flex-col ml-5 text-left">
                  <p className="text-lg text-black-600 capitalize">
                    {T("testimonilist.name")}
                  </p>
                  {/* <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p> */}
                </div>
              </div>
              <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                <p className="text-sm"> {T("testimonilist.rating")}</p>
                <span className="flex ml-4">
                  <IoIosStar color="yellow" />
                </span>
              </div>
            </div>
            <p className="mt-5 text-left">
              “ {T("testimonilist.testimoni")} ”.
            </p>
          </div>
        </div>
        <div className="px-3 flex items-stretch">
          <div className="border-2 border-gray-500 hover:border-blue-800 transition-all rounded-lg p-8 flex flex-col">
            <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
              <div className="flex order-2 xl:order-1">
                <Image
                  src={"/assets/people-3.png"}
                  height={50}
                  width={50}
                  alt="Icon People"
                />
                <div className="flex flex-col ml-5 text-left">
                  <p className="text-lg text-black-600 capitalize">
                    {T("testimonilist.name")}
                  </p>
                  {/* <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p> */}
                </div>
              </div>
              <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                <p className="text-sm"> {T("testimonilist.rating")}</p>
                <span className="flex ml-4">
                  <IoIosStar color="yellow" />
                </span>
              </div>
            </div>
            <p className="mt-5 text-left">
              “ {T("testimonilist.testimoni")} ”.
            </p>
          </div>
        </div>
        <div className="px-3 flex items-stretch">
          <div className="border-2 border-gray-500 hover:border-blue-800 transition-all rounded-lg p-8 flex flex-col">
            <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
              <div className="flex order-2 xl:order-1">
                <Image
                  src={"/assets/people-3.png"}
                  height={50}
                  width={50}
                  alt="Icon People"
                />
                <div className="flex flex-col ml-5 text-left">
                  <p className="text-lg text-black-600 capitalize">
                    {T("testimonilist.name")}
                  </p>
                  {/* <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p> */}
                </div>
              </div>
              <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                <p className="text-sm"> {T("testimonilist.rating")}</p>
                <span className="flex ml-4">
                  <IoIosStar color="yellow" />
                </span>
              </div>
            </div>
            <p className="mt-5 text-left">
              “ {T("testimonilist.testimoni")} ”.
            </p>
          </div>
        </div>
        <div className="px-3 flex items-stretch">
          <div className="border-2 border-gray-500 hover:border-blue-800 transition-all rounded-lg p-8 flex flex-col">
            <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
              <div className="flex order-2 xl:order-1">
                <Image
                  src={"/assets/people-3.png"}
                  height={50}
                  width={50}
                  alt="Icon People"
                />
                <div className="flex flex-col ml-5 text-left">
                  <p className="text-lg text-black-600 capitalize">
                    {T("testimonilist.name")}
                  </p>
                  {/* <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p> */}
                </div>
              </div>
              <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                <p className="text-sm"> {T("testimonilist.rating")}</p>
                <span className="flex ml-4">
                  <IoIosStar color="yellow" />
                </span>
              </div>
            </div>
            <p className="mt-5 text-left">
              “ {T("testimonilist.testimoni")} ”.
            </p>
          </div>
        </div>
      </Slider>

      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-800 border hover:bg-blue-800 hover:text-white-500 transition-all text-blue-800 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            {locale === "en" ? (
              <FaArrowLeft size={20} />
            ) : (
              <FaArrowRight size={20} />
            )}
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-800 border hover:bg-blue-800 hover:text-white-500 transition-all text-blue-800 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            {locale === "en" ? (
              <FaArrowRight size={20} />
            ) : (
              <FaArrowLeft size={20} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
