import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const demo = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div className="w-1/5 p-2 flex flex-col gap-2 cursor-pointer border border-gray-600 rounded-xl overflow-hidden">
      <div className="h-70 overflow-hidden">
        <img
          src={item.img}
          alt=""
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
      <h2 className="text-white text-2xl font-extralight tracking-wider px-4 text-center whitespace-nowrap">
        {item.name}
      </h2>
      <div className="flex gap-4 justify-center items-center">
        {item?.hasDiscount && (
          <p className="text-gray-400 text-xl line-through tracking-wider">
            {item.beforePrice}
          </p>
        )}
        <p className="text-emerald-200 text-2xl tracking-wide">{item.price}</p>
      </div>
      <h3 className="text-center pb-4 text-gray-300">
        stock count: <span className="">{item.count}</span>
      </h3>
      <div className="text-center pb-4">
        <button
          onClick={demo}
          className="text-xl py-3 px-9 border rounded-xl bg-emerald-800 hover:bg-emerald-400 transition-all duration-300"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
