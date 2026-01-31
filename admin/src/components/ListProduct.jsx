import { useEffect, useState } from "react";
import cross_icon from "../assets/cross_icon.png";

const ListProduct = () => {
  const [AllProducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    const res = await fetch("http://localhost:4000/allproducts");
    const data = await res.json();
    await setAllProducts(data);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  const remove_product = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({ id: id })
    })
    await fetchInfo();
  }
  return (
    <div className="ml-64 p-8">
      {" "}
      {/* Offset for sidebar */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">
            All Products List
          </h1>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
          <p className="col-span-2">Products</p>
          <p className="col-span-4">Title</p>
          <p className="col-span-2 text-center">Old Price</p>
          <p className="col-span-2 text-center">New Price</p>
          <p className="col-span-1 text-center">Category</p>
          <p className="col-span-1 text-center">Action</p>
        </div>

        {/* Products List */}
        <div className="divide-y divide-gray-200">
          {AllProducts.map((product, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-12 gap-2 px-6 py-4 items-center hover:bg-gray-50 transition-colors duration-200"
              >
                {/* Product Image */}
                <div className="col-span-2 flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-14 w-14 object-cover rounded-md shadow-sm"
                  />
                </div>

                {/* Product Title */}
                <div className="col-span-4">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">
                    {product.name}
                  </p>
                </div>

                {/* Old Price */}
                <div className="col-span-2 text-center">
                  <p className="text-sm text-gray-600">
                    ${product.old_price.toFixed(2)}
                  </p>
                </div>

                {/* New Price */}
                <div className="col-span-2 text-center">
                  <p className="text-sm font-medium text-green-600">
                    ${product.new_price.toFixed(2)}
                  </p>
                </div>

                {/* Category */}
                <div className="col-span-1 text-center">
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full capitalize">
                    {product.category}
                  </span>
                </div>

                {/* Remove Button */}
                <div className="col-span-1 flex justify-center">
                  <button
                    className="p-1.5 hover:bg-red-50 rounded-full transition-colors duration-200 group"
                    title="Remove Product"
                  >
                    <img onClick={() => {
                      remove_product(product.id)
                    }}
                      src={cross_icon} 
                      alt="Remove"
                      className="cursor-pointer h-4 w-4 opacity-60 group-hover:opacity-100"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {AllProducts.length === 0 && (
          <div className="px-6 py-12 text-center">
            <p className="text-gray-500 text-sm">
              No products found. Add some products to see them here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProduct;

// export default ListProduct;
