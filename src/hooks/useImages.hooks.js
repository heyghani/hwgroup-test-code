import { useState } from "react";
import images from "../images.json";
const useImages = () => {
  const [data, setData] = useState(images);
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (length) => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (length) => {
    const isLastSlide = currentIndex === length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeFeatured = (value, index) => {
    const item = data.map((item, i) => {
      if (i === index) {
        return { ...item, is_featured: !value };
      } else {
        return { ...item };
      }
    });
    setData(item);
  };

  return {
    data,
    prevSlide,
    nextSlide,
    currentIndex,
    search,
    handleSearch,
    handleChangeFeatured,
  };
};

export default useImages;
