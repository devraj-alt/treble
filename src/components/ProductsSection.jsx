import axios from "axios";
import { useEffect, useState } from "react";
import { useFilter } from "../context/provider/FilterProvider";
import ProductItem from "./ProductItem";
import "./ProductsSectionStyle.css";

export const ProductsSection = () => {
  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([]);

  const { filterState, filterDispatch } = useFilter();

  const { priceSorting, categorySorting, ratingSorting } = filterState;

  const getProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      console.log(res);
      if (res) {
        setProductData(res.data.products);
        setFilteredProductData(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const sortProductByPrice = () => {
    if (priceSorting.LowToHigh) {
      const sortedProductsLowToHigh = [...filteredProductData].sort((a, b) => {
        return a.price - b.price;
      });
      setFilteredProductData(sortedProductsLowToHigh);
    } else if (priceSorting.HighToLow) {
      const sortedProductsByHighToLow = [...filteredProductData].sort(
        (a, b) => {
          return b.price - a.price;
        }
      );
      setFilteredProductData(sortedProductsByHighToLow);
    }
  };

  const sortProductByCategory = () => {
    let sortedProducts = [];
    if (categorySorting.Headphone) {
      const sortedProductsByHeadphones = [...productData].filter((item) => {
        return item.category === "Headphones";
      });
      sortedProducts = [...sortedProducts, ...sortedProductsByHeadphones];
    }
    if (categorySorting.Speaker) {
      const sortedProductsBySpeakers = [...productData].filter((item) => {
        return item.category === "Speakers";
      });
      sortedProducts = [...sortedProducts, ...sortedProductsBySpeakers];
    }
    if (categorySorting.Earbud) {
      const sortedProductsByEarbuds = [...productData].filter((item) => {
        return item.category === "Earbuds";
      });
      sortedProducts = [...sortedProducts, ...sortedProductsByEarbuds];
    }
    setFilteredProductData(sortedProducts);
  };

  const sortProductByRating = () => {
    const sortedProductsByRating = [...productData].filter((item) => {
      return item.rating <= ratingSorting.SelectedRange;
    });
    setFilteredProductData(sortedProductsByRating);
  };

  useEffect(() => {
    sortProductByPrice();
  }, [priceSorting]);

  useEffect(() => {
    sortProductByCategory();
  }, [categorySorting, productData]);

  useEffect(() => {
    sortProductByRating();
  }, [ratingSorting]);

  return (
    <div>
      <div className="ProductList-container">
        {filteredProductData.map((item) => {
          return <ProductItem item={item} />;
        })}
      </div>
    </div>
  );
};
