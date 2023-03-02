import React from "react";
import { Link } from "react-router-dom";

const Carts = () => {
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
                        <h5 className="mb-0 text-muted">3 items</h5>

                        {/* cart item start*/}
                      </div>
                      <hr className="my-4" />
                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                            className="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h4 className="text-black mb-0">product name</h4>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <input
                            id="form1"
                            name="quantity"
                            min={0}
                            Value={1}
                            type="number"
                            className="form-control form-control-sm"
                          />
                        </div>
                        {/* cart item and */}
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">$</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <button className="btn btn-warning">Update</button>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <button className="btn btn-danger">Delete</button>
                        </div>
                      </div>
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
                        <h4 className="text-uppercase">items 3</h4>
                        <h4>222 $</h4>
                      </div>

                      <hr className="my-4" />

                      <button
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
