const INITIAL_STATE = {
  bannersList: [],
  productsList: [],
  categoriesList: [],
  cartList: {},
};
const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_BANNERS_LIST":
      return {
        ...state,
        bannersList: action.payload,
      };
    case "GET_PRODUCTS_LIST":
      return {
        ...state,
        productsList: action.payload,
      };
    case "GET_CATEGORIES_LIST":
      return {
        ...state,
        categoriesList: action.payload,
      };
    case "GET_CART_LIST":
      return {
        ...state,
        cartList: action.payload,
      };
    case "MANAGE_CART":
      return {
        ...state,
        cartList: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
