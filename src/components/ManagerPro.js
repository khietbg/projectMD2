import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../firebase";
import {
  act_add_product,
  act_del_product,
  act_get_product,
  act_update_product,
} from "../redux/action";

let quantity = 1;

const ManagerPro = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrls, setImageUrls] = useState("");
  const [errMessenger, setErrMessenger] = useState("");
  const [updateId, setUpdateId] = useState("");
  const dispatch = useDispatch();
  // Tạo storage lưu trữ từ dịch vụ của firebase
  const imagesListRef = ref(storage, "images/");
  const uploadFile = (e) => {
    let imageUpload = e.target.files[0];
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
  };
  useEffect(() => {
    dispatch(act_get_product());
  }, []);
  const products = useSelector((state) => state.products);
  const handleAdd = () => {
    if (name.trim() === "" || price.trim() === "" || imageUrls.trim() === "") {
      setErrMessenger("vui lòng điền đầy đủ thông tin sản phẩm");
    } else {
      dispatch(act_add_product({ name, price, imageUrls}));
    }
    setImageUrls("");
    setName("");
    setPrice("");
    setUpdateId("");
  };
  const handleUpdate = (product) => {
    setImageUrls(product.imageUrls);
    setName(product.name);
    setPrice(product.price);
    setUpdateId(product.id);
  };
  const handleUpdatePro = () => {
    dispatch(
      act_update_product({
        name: name,
        price: price,
        imageUrls: imageUrls,
        id: updateId,
      })
    );
    setImageUrls("");
    setName("");
    setPrice("");
    setUpdateId("");
  };

  return (
    <div className="w-100">
      <div className="mb-5 fs-4 text-center">
        <input
          name="imageUrls"
          placeholder="image"
          onChange={uploadFile}
          type={"file"}
        />
        <img width={100} src={imageUrls} />
        <p>proImage</p>
        <input
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>productName</p>
        <input
          placeholder="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <p>productPrice</p>
        <p className="text-danger">{errMessenger}</p>
        <button className="btn btn-success" onClick={handleAdd}>
          CreateProduct
        </button>
        <button onClick={handleUpdatePro} className="btn btn-primary">update</button>
      </div>
      <h2 style={{ textAlign: "center" }}>ManagerPro</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">NAME</th>
            <th scope="col">PRICE</th>
            <th scope="col">IMAGE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <img width={80} src={product.imageUrls} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(act_del_product(product.id))}
                >
                  delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleUpdate(product)}
                >
                  update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerPro;
