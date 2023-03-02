import React from 'react';

const Slider = () => {
    return (
        <div>
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
}

export default Slider;
