import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./product.css";
import { fetchList, ManageCart } from "../../redux/action";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const Products = (props) => {
  const {
    fetchCategoriesList,
    categoriesList,
    fetchProductsList,
    productsList,
    cartList,
    addToCart,
  } = props;
  const [category, setCategory] = useState("all");
  useEffect(function () {
    if (!categoriesList.length) fetchCategoriesList();
    fetchProductsList();
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
  return (
    <div>
      <div className="container product-container">
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
              {categoriesList.map((categoryItem) => (
                <div
                  className="category-card text-center"
                  key={categoryItem.id}
                  onClick={() => setCategory(categoryItem.id)}
                >
                  {categoryItem.name}
                </div>
              ))}
            </div>
          ) : null}
          <div className="col-md-10 col-sm-12 mx-auto">
            <div className="row px-0">
              {productsList.length
                ? productsList.map((product) => {
                    if (product.category === category || category === "all") {
                      return (
                        <div
                          className="col-lg-3 col-md-6 col-12 mb-2 px-1"
                          key={product.id}
                        >
                          <div className="card h-100 p-1">
                            <h6
                              className="card-title h6"
                              style={{ fontSize: "14px" }}
                            >
                              {product.name}
                            </h6>
                            <div className="card-body p-md-0 d-lg-block d-flex">
                              <div style={{ padding: "8px" }}>
                                <img
                                  src={require(`../../${product.imageURL}`).default}
                                  className="card-img-top"
                                  alt="..."
                                />
                              </div>
                              <div
                                style={
                                  screenWidth > 800
                                    ? { width: "100%", position: "relative" }
                                    : { width: "150%" }
                                }
                              >
                                <p
                                  className="card-text p-2 card-description"
                                  style={{
                                    fontSize: "14px",
                                    backgroundColor: "#ebebeb",
                                  }}
                                >
                                  {product.description}
                                </p>

                                {screenWidth >= 800 ? (
                                  <div
                                    className="d-flex my-3"
                                    style={{
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                    }}
                                  >
                                    <p
                                      className="m-0"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <strong>MRP Rs: {product.price}</strong>
                                    </p>
                                    {!cartList[product.id] ? (
                                      <button
                                        className="btn btn-sm btn-kart"
                                        type="button"
                                        onClick={() => AddProduct(product.id)}
                                      >
                                        Add
                                      </button>
                                    ) : (
                                      <ConditionalButtonSet
                                        RemoveProduct={RemoveProduct}
                                        AddProduct={AddProduct}
                                        productId={product.id}
                                        noOfItem={cartList[product.id]}
                                      />
                                    )}
                                  </div>
                                ) : (
                                  <div>
                                    {!cartList[product.id] ? (
                                      <button
                                        className="btn btn-kart btn-sm w-100 px-1"
                                        onClick={() => AddProduct(product.id)}
                                      >
                                        Buy now @ Rs {product.price}
                                      </button>
                                    ) : (
                                      <ConditionalButtonSet
                                        price={product.price}
                                        RemoveProduct={RemoveProduct}
                                        AddProduct={AddProduct}
                                        productId={product.id}
                                        noOfItem={cartList[product.id]}
                                      />
                                    )}
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
    fetchCategoriesList: () =>
      dispatch(fetchList("categoriesJSON", "GET_CATEGORIES_LIST")),
    fetchProductsList: () =>
      dispatch(fetchList("productsJSON", "GET_PRODUCTS_LIST")),
    addToCart: (id) => dispatch(ManageCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

const ConditionalButtonSet = ({
  RemoveProduct,
  noOfItem,
  productId,
  AddProduct,
  price,
}) => {
  return (
    <div
      className="d-flex"
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p className="m-0" style={{ fontSize: "12px" }}>
        <strong>MRP Rs: {price}</strong>
      </p>
      <button
        className="btn-transparent"
        type="button"
        onClick={() => RemoveProduct(productId)}
      >
        {" "}
        <RemoveCircleIcon />
      </button>
      <label>
        <input
          type="number"
          className="form-control form-control-sm"
          disabled
          value={noOfItem}
          style={{ width: "50px" }}
        />
      </label>
      <button
        className="btn-transparent"
        type="button"
        onClick={() => AddProduct(productId)}
      >
        {" "}
        <AddCircleIcon />
      </button>
    </div>
  );
};
