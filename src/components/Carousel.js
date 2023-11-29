import React from "react";
import useImages from "../hooks/useImages.hooks";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Carousel = ({ data }) => {
  const { prevSlide, nextSlide, currentIndex } = useImages();
  return (
    <div className="flex-1 sm:px-16 px-6 flex-col justify-center items-start ">
      <div className="flex-1 sm:p-16 p-6 flex-col justify-center items-start bg-white shadow-md ">
        <div className="font-bold text-center text-lg">
          {data[currentIndex].title}
        </div>
        <div className="my-5 flex flex-row items-center justify-between transition duration-500">
          <FaArrowLeft
            onClick={() => prevSlide(data.length)}
            className="cursor-pointer"
          />
          <img
            src={data[currentIndex].image_url}
            className="w-full h-[300px] object-contain"
          />
          <FaArrowRight
            onClick={() => nextSlide(data.length)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
