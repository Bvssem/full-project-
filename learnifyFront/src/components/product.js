import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="rbt-shop-area rbt-section-overlayping-top rbt-section-gapBottom">
      <div className="container">
        <div className="row g-5">
          {products.map((product, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="rbt-default-card style-three rbt-hover">
                <div className="inner">
                  <div className="content pt--0 pb--10">
                    <h2 className="title">
                      <a href={`single-product.html/${product.id}`}>
                        {product.name}
                      </a>
                    </h2>
                    <span className="team-form">
                      <span className="location">By {product.author}</span>
                    </span>
                  </div>
                  <div className="thumbnail">
                    <a href={`single-product.html/${product.id}`}>
                      <img src={product.image} alt={product.name} />
                    </a>
                  </div>
                  <div className="content">
                    <div className="rbt-review justify-content-center">
                    </div>
                    <div className="rbt-price justify-content-center mt--10">
                    </div>
                    <div className="addto-cart-btn mt--20">
                      <a
                        className="rbt-btn btn-gradient hover-icon-reverse"
                        href="cart.html"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Add To Cart</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
