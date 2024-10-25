import React from 'react';

const Product = ({ product, onView }) => {
  return (
    <div
      onClick={() => onView(product.id)}
      className="w-52 h-80 flex flex-col justify-center items-center p-2 cursor-pointer hover:scale-110 rounded-lg transition-all duration-200  shadow-xl border"
    >
      <div className="w-[100px] h-[100px]">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-5">
        <h2 className="mt-2 text-sm text-center">{product.title}</h2>
        <p className="text-sm">${product.price}</p>
      </div>
      <div className="flex justify-around  w-full mt-3">
        <button className="bg-green-100 w-20 p-2 rounded-lg transition-all duration-200 font-serif hover:bg-[#6cc48ff3] hover:text-white">
          Buy
        </button>
        <button className="bg-green-100 w-20 p-2 rounded-lg transition-all duration-200 font-serif hover:bg-[#6cc48ff3] hover:text-white">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
