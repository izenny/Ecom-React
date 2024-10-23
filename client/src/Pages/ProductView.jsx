import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  console.log(productId);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productId]);
  return (
    <div className="h-full flex justify-center items-center w-full ">
      {product ? (
        <div className="flex flex-col md:flex-row justify-center p-2 md:p-10 shadow items-center">
          <div className=" w-[200px] h-[200px]">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="w-full flex flex-col justify-around gap-6 items-center">
            <h2 className="text-2xl text-center font-semibold">
              {product.title}
            </h2>
            <p className="text-sm p-5">{product.description}</p>

            <p className="text-4xl font-mono font-bold">${product.price}</p>
            <div className="flex justify-around w-full mt-3 mb-3">
              <button className="bg-green-100 w-36  p-2 rounded-lg hover:bg-green-400 hover:text-white">
                Buy
              </button>
              <button className="bg-green-100 w-36 p-2 rounded-lg hover:bg-green-400 hover:text-white">
                Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading Product</div>
      )}
    </div>
  );
};

export default ProductView;
