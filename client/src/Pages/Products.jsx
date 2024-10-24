import PullToRefresh from "react-pull-to-refresh";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false); 
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setIsRefreshing(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setFetchedProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProducts(); 
  }, []);

  const productView = (productId) => {
    navigate(`/user/product/${productId}`);
  };

  return (
    <PullToRefresh
      onRefresh={fetchProducts}
      resistance={2} 
    >
      <div className="w-full mt-5 mb-10 flex flex-wrap justify-center items-center gap-10 h-full overflow-y-auto">
        {isRefreshing ? (
          <p>Refreshing products...</p> 
        ) : fetchedProducts.length > 0 ? (
          fetchedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => productView(product.id)}
              className="w-52 h-80 flex flex-col justify-center items-center p-2 cursor-pointer rounded-lg shadow-md"
            >
              <div className="w-[100px] h-[100px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex justify-center items-center flex-col gap-2">
                <h2 className="mt-2 text-sm text-center">{product.title}</h2>
                <p className="text-sm">${product.price}</p>
              </div>
              <div className="flex justify-around w-full mt-3">
                <button className="bg-green-100 w-20 p-2 rounded-lg hover:bg-green-400 hover:text-white">
                  Buy
                </button>
                <button className="bg-green-100 w-20 p-2 rounded-lg hover:bg-green-400 hover:text-white">
                  Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p> 
        )}
      </div>
    </PullToRefresh>
  );
};

export default Products;
