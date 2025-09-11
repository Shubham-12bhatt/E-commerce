import { data } from "react-router-dom";
import data_product from "../assets/data";
import Item from "./Item";

const Popular = () => {
  return (
    <section className="py-16 bg-white">
      <div className=" mx-auto px-4 sm:px-2 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            POPULAR IN WOMEN
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-30">
          {data_product.map((item, index) => {
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
    </section>
  );
};

export default Popular;
