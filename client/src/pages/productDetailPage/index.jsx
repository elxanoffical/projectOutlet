import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S"); //

  const product = products.find((item) => item.id == Number(id));

  const handleBack = () => {
    navigate("/products");
  };

  const handleBuyNow = () => {
    setShowModal(true); // click olunanda modal sehifesi acilir
  };

  const handleCloseModal = () => {
    setShowModal(false); // modal sehifesi baglanir
  };

  const increasePlus = () => {
    setCounter((count) => count + 1);
  };

  const decreasePlus = () => {
    setCounter((count) => (count > 1 ? count - 1 : 1));
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size); // click edilende modalda istediyimiz size olur
  };

  const buyNow = () => {
    alert('sebete elave olundu')
    window.location.reload();
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen py-8 overflow-hidden">
      <div className="w-3/4 mx-auto space-x-8 max-w-4xl border-2 border-emerald-300 p-5 flex gap-8 rounded-xl mt-20 relative">
        <button
          onClick={handleBack}
          className="absolute top-0 right-0 py-2 px-4 rounded-tr-lg text-xl"
        >
          ✖
        </button>
        <div className="h-80 overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover transition-all duration-300 hover:scale-105 cursor-pointer "
            src={product.img}
          />
        </div>


        <div className=" w-2/4 flex flex-col gap-5 items-start">
          <h2 className="text-white text-3xl font-semibold tracking-wider">
            {product.name}
          </h2>
          <div className="flex items-center gap-3">
            {product?.hasDiscount && (
              <p className="text-gray-400 text-xl line-through tracking-wider">
                {product.beforePrice}
              </p>
            )}
            -<p className="text-emerald-200 text-2xl">{product.price}</p>
          </div>

          <h3 className="text-gray-300 text-2xl font-extralight">
            Stock Count :{" "}
            <span className="text-emerald-200">{product.count}</span>
          </h3>

          <div className="flex gap-2">
            {["S", "M", "L", "XL", "2XL"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`border py-1 px-6 text-lg font-medium cursor-pointer
                  rounded-lg shadow-lg hover:shadow-cyan-500/50 focus:border-emerald-200
                  focus:border-[3px] focus:shadow-none ${
                    selectedSize === size ? "bg-emerald-300 text-black" : ""
                  }`}
              >
                {size}
              </button>
            ))}
          </div>

          <h1 className="text-sm tracking-wider text-gray-400 font-medium">Həm Azərbaycana həm də Türkiyəyə çatdırılma üçün uyğundur.</h1>

          <div className="flex items-center gap-5">
            <button
              onClick={handleBuyNow}
              className="text-xl font-medium py-3 px-6 border rounded-xl
             bg-emerald-200 text-black transition-all duration-300
             hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              Buy Now
            </button>
            <button
              className="text-xl font-medium py-3 px-6 border rounded-xl
             bg-emerald-200 text-black transition-all duration-300
             hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 w-1/3 p-5 rounded-lg shadow-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-black text-xl"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-white text-xl">Price: ${product.price}</p>
            <p className="text-white text-xl">count: {product.count}</p>
            <p className="text-white text-xl">Size: {selectedSize}</p>
            <div className="flex items-center justify-between gap-4 mt-4">
             <div className=" flex items-center gap-4">
             <button
                onClick={decreasePlus}
                className="text-2xl bg-gray-200 text-black px-3 py-1 rounded-md"
              >
                -
              </button>
              <span className="text-xl">{counter}</span>
              <button
                onClick={increasePlus}
                className="text-2xl bg-gray-200 text-black px-3 py-1 rounded-md"
              >
                +
              </button>
             </div>

              <div>
              <button 
              onClick={buyNow}
              className="border py-2 px-5 bg-emerald-200 text-black rounded-xl">Buy</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
