import axios from "axios";

export const fetchList = (key, type) => {
  return (dispatch) => {
    axios.get(`http://localhost:4000/${key}`).then((res) => {
      dispatch({
        type,
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
