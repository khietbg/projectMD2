import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { act_login } from "../redux/action";
import { useSelector } from "react-redux";

const initState = { email: "", password: "" };
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);
  const [userLogin, setUserLogin] = useState(initState);
  const [errMessenger, setErrMessenger] = useState(initState);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value });
  };
  const handleLogin = () => {
    if (userLogin.email.trim() === "" || userLogin.password.trim() === "") {
      setErrMessenger({ ...errMessenger, email: "khong duoc de trong" });
    } else {
      dispatch(act_login(userLogin));
      setUserLogin(initState);
    }
  };
  useEffect(() => {
    if (account.permission === 1) {
      navigate("/admin");
    } else if (account.fullname) {
      navigate("/");
    }
  }, [account, error]);

  return (
    <div>
      <h1 style={{textAlign:"center"}} className="text-primary fs-1 mt-5">LOGIN FORM</h1>
    <div className="d-flex justify-content-center  ">
      
      <form className="form-login ">
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
            value={userLogin.email}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
            value={userLogin.password}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <p className="text-danger">{error}</p>
        </div>
        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form2Example31"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
          <div className="col">
            {/* Simple link */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        {/* Submit button */}
        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleLogin}
        >
          Sign in
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github" />
          </button>
        </div>
      </form>
      </div>
      </div>
  );
};

export default Login;
