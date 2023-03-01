import React from "react";
import { useNavigate,Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as action from "../redux/action";


const initState = {
  fullname: "",
  email: "",
  password: "",
  repassword: "",
  phone: "",
  address: "",
};

const Register = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
  const [newUser, setNewUser] = useState(initState);
  const [errMessenger, setErrMessenger] = useState(initState);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
    validate(name, value);
  };
  const validate = (name, value) => {
    if (name === "fullname") {
      if (value.trim() === "") {
        setErrMessenger({ ...errMessenger, [name]: "khong duoc de trong" });
      } else if (value.trim().length < 6) {
        setErrMessenger({
          ...errMessenger,
          [name]: "fullname phai tren 6 ky tu",
        });
      } else {
        setErrMessenger({ ...errMessenger, [name]: "" });
      }
    }
    if (name === "email") {
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (value.trim() === "") {
        setErrMessenger({ ...errMessenger, [name]: "khong duoc de trong" });
      } else if (!pattern.test(value)) {
        setErrMessenger({ ...errMessenger, [name]: "email k dung dinh dang" });
      } else {
        setErrMessenger({ ...errMessenger, [name]: "" });
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        setErrMessenger({ ...errMessenger, [name]: "khong duoc de trong" });
      } else if (value.trim().length < 6) {
        setErrMessenger({
          ...errMessenger,
          [name]: "password phai tren 6 ky tu",
        });
      } else {
        setErrMessenger({ ...errMessenger, [name]: "" });
      }
    }
    if (name === "repassword") {
      if (value.trim() === "") {
        setErrMessenger({ ...errMessenger, [name]: "khong duoc de trong" });
      } else if (value !== newUser.password) {
        setErrMessenger({
          ...errMessenger,
          [name]: "mat khau khong trung khop",
        });
      } else {
        setErrMessenger({ ...errMessenger, [name]: "" });
      }
    }
    if (name === "phone") {
      if (value.trim() === "") {
        setErrMessenger({ ...errMessenger, [name]: "khong duoc de trong" });
      } else {
        setErrMessenger({ ...errMessenger, [name]: "" });
      }
    }
    if (name === "address") {
      if (value.trim() === "") {
        setErrMessenger({ ...errMessenger, [name]: "khong duoc de trong" });
      } else {
        setErrMessenger({ ...errMessenger, [name]: "" });
      }
    }
  };
    const handleAdd = (e) => {
        
        let condition_1 =
            newUser.fullname !== "" &&
            newUser.email !== "" &&
            newUser.password !== "" &&
            newUser.repassword !== "" &&
            newUser.phone !== "" &&
            newUser.address !== ""
            ;
        let condition_2 =
            errMessenger.fullname === "" &&
            errMessenger.email === "" &&
            errMessenger.password === "" &&
            errMessenger.repassword === "" &&
            errMessenger.phone === "" &&
            errMessenger.address === ""
            ;
        if (condition_1&&condition_2) {
            dispatch(action.act_add_user(newUser))
            setNewUser(initState)
            Navigate("/login")
        }
       
    }

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="fullname"
                              value={newUser.fullname}
                              onChange={handleChange}
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Full name
                            </label>
                            <p className="text-danger">
                              {errMessenger.fullname}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="email"
                              value={newUser.email}
                              onChange={handleChange}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Email
                            </label>
                            <p className="text-danger">{errMessenger.email}</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="password"
                              value={newUser.password}
                              onChange={handleChange}
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <p className="text-danger">
                              {errMessenger.password}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="repassword"
                              value={newUser.repassword}
                              onChange={handleChange}
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                            <p className="text-danger">
                              {errMessenger.repassword}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-telephone-forward-fill me-3"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
                            />
                          </svg>

                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="phone"
                              value={newUser.phone}
                              onChange={handleChange}
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              telephone
                            </label>
                            <p className="text-danger">{errMessenger.phone}</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="address"
                              value={newUser.address}
                              onChange={handleChange}
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              address
                            </label>
                            <p className="text-danger">
                              {errMessenger.address}
                            </p>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                                                      className="btn btn-primary btn-lg"
                                                      onClick={handleAdd}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
