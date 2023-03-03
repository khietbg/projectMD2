import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { act_del_cart, act_update_cart } from "../redux/action";

const Cart = (props) => {
    const dispatch = useDispatch()
  let { cart, index } = props;

  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    setQuantity(+e.target.value);
  };
    useEffect(() => {
        setQuantity(cart.quantity)
    }, [props])
    const handleUpCart = (cart) => {
        dispatch(act_update_cart({...cart,quantity}))
    }
        
  return (
    <div className="row mb-4 d-flex justify-content-between align-items-center">
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img
          src={cart.imageUrls}
          className="img-fluid rounded-3"
          alt="Cotton T-shirt"
        />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h4 className="text-black mb-0">{cart.name}</h4>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <input
          id="form1"
          name="quantity"
                  value={quantity}
          type="number"
          className="form-control form-control-sm"
          onChange={(e) => handleChange(e)}
        />
        {/*  */}
      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h5 className="mb-0">{cart.price * quantity} $</h5>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <button className="btn btn-warning" onClick={()=>handleUpCart(cart)}>Update</button>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <button className="btn btn-danger" onClick={()=>dispatch(act_del_cart(cart.id))}>Delete</button>
      </div>
    </div>
  );
};

export default Cart;
