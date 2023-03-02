import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { act_get_product } from "../redux/action";
import { useEffect } from "react";


const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(act_get_product());
  }, []);
  const products = useSelector((state) => state.products);

  return (
    <div>
      <div className="">
        <div className="grid">
          <div className="col l-5 m-5 c-12">
            <div className="container-new">
              <a href="" className="container-letter">
                - SẢN PHẨM MỚI
              </a>
            </div>
          </div>
        </div>
        <div className="container-product">
          <div className="grid">
            <div className="l-12 m-12">
              <div className="row row-cols-4 flex-wrap">
                {products?.map((product) => (
                  <div key={product.id} className="col mt-14 l-2-4">
                    <div className="container-product-app">
                      <div className="container-product-column">
                        <a href="" className="product-item">
                          <img
                            style={{ height: "217px" }}
                            className="product-item-img "
                            src={product.imageUrls}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-description">
                        <a href="" className="product-description-list">
                          {product.name}
                        </a>
                      </div>
                      <div className="product-evaluate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="product-price">
                        <span className="product-price-item">
                          {product.price} $
                        </span>
                        <button className="btn btn-success">AddToCart</button>
                      </div>
                      <div className="product-new-list">New</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Product;
