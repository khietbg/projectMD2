import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../redux/action";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
     
      <div className="nav d-flex justify-content-center bg-light">
        <div className="nav-pc">
          <div className="navigation">
            <a href="" className="navigation-logo">
              <img
                className="navigation-logo-img"
                src={require("../img/logo-header/cửa-hàng-giày-sneaker-chính-hàng-uy-tín-nhất-dến-king-shoes-authenti-hcm-6.png")}
                alt=""
              />
            </a>
          </div>
          <div className="nav-category">
            <ul className="category-pc">
              <li className="category-pc-item">
                <a href="" className="category-pc-list">
                  GIỚI THIỆU
                </a>
              </li>
              <li className="category-pc-item category-pc-show-nike">
                <a href="" className="category-pc-list">
                  NIKE
                </a>
                <ul className="category-nike-menu">
                  <li className="category-nike-menu-item">
                    <a className="category-nike-menu-list" href="">
                      Nam
                    </a>
                  </li>
                  <li className="category-nike-menu-item">
                    <a className="category-nike-menu-list" href="">
                      Nữ
                    </a>
                  </li>
                </ul>
              </li>
              <li className="category-pc-item category-pc-show-adidas">
                <a href="" className="category-pc-list">
                  ADIDAS
                </a>
                <ul className="category-adidas-menu">
                  <li className="category-adidas-menu-item">
                    <a href="" className="category-adidas-menu-list">
                      Nam
                    </a>
                  </li>
                  <li className="category-adidas-menu-item">
                    <a href="" className="category-adidas-menu-list">
                      Nữ
                    </a>
                  </li>
                </ul>
              </li>
              <li className="category-pc-item category-pc-show-jordan">
                <a href="" className="category-pc-list">
                  JORDAN
                </a>
                <ul className="category-jordan-menu">
                  <li className="category-jordan-menu-item">
                    <a href="" className="category-jordan-menu-list">
                      AIR JORDAN
                    </a>
                  </li>
                </ul>
              </li>
              <li className="category-pc-item category-pc-show-yeezy">
                <a href="" className="category-pc-list">
                  YEEZY
                </a>
                <ul className="category-yeezy-menu">
                  <li className="category-yeezy-menu-item">
                    <a href="" className="category-yeezy-menu-list">
                      YEEZY BOOST 350
                    </a>
                  </li>
                  <li className="category-yeezy-menu-item">
                    <a href="" className="category-yeezy-menu-list">
                      YEEZY BOOST 700
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="nav-search">
            <input
              type="text"
              placeholder="Nhập từ cần tìm"
              className="nav-search-btn"
            />
            <i className="nav-search-btn-icon fas fa-search" />
          </div>
        </div>
        <header className="header d-flex  align-items-center ">
        <div className="header-heading">
          <div className="header-king">
            <a href="" className="header-king-queen">
              👑 KING AND QUEEN
            </a>
            {user.fullname ? (
              <span className="header-check">
                <i className="fas fa-users" />
                {user.fullname}
                <button onClick={handleLogout}>LogOut</button>
              </span>
            ) : (
              <Link to={"/login"} className="header-check">
                <i className="fas fa-users" />
                LOGIN
              </Link>
            )}

            <i className="header-hotline-icon fas fa-phone" />
            <a className="header-hotline-fix" href="">
              Hotline:
            </a>
            <a href="" className="header-hotline">
              0909300746
            </a>
          </div>
        </div>
      </header>
      </div>
      <div className="slider">
        <div className="slider-app">
          <input type="radio" className="slider-btn" id="b1" name="btn" />
          <input type="radio" className="slider-btn" id="b2" name="btn" />
          <input type="radio" className="slider-btn" id="b3" name="btn" />
          <div className="slider-view">
            <img
              src={require("../img/slider-img/slider-img 1.jpg")}
              alt=""
              className="slider-img slider-1"
            />
            <img
              src={require("../img/slider-img/slider-img 2.jpg")}
              alt=""
              className="slider-img slider-2"
            />
            <img
              src={require("../img/slider-img/slider-img 3.png")}
              alt=""
              className="slider-img slider-3"
            />
          </div>
          <div className="slider-buttons">
            <label htmlFor="b1" className="slider-button" />
            <label htmlFor="b2" className="slider-button" />
            <label htmlFor="b3" className="slider-button" />
          </div>
        </div>
      </div>
      <div className="commit">
        <div className="grid wide">
          <div className="row">
            <div className="col l-4 m-4 c-12">
              <div className="commit-genuine">
                <i className="commit-genuine-icon far fa-credit-card" />
                <h3 className="commit-authentic">CAM KẾT CHÍNH HÃNG</h3>
                <span className="commit-hundred">100 % Authentic</span>
                <p className="commit-europe">
                  Cam kết sản phẩm chính hãng từ Châu Âu, Châu Mỹ...
                </p>
              </div>
            </div>
            <div className="col l-4 m-4 c-12">
              <div className="commit-genuine">
                <i className="commit-genuine-icon fas fa-truck" />
                <h3 className="commit-authentic">GIAO HÀNG HỎA TỐC</h3>
                <span className="commit-hundred">Express delivery</span>
                <p className="commit-europe">
                  SHIP hỏa tốc 1h nhận hàng trong nội thành HCM
                </p>
              </div>
            </div>
            <div className="col l-4 m-4 c-12">
              <div className="commit-genuine">
                <i className="commit-genuine-icon fas fa-phone-volume" />
                <h3 className="commit-authentic">HỖ TRỢ 24/24</h3>
                <span className="commit-hundred">Supporting 24/24</span>
                <p className="commit-europe">Gọi ngay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
