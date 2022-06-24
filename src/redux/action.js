import axios from "axios";
export const getBannersList = () => {
  return (dispatch) => {
    axios.get(`http://localhost:4000/bannersJSON`).then((res) => {
      console.log(res);
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
      console.log(res);
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
