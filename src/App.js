import { Card, Carousel, Autocomplete } from "./components";
import useImages from "./hooks/useImages.hooks";

function App() {
  const { data, search, handleSearch, handleChangeFeatured } = useImages();
  return (
    <div className="bg-gray-300 overflow-hidden">
      <div className="flex items-center justify-center w-full">
        <Carousel data={data} />
      </div>
      <div className="w-full m-4 mt-10">
        <Autocomplete search={search} handleSearch={handleSearch} />
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-3 gap-4">
          {data
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={item.title}
                title={item.title}
                url={item.image_url}
                rating={item.rating}
                isFeatured={item.is_featured}
                handleChangeFeatured={handleChangeFeatured}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
