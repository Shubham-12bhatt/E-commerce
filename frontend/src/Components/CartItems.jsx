import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { RxCross2 } from "react-icons/rx";

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart,getTotalAmount } =
    useContext(ShopContext);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 rounded-t-lg text-gray-700 font-semibold">
          <p className="col-span-2">Products</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p className="text-center">Remove</p>
        </div>

        <div className="divide-y divide-gray-200">
          {all_product.map((e) => {
            if (cartItems[e.id] !== 0) {
              return (
                <div
                  key={e.id}
                  className="grid grid-cols-6 gap-4 p-4 items-center hover:bg-gray-50 transition-colors"
                >
                  {/* Product Image and Name */}
                  <div className="col-span-2 flex items-center space-x-4">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <p className="font-medium text-gray-800">{e.name}</p>
                  </div>

                  {/* Price */}
                  <p className="text-gray-700">${e.new_price}</p>

                  {/* Quantity */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeFromCart(e.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100 rounded">
                      {cartItems[e.id]}
                    </span>
                    <button
                      onClick={() => addToCart(e.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Total */}
                  <p className="text-gray-700 font-medium">
                    ${(e.new_price * cartItems[e.id]).toFixed(2)}
                  </p>

                  {/* Remove Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => removeFromCart(e.id)}
                      className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full cursor-pointer transition-colors"
                    >
                      <RxCross2 size={20} />
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* cart total section  */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
            Cart Total
          </h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3">
              <p className="text-gray-600 font-medium">Subtotal</p>
              <p className="text-lg font-semibold text-gray-600">${getTotalAmount()}</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between items-center py-3">
              <p className="text-gray-600 font-medium">Shipping Fee</p>
              <p className="text-green-600 font-semibold">Free</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg ">
              <h3 className="text-xl font-bold text-gray-800">Total</h3>
              <h3 className="text-xl font-bold text-black-600">${getTotalAmount()}</h3>
            </div>
            <button className="w-full bg-red-500 cursor-pointer hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 font-medium mb-4">If you have a promo code, Enter it here</p>
          <div className="flex gap-3">
            <input 
              type="text" 
              placeholder="Enter promo code" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default CartItems;
