import { useState } from "react";
import upload_area from "../assets/upload_area.svg";

const Addproduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price : "",
  })
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }
  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,[e.target.name]:e.target.value
    })
  }
  const add_Product = async (e) => {
     e.preventDefault();
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', image);
   const res =  await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept:'application/json',
      },
      body: formData,
   })
    const data = await res.json();
    responseData = data;
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
     let res =  await fetch('http://localhost:4000/products/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
     })
      const data = await res.json();
      if (data.success) {
        alert('Product Added');
      }
      else {
        alert('Product failed')
      }
    }

}

  return (
    <div className="ml-64 p-8">
      {" "}
      {/* Offset for sidebar */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Product
        </h2>

        {/* Product Title */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Product Title
          </label>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Enter product title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
          />
        </div>

        {/* Price and Category Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Price */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input
                value={productDetails.old_price} onChange={changeHandler}
                type="text"
                name="old_price"
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
              />
            </div>
          </div>

          {/* Offer Price */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Offer Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input
                value={productDetails.new_price}
                onChange={changeHandler}
                type="text"
                name="new_price"
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
              />
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Product Category
            </label>
            <select
              value={productDetails.category}
              onChange={changeHandler}
              name="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white"
            >
              <option value="">Select category</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kid">Kids</option>
            </select>
          </div>
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors duration-200">
            <div className="space-y-1 text-center">
              <label htmlFor="file-input" className="cursor-pointer">
                <img
                  src={image?URL.createObjectURL(image):upload_area}
                  alt="Upload area"
                  className="mx-auto h-24 w-24 mb-4"
                />
                <div className="flex text-sm text-gray-600">
                  <span className="relative rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    Click to upload
                  </span>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </label>
              <input onChange={imageHandler}
                type="file"
                name="image"
                id="file-input"
                className="hidden"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button onClick={add_Product} className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
