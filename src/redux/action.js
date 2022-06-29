import axios from "axios";
export const getBannersList = () => {
  return (dispatch) => {
    axios.get(`http://localhost:4000/bannersJSON`).then((res) => {
      dispatch({
        type: "GET_BANNERS_LIST",
        payload: res.data,
      });
    });
  };
};

export const getProductsList = () => {
  return (dispatch) => {
    axios.get(`http://localhost:4000/productsJSON`).then((res) => {
      dispatch({
        type: "GET_PRODUCTS_LIST",
        payload: res.data,
      });
    });
  };
};
export const getCategoriesList = () => {
  return (dispatch) => {
    axios.get(`http://localhost:4000/categoriesJSON`).then((res) => {
      dispatch({
        type: "GET_CATEGORIES_LIST",
        payload: res.data,
      });
    });
  };
};
export const getCartsList = () => {
  return (dispatch) => {
    axios.get(`http://localhost:4000/cartsJSON`).then((res) => {
      dispatch({
        type: "GET_CARTS_LIST",
        payload: res.data,
      });
    });
  };
};

export const addToCart = (data) => {
  return (dispatch) => {
    dispatch({ type: "ADD", payload: data });
  };
};
export const ManageCart = (id) => {
  return (dispatch) => {
    dispatch({ type: "MANAGE_CART", payload: id });
  };
};
