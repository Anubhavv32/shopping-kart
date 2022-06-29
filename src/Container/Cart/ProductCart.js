import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { ManageCart } from "../../redux/action";

export const ProductCart = ({ cartList, productsList, ManageCart }) => {
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
    <div className="container">
      <div className="row mx-auto">
        <div className="col">
          {Array.isArray(productCart) && productCart.length
            ? productCart.map((product) => {
                temp = temp + cartList[product.id] * product.price;
                return (
                  <div
                    className="card mb-3 p-2 mx-auto"
                    style={{ maxWidth: "760px" }}
                    key={product.id}
                  >
                    <div className="row g-0">
                      <div className="col-md-2">
                        <img
                          src={require(`../../${product.imageURL}`)}
                          width={100}
                          height={100}
                          className="img-fluid rounded-start"
                          alt={product.sku}
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">
                            {cartList[product.id]} <>&#215; </>
                            {product.price} = {cartList[product.id] * product.price}
                          </p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div
                          className="d-flex"
                          style={{
                            justifyContent: "space-between",
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
                            className="form-control"
                            disabled
                            value={cartList[product.id]}
                          />
                          <button
                            className="btn btn-sm"
                            type="button"
                            onClick={() => AddProduct(product.id)}
                          >
                            <AddCircleIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
            <div>Total: {temp}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
