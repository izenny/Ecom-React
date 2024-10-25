import PullToRefresh from "react-pull-to-refresh";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Components/Product";
import CategoryBar from "../Components/CategoryBar";

const Products = () => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false); 
  const navigate = useNavigate();

  const fetchProducts = async (category = null) => {
    try {
      setIsRefreshing(true);
      const url = category 
        ? `https://fakestoreapi.com/products/category/${category}`
        : "https://fakestoreapi.com/products";
      const response = await axios.get(url);
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

  const handleCategorySelect = (category) => {
    fetchProducts(category);
  };

  const productView = (productId) => {
    navigate(`/user/product/${productId}`);
  };

  return (
    <PullToRefresh onRefresh={() => fetchProducts()} resistance={2}>
      <CategoryBar onCategorySelect={handleCategorySelect} />
      <div className="w-full mt-5 p-10 mb-10 flex flex-wrap justify-center items-center gap-12  h-full overflow-y-auto">
        {isRefreshing ? (
          <p>Refreshing products...</p> 
        ) : fetchedProducts.length > 0 ? (
          fetchedProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              onView={productView}
            />
          ))
        ) : (
          <p>Loading products...</p> 
        )}
      </div>
    </PullToRefresh>
  );
};

export default Products;
