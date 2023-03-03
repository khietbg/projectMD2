import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { act_del_cart, act_get_cart, logout } from "../redux/action";
import Cart from "./Cart";

const Carts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(act_get_cart());
  }, []);
    const carts = useSelector((state) => state.carts);
    const user = useSelector(state => state.user)
    console.log(user);
  const handleDelAlll = () => {
    carts.forEach((cart) => {
      dispatch(act_del_cart(cart.id));
    });
      dispatch(logout())
    alert("successful payment thank you");
    navigate("/");
  };
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <b>
        <h1 style={{ textAlign: "center" }}>Your Cart</h1>
      </b>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: 15 }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h2>
                        <h5 className="mb-0 text-muted">
                          {carts.length} items
                        </h5>
                      </div>
                      <hr className="my-4" />
                      {carts?.map((cart, index) => (
                        <Cart key={cart.id} cart={cart} index={index} />
                      ))}

                      <hr className="my-4" />
                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to={"/"} className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2" />
                            Back to shop
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h4 className="text-uppercase">items {carts.length}</h4>
                        <h4>
                          {carts.reduce(
                            (sum, item) => sum + item.price * item.quantity,
                            0
                          )}{" "}
                          $
                        </h4>
                      </div>

                     
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h4 className="text-uppercase">Fullname</h4>
                        <h4>
                          {user.fullname}
                        </h4>
                      </div>

                   
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h4 className="text-uppercase">Email</h4>
                        <h4>
                         {user.email}
                        </h4>
                      </div>

                      
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h4 className="text-uppercase">Address</h4>
                        <h4>
                          {user.address}
                        </h4>
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h4 className="text-uppercase">Phone</h4>
                        <h4>
                         {user.phone}
                        </h4>
                      </div>

                      <hr className="my-4" />

                      <button
                        onClick={() => handleDelAlll()}
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carts;
