import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./product.css";
import {
  getCategoriesList,
  getProductsList,
  ManageCart,
} from "../../redux/action";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const Products = ({
  getCategoriesList,
  categoriesList,
  getProductsList,
  productsList,
  cartList,
  addToCart,
}) => {
  const [category, setCategory] = useState("all");
  useEffect(() => {
    if (!categoriesList.length) getCategoriesList();
    getProductsList();
  }, []);
  const AddProduct = (id) => {
    let list = { ...cartList };
    !list[id] ? (list[id] = 1) : list[id]++;
    addToCart(list);
  };
  const RemoveProduct = (id) => {
    let list = { ...cartList };
    list[id] === 1 ? delete list[id] : list[id]--;
    addToCart(list);
  };
  let screenWidth = window.innerWidth;
  console.log(cartList);
  return (
    <div>
      <div className="container">
        <div className="row category-list my-3">
          {categoriesList.length && screenWidth < 500 ? (
            <div className="col">
              <select
                className="form-select"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Products</option>
                {categoriesList.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null}
        </div>
        <div className="row mt-5">
          {categoriesList.length && screenWidth >= 500 ? (
            <div className="col-2 px-0" style={{ backgroundColor: "#ebebeb" }}>
              <div
                className="category-card text-center"
                onClick={() => setCategory("all")}
              >
                All Products
              </div>
              {categoriesList.map((category) => {
                return (
                  <div
                    className="category-card text-center"
                    key={category.id}
                    onClick={() => setCategory(category.id)}
                  >
                    {category.name}
                  </div>
                );
              })}
            </div>
          ) : null}
          <div className="col-md-10 col-sm-12 mx-auto">
            <div className="row px-0">
              {productsList.length
                ? productsList.map((product) => {
                    if (product.category === category || category === "all") {
                      return (
                        <div
                          className="col-lg-3 col-md-4 col-12 mb-2 px-1"
                          key={product.id}
                        >
                          <div className="card h-100 p-1">
                            <h6
                              className="card-title h6"
                              style={{ minHeight: "40px" }}
                            >
                              {product.name}
                            </h6>
                            <div className="card-body p-md-0">
                              <img
                                src={require(`../../${product.imageURL}`)}
                                className="card-img-top"
                                alt="..."
                              />
                              <p
                                className="card-text p-2"
                                style={{ fontSize: "14px", backgroundColor: "#ebebeb" }}
                              >
                                {product.description}
                              </p>
                              <div
                                className="d-flex my-3"
                                style={{
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <h6
                                  className="m-0"
                                  style={{ fontSize: "12px" }}
                                >
                                  MRP Rs: {product.price}
                                </h6>
                                {!cartList[product.id] ? (
                                  <button
                                    className="btn btn-sm btn-kart"
                                    type="button"
                                    onClick={() => AddProduct(product.id)}
                                  >
                                    Add
                                  </button>
                                ) : (
                                  <div
                                    className="d-flex"
                                    style={{
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                    }}
                                  >
                                    <button
                                      className="btn-transparent"
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
                                      style={{ width: "50px" }}
                                    />
                                    <button
                                      className="btn-transparent"
                                      type="button"
                                      onClick={() => AddProduct(product.id)}
                                    >
                                      <AddCircleIcon />
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoriesList: state.categoriesList,
    productsList: state.productsList,
    cartList: state.cartList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesList: () => dispatch(getCategoriesList()),
    getProductsList: () => dispatch(getProductsList()),
    addToCart: (id) => dispatch(ManageCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
