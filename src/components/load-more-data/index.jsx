import { useEffect, useState } from "react";
import "./styles.css";
export default function LoadMoreData({ limit = 40 }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const skip = count * limit;

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) =>
          count > 0 ? [...prevData, ...data.products] : data.products
        );
      }
      console.log(data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  const handleClick = () => {
    setCount((c) => c + 1);
    if (skip + limit + limit >= 100) {
      setDisabled(true);
    }
  };

  if (loading) {
    return <div>Loading products please wait</div>;
  }

  return (
    <div className="Load-more-data-container">
      <div className="product-container">
        {products && products.length > 0
          ? products.map((product, index) => (
              <div key={index} className="product">
                <h2 className="product-rating">{product.rating}</h2>
                <h3 className="product-title">{product.title}</h3>

                <img src={product.thumbnail} alt={product.title}></img>
                <p>{product.description}</p>
              </div>
            ))
          : null}
      </div>
      <div className="LoadMoreButtonContainer">
        <button
          id="loadButton"
          onClick={handleClick}
          disabled={disabled}
          className="btn"
        >
          Load more products
        </button>
        {disabled && <h2>You have viewed all the products!</h2>}
      </div>
    </div>
  );
}
