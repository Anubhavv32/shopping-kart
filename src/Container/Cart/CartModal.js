import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./cart.css";
import { ManageCart } from "../../redux/action";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import lowestPrice from "../../images/lowest-price.png";


export const CartModal = ({ cartList, productsList, ManageCart }) => {
  const [productCart, setProductCart] = useState(
    productsList.filter((product) => cartList[product.id])
  );
  useEffect(() => {
    const newCart = productsList.filter((product) => cartList[product.id]);
    setProductCart(newCart);
  }, [cartList]);
  const AddProduct = (id) => {
    console.log(id);
    let list = { ...cartList };
    !list[id] ? (list[id] = 1) : list[id]++;
    ManageCart(list);
  };
  const RemoveProduct = (id) => {
    let list = { ...cartList };
    list[id] === 1 ? delete list[id] : list[id]--;
    ManageCart(list);
  };
  let temp = 0;
  return (
    <div
      className="cart-modal modal fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              My Cart [0 items]
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">

            {Array.isArray(productCart) && productCart.length
              ? productCart.map((product) => {
                  temp = temp + cartList[product.id] * product.price;
                  return (
                    <div
                      className="card mb-3 p-2 mx-auto"
                      style={{ maxWidth: "760px" }}
                      key={product.id}
                    >
                      <div className="row g-0" style={{alignItems:"center"}}>
                        <div className="col-2">
                          <img
                            src={require(`../../${product.imageURL}`).default}
                            width={100}
                            height={100}
                            className="img-fluid rounded-start"
                            alt={product.sku}
                          />
                        </div>
                        <div className="col-8">
                          <div className="card-body">
                            <h6
                              className="card-title"
                              style={{ fontSize: "14px" }}
                            >
                              {product.name}
                            </h6>
                            <div
                              className="d-flex"
                              style={{
                                alignItems: "center",
                              }}
                            >
                              <button
                                className="btn btn-sm"
                                type="button"
                                onClick={() => RemoveProduct(product.id)}
                              >
                                <RemoveCircleIcon />
                              </button>

                              <input
                                type="number"
                                className="form-control form-control-sm"
                                disabled
                                value={cartList[product.id]}
                              />
                              <button
                                className="btn btn-sm"
                                type="button"
                                onClick={() => AddProduct(product.id)}
                              >
                                <AddCircleIcon />
                              </button><>&#215; </> {product.price}
                            </div>
                          </div>
                        </div>
                        <div className="col-2">Rs:{" "}{cartList[product.id] * product.price}</div>
                      </div>
                    </div>
                  );
                })
              : null}
              <div  className="card">
                <div className="card-body d-flex"  style={{alignItems:"center"}}>
                    <img alt="" src={lowestPrice} />
                    <p>You won't find cheaper anywhere.</p>
                </div>
              </div>
          </div>
          <div className="modal-footer">
            {/* <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
            <div>Total: {temp}</div>
            <button type="button" className="btn btn-kart w-100">
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    productsList: state.productsList,
    cartList: state.cartList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ManageCart: (id) => dispatch(ManageCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
