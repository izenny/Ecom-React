import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryBar = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-wrap justify-end m-5 gap-4 mb-4">
      <button onClick={() => onCategorySelect(null)} className="px-3 py-1 bg-[#6cc48ff3] transition-all duration-200 hover:scale-105 font-serif text-white rounded">All</button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className="px-3 py-1 bg-[#72e0a3] rounded hover:bg-[#58b984] transition-all duration-200 hover:scale-105 text-white font-serif"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
