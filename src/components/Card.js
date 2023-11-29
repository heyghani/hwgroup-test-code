import React from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
const Card = ({
  title,
  url,
  isFeatured,
  rating,
  handleChangeFeatured,
  index,
}) => {
  const handleRating = () => {
    const array = new Array(rating).fill("");

    return array;
  };

  return (
    <div className="bg-white rounded-sm shadow-md m-2">
      <h1 className="font-bold text-base m-2 text-center">{title}</h1>
      <div className="flex items-center justify-center">
        <img src={url} className="m-2 w-[200px] h-[200px] object-contain" />
      </div>
      <div className="flex flex-row mt-4 m-2 items-center justify-between">
        <div className=" flex flex-row text-yellow-300 gap-2 ">
          {handleRating().map((item, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <div className="flex self-end text-red-500 cursor-pointer">
          {isFeatured ? (
            <FaHeart onClick={() => handleChangeFeatured(isFeatured, index)} />
          ) : (
            <FaRegHeart
              onClick={() => handleChangeFeatured(isFeatured, index)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
