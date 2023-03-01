import React from 'react';

const Footer = () => {
    return (
        <div>
            <section>
        <div className="section-app">
          <div className="grid">
            <div className="col l-12 m-12 c-12">
              <div className="section-app-container">
                <div className="col l-3 m-12 c-12">
                  <div className="section-login">
                    <h3 className="section-take">
                      <i className="far fa-envelope" />
                      ĐĂNG KÝ NHẬN CODE
                    </h3>
                  </div>
                </div>
                <div className="col l-5 m-12 c-12">
                  <div className="section-mail">
                    <input
                      type="email"
                      placeholder="Địa chỉ email của bạn"
                      className="section-mail-btn"
                    />
                    <input
                      type="submit"
                      defaultValue="Đăng Ký"
                      className="section-create-account"
                    />
                  </div>
                </div>
                <div className="col l-4 m-12 c-12">
                  <div className="section-voucher">
                    <p className="section-now">...Nhận Ngay</p>
                    <h3 className="section-voucher-us">VOUCHER 100k</h3>
                    từ chúng tôi.
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-app">
          <div className="grid">
            <div className="col l-12 m-12 c-12">
              <div className="row">
                <div className="col l-4 m-4 c-12">
                  <div className="footer-info">
                    <a href="" className="footer-logo">
                      <img
                        className="footer-logo-img"
                        src={require("../img/footer-logo/cua-hang-giay-sneaker-chinh-giay-uy-tin-nhat-den-king-shoes-authenti-hcm-2-1624430336.png")}
                        alt=""
                      />
                    </a>
                    <h3 className="footer-contact">THÔNG TIN LIÊN HỆ</h3>
                    <p className="footer-official">
                      KINGSHOES.VN Trang Thông Tin Chính Thức.
                    </p>
                    <p className="footer-address">
                      ⛪ Địa chỉ: 192/2 Nguyễn Thái Bình, Phường 12, Quận Tân
                      Bình, Thành phố Hồ Chí Minh
                    </p>
                    <p className="footer-email">
                      Email : cskh.kingshoes.vn@gmail.com
                    </p>
                    <p className="footer-link">
                      <a href="" className="footer-link-list">
                        https://kingshoes.vn/
                      </a>
                    </p>
                    <p className="footer-link">
                      <a href="" className="footer-link-list">
                        https://twitter.com/KingShoes_vn
                      </a>
                    </p>
                    <p className="footer-link">
                      <a href="" className="footer-link-list">
                        https://instagram.com/KingShoes.vn
                      </a>
                    </p>
                    <p className="footer-link">
                      <a href="" className="footer-link-list">
                        https://facebook.com/pg/www.KingShoes.vn
                      </a>
                    </p>
                    <p className="footer-link">
                      <a href="" className="footer-link-list">
                        https://www.youtube.com/www.KingShoes.vn
                      </a>
                    </p>
                    <p className="footer-link">
                      <a href="" className="footer-link-list">
                        http://bit.ly/KINGSHOES_map
                      </a>
                    </p>
                    <p className="footer-link">
                      <a href="" className="footer-link-list">
                        https://www.tiktok.com/@kingshoes.vn
                      </a>
                    </p>
                    <p className="footer-link">
                      <a href="" className="footer-link-list">
                        https://www.tiktok.com/@kingshoes_sneaker.radio
                      </a>
                    </p>
                    <p className="footer-hotline">
                      ☎️ Hotline Bán Hàng: 0909.300.746 - 0909.45.0001
                    </p>
                    <p className="footer-care">☎️ Hotline CSKH: 0902.368.001</p>
                    <div className="footer-introduce">
                      <video
                        className="content-check-video"
                        width="100%"
                        controls=""
                      >
                        <source
                          src={require("../img/video/yt1s.com - Checkin Kingshoesvn cửa hàng Sneaker chính hãng uy tín nhất tại HCM_v720P.mp4")}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="col l-4 m-4 c-12">
                  <div className="footer-regime">
                    <div className="footer-support">
                      <h3 className="footer-client">HỖ TRỢ KHÁCH HÀNG</h3>
                      <p className="footer-client-item">
                        <a href="" className="footer-client-list">
                          Chăm sóc khách hàng
                        </a>
                      </p>
                      <p className="footer-client-item">
                        <a href="" className="footer-client-list">
                          Thanh toán
                        </a>
                      </p>
                      <p className="footer-client-item">
                        <a href="" className="footer-client-list">
                          Hướng dẫn mua hàng
                        </a>
                      </p>
                    </div>
                    <div className="footer-policy">
                      <h3 className="footer-insurance">CHÍNH SÁCH</h3>
                      <p className="footer-insurance-item">
                        <a href="" className="footer-insurance-list">
                          Chế độ bảo hành
                        </a>
                      </p>
                      <p className="footer-insurance-item">
                        <a href="" className="footer-insurance-list">
                          Chính sách đổi hàng
                        </a>
                      </p>
                      <p className="footer-insurance-item">
                        <a href="" className="footer-insurance-list">
                          Bảo mật thông tin
                        </a>
                      </p>
                      <p className="footer-insurance-item">
                        <a href="" className="footer-insurance-list">
                          Chính sách giao nhận
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col l-12 m-12 c-12">
                      <div className="footer-description">
                        <p className="footer-business">
                          Số ĐKKD: 41N8041309 cấp ngày 17/8/2018. Nơi cấp Ủy Ban
                          Nhân Dân <br />
                          Quận Tân Bình. Hộ Kinh Doanh: KINGSHOES. Hotline:
                          0909.300.746
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l-4 m-4 c-12">
                  <div className="footer-fanpage">
                    <div className="footer-evaluate">
                      <h3 className="footer-fanpage-item">FANPAGE</h3>
                      <a href="">
                        <img
                          src={require("../img/footer-logo/200927756_1681990195319420_3101251395634522863_n.jpg")}
                          alt=""
                          className="footer-fanpage-img"
                        />
                      </a>
                      <a href="" className="footer-fanpage-list">
                        <button className="footer-submit-btn" type="submit">
                          <i className="fab fa-facebook-square" />
                          Thích Trang
                        </button>
                      </a>
                      <a href="" className="footer-btn-mess">
                        <button
                          className="footer-submit-btn-mess"
                          type="submit"
                        >
                          <i className="fas fa-comments" />
                          Gửi Tin Nhắn
                        </button>
                      </a>
                    </div>
                    <div className="footer-remarkable">
                      <a href="" className="footer-remarkable-item">
                        <img
                          src={require("../img/footer-logo/footer-img 1.jpg")}
                          alt=""
                          className="footer-remarkable-img"
                        />
                      </a>
                      <a href="" className="footer-remarkable-item">
                        <img
                          src={require("../img/footer-logo/footer-img 2.jpg")}
                          alt=""
                          className="footer-remarkable-img"
                        />
                      </a>
                      <a href="" className="footer-remarkable-item">
                        <img
                          src={require("../img/footer-logo/footer-img 3.jpg")}
                          alt=""
                          className="footer-remarkable-img"
                        />
                      </a>
                      <a href="" className="footer-remarkable-item">
                        <img
                          src={require("../img/footer-logo/footer-img  4.jpg")}
                          alt=""
                          className="footer-remarkable-img"
                        />
                      </a>
                      <a href="" className="footer-remarkable-item">
                        <img
                          src={require("../img/footer-logo/footer-img 5.jpg")}
                          alt=""
                          className="footer-remarkable-img"
                        />
                      </a>
                      <a href="" className="footer-remarkable-item">
                        <img
                          src={require("../img/footer-logo/footer-img 6.jpg")}
                          alt=""
                          className="footer-remarkable-img"
                        />
                      </a>
                      <a href="" className="footer-remarkable-item">
                        <img
                          src={require("../img/footer-logo/footer-img 7.jpg")}
                          alt=""
                          className="footer-remarkable-img"
                        />
                      </a>
                      <a href="" className="footer-remarkable-item">
                        <img
                          src={require("../img/footer-logo/footer-img 8.jpg")}
                          alt=""
                          className="footer-remarkable-img"
                        />
                      </a>
                      <a href="" className="footer-remarkable-item">
                        <img
                          src={require("../img/footer-logo/footer-img 9.jpg")}
                          alt=""
                          className="footer-remarkable-img"
                        />
                      </a>
                      <a href="" className="footer-remarkable-item">
                        <img
                          src={require("../img/footer-logo/footer-img 10.jpg")}
                          alt=""
                          className="footer-remarkable-img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="col l-12 m-12 c-12">
                <div className="footer-license">
                  <p className="footer-license-item">© Bản quyền thuộc về</p>
                  <h3 className="footer-license-logo">KINGSHOES.VN</h3>
                  <a href="" className="footer-standard">
                    Thiet Ke Web Chuẩn SEO
                  </a>
                  <p className="footer-standard-by-item">Bởi</p>
                  <a href="" className="footer-standard-link">
                    SEOWEBMAKER.COM
                  </a>
                  <div className="footer-license-item-link">
                    <a href="" className="footer-license-list">
                      Giày chạy bộ,
                    </a>
                    <a href="" className="footer-license-list">
                      Giày tập Gym,
                    </a>
                    <a href="" className="footer-license-list">
                      Giày tập Yoga,
                    </a>
                    <a href="" className="footer-license-list">
                      Giày thể thao,
                    </a>
                    <a href="" className="footer-license-list">
                      Giày chính hãng
                    </a>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-active">
        <a className="footer-active-item" href="">
          <img
            src={require("../img/footer-logo/zalo-icon-2.png")}
            alt=""
            className="footer-active-img"
          />
        </a>
        <div className="footer-active-fix-icon" />
      </div>
      <div className="footer-active-mess">
        <a href="" className="footer-active-mess-item">
          <i className="footer-active-mess-img fab fa-facebook-messenger" />
        </a>
      </div>
      <div className="footer-active-up">
        <a href="">
          <i className="footer-active-up-icon fas fa-chevron-up" />
        </a>
      </div>
      <label htmlFor="footer-category-input" className="footer-fliter">
        <i className="footer-fliter-icon fas fa-filter" />
      </label>
      <input
        hidden=""
        type="checkbox"
        name=""
        className="footer-input"
        id="footer-category-input"
      />
      <label
        htmlFor="footer-category-input"
        className="footer-fliter-overlay"
      />
      <div className="footer-category">
        <label
          htmlFor="footer-category-input"
          className="footer-category-close"
        >
          <i className="fas fa-times" />
        </label>
        <p className="footer-category-item">Chọn Size Giày</p>
        <input
          type="button"
          defaultValue="Chọn Size Giày"
          className="footer-category-btn"
        />
        <p className="footer-category-item">Khoảng Giá</p>
        <input
          type="button"
          defaultValue="Tất Cả"
          className="footer-category-btn"
        />
        <p className="footer-category-item">Sắp Xếp Theo</p>
        <input
          type="button"
          defaultValue="Giá Thấp đến cao"
          className="footer-category-btn"
        />
        <input
          type="button"
          defaultValue="Tìm Giày Ngay"
          className="footer-category-btn-search"
        />
        <i className="footer-category-btn-search-icon fas fa-search" />
      </div>
        </div>
    );
}

export default Footer;
