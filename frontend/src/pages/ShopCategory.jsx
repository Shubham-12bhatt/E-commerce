import { RiArrowDropDownLine } from "react-icons/ri";
import Item from "../Components/Item";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";

const ShopCategory = ({ category, banner }) => {
  const { all_product } = useContext(ShopContext);

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
          <select className="flex  border-2 border-gray-400 gap-4 cursor-pointer group py-3 pr-2 rounded-2xl px-4">
            <option className="text-gray-900">Sort by</option>
            <div className="relative">
              <RiArrowDropDownLine className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />

            </div>
            <option value="asc">(A → Z)</option>
                <option value="desc">(Z → A)</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid lg:mx-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {all_product.map((item, index) => {
            if (item.category === category) {
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
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
