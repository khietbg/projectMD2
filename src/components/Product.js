import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { act_get_product, act_post_cart } from "../redux/action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Product = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(act_get_product());
  }, []);
  const products = useSelector((state) => state.products);
  const user = useSelector((state)=>state.user)
  const handleAdd = (product) => {
    if (user.permissin) {
      alert("tài khoản admin không thể mua vui lòng đăng ký tài khoản")
      navigate("/login")
    } else if (user.fullname) {
      dispatch(act_post_cart({...product, quantity: 1}))
    } else {
       alert("vui lòng đăng nhập trước khi mua hàng")
    navigate("/login")
    }
   
  }

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
                        <button className="btn btn-success" onClick={()=>handleAdd(product)}>AddToCart</button>
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
