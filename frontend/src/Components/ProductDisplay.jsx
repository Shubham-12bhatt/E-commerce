import { useContext, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("");

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }

    return stars;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Display Left */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4">
            {/* Thumbnail Images */}
            <div className="col-span-1 space-y-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer
                  hover:border-red-500 transition-colors duration-200"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-24 object-cover object-center"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="col-span-3">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[600px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Display Right */}
        <div className="flex-1 space-y-8">
          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            <div className="flex">{renderRatingStars(product.rating)}</div>
            <p className="text-gray-500">({product.reviews})</p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-gray-900">
              ${product.new_price}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${product.old_price}
            </span>
          </div>

          {/* Description */}
          <div className="text-gray-600 leading-relaxed">
            {product.description}
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Select Size</h2>
            <div className="flex gap-4">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full
                  border-2 font-medium transition-all duration-200 cursor-pointer
                  ${selectedSize === size 
                    ? 'border-red-500 bg-red-500 text-white' 
                    : 'border-gray-200 text-gray-700 hover:border-red-500 hover:text-red-500'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={() => {
              if (selectedSize) {
                addToCart(product.id, selectedSize);
              } else {
                alert("Please Select Size");
              }
            }}
            className="w-full bg-red-500 text-white py-4 rounded-full font-semibold
            hover:bg-red-600 transform transition-all duration-300
            hover:shadow-lg hover:shadow-red-500/30 focus:outline-none
            focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer" 
          >
            ADD TO CART
          </button>

          {/* Additional Info */}
          <p className="text-sm text-gray-500">
            Free shipping on orders over $50
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
