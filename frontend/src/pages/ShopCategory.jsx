import { RiArrowDropDownLine } from "react-icons/ri";
import Item from "../Components/Item";
import { ShopContext } from "../Context/ShopContext";
import { useContext, useState, useMemo } from "react";

const ShopCategory = ({ category, banner }) => {
  const { all_product } = useContext(ShopContext);
  const [sort, setSort] = useState("");

  const products = useMemo(() => {
    const filtered = all_product.filter((item) => item.category === category);
    if (sort === "asc") {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "desc") {
      return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    }
    return filtered;
  }, [all_product, category, sort]);

  return (
    <div className="py-8">
      {/* Banner Section */}
      <div className="w-full md:flex hidden  h-[300px] mt-12 mb-8 overflow-hidden">
        <img
          src={banner}
          alt={`${category} Banner`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full md:hidden flex  h-[100px]  overflow-hidden"></div>

      {/* Filter and Sort Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:mx-10 flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          {/* Product Count */}
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">Showing 1-12</span>
            <span className="mx-2">out of 36 products</span>
          </p>

          {/* Sort Dropdown */}
          <div className="relative flex items-center border-2 border-gray-400 rounded-2xl px-4 py-3 cursor-pointer group">
            <select
              className="flex-grow outline-none cursor-pointer pr-6"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="asc">(A → Z)</option>
              <option value="desc">(Z → A)</option>
            </select>
            <div className="absolute right-3">
              <RiArrowDropDownLine className="w-6 h-6 text-gray-600 transition-transform duration-200 group-hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid lg:mx-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((item, index) => {
            return (
              <div
                key={index}
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <Item
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  category={item.category}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
